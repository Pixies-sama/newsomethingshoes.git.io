require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const bcrypt = require('bcrypt');

// ENVIRONMENT VARIABLES VALIDATION CHECK
const REQUIRED_ENV_VARS = [
    'DATABASE_URL', 
    'CLOUDINARY_CLOUD_NAME', 
    'CLOUDINARY_API_KEY', 
    'CLOUDINARY_API_SECRET'
];
REQUIRED_ENV_VARS.forEach(varName => {
    if (!process.env[varName]) {
        console.error(`CRITICAL CONFIGURATION ERROR: Missing variable [${varName}] in .env`);
        process.exit(1);
    }
});

const app = express();
const PORT = process.env.PORT || 5000;

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.DATABASE_URL.includes('localhost') ? false : { rejectUnauthorized: false }
});

// COMPLETELY UNLOCKED CORS FOR DUAL FRONTENDS (Dashboard & Main Site)
app.use(cors({
    origin: true, 
    credentials: true,
    methods: ['GET', 'POST', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'] 
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const storage = multer.memoryStorage();
const upload = multer({ storage });

// Runtime memory store for the active bcrypt token string
let currentSessionToken = null;

// Security Middleware checking the Header Bearer Token
const requireBearerAuth = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ success: false, message: "Missing token authorization header." });
    }
    
    const token = authHeader.split(' ')[1];
    
    // Validate if token matches our current live memory token
    if (currentSessionToken && token === currentSessionToken) {
        return next();
    }
    return res.status(401).json({ success: false, message: "Unauthorized dashboard request." });
};

// ==================== ADMINISTRATIVE ROUTING ====================

// LOGIN ROUTE (Generates Bcrypt Token String)
app.post('/api/auth/login', async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ success: false, message: "Credentials missing." });
    }
    try {
        const query = 'SELECT * FROM admins WHERE username = $1';
        const result = await pool.query(query, [username.trim()]);

        if (result.rows.length === 0) {
            return res.status(401).json({ success: false, message: "Invalid credentials." });
        }

        const adminRecord = result.rows[0];
        const match = await bcrypt.compare(password, adminRecord.password_hash);

        if (!match) {
            return res.status(401).json({ success: false, message: "Invalid credentials." });
        }

        // Create a unique salt seed string using timestamp
        const seedPayload = `${username.trim()}-${Date.now()}`;
        const tokenHash = await bcrypt.hash(seedPayload, 10);
        
        // Save token to server memory
        currentSessionToken = tokenHash;

        // Send token string back to frontend JSON packet
        res.json({ success: true, token: tokenHash });
    } catch (err) {
        res.status(500).json({ success: false, message: "Server connection failure." });
    }
});

// CHECK STATUS ROUTE
app.get('/api/auth/status', (req, res) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.json({ authenticated: false });
    }
    
    const token = authHeader.split(' ')[1];
    if (currentSessionToken && token === currentSessionToken) {
        return res.json({ authenticated: true });
    }
    res.json({ authenticated: false });
});

// LOGOUT ROUTE
app.post('/api/auth/logout', (req, res) => {
    currentSessionToken = null; // Clear server memory token
    res.json({ success: true, message: "Logged out completely." });
});

// ==================== CATALOG REST ENDPOINTS ====================

app.get('/api/products', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM products ORDER BY id DESC');
        res.json(result.rows.map(row => ({
            id: row.id, name: row.name, gender: row.gender, price: parseFloat(row.price),
            description: row.description, specs: row.specs || [], imageUrls: row.image_urls || [], clicks: row.clicks
        })));
    } catch (err) { res.status(500).json({ success: false }); }
});

app.post('/api/products/upload', requireBearerAuth, upload.array('footwearImages', 5), async (req, res) => {
    try {
        if (!req.files || req.files.length === 0) return res.status(400).json({ success: false, message: "Assets missing." });
        const { name, gender, price, description, specs } = req.body;

        const uploadPromises = req.files.map(file => {
            return new Promise((resolve, reject) => {
                const uploadStream = cloudinary.uploader.upload_stream({ folder: 'showroom' }, (error, result) => {
                    if (error) return reject(error);
                    resolve(result.secure_url);
                });
                uploadStream.end(file.buffer);
            });
        });
        const cloudinaryUrls = await Promise.all(uploadPromises);
        const specsArray = specs ? specs.split('\n').map(s => s.trim()).filter(Boolean) : [];

        const result = await pool.query(
            `INSERT INTO products (name, gender, price, description, specs, image_urls, clicks) VALUES ($1, $2, $3, $4, $5, $6, 0) RETURNING *`,
            [name.toUpperCase(), gender || 'Unisex', parseFloat(price), description || '', specsArray, cloudinaryUrls]
        );
        res.json({ success: true, data: result.rows[0] });
    } catch (error) { res.status(500).json({ success: false }); }
});

app.post('/api/products/:id/click', async (req, res) => {
    try {
        const result = await pool.query('UPDATE products SET clicks = clicks + 1 WHERE id = $1 RETURNING clicks', [parseInt(req.params.id)]);
        res.json({ success: true, clicks: result.rows[0]?.clicks });
    } catch (err) { res.status(500).json({ success: false }); }
});

app.post('/api/products/:id/reset', requireBearerAuth, async (req, res) => {
    try {
        await pool.query('UPDATE products SET clicks = 0 WHERE id = $1', [parseInt(req.params.id)]);
        res.json({ success: true });
    } catch (err) { res.status(500).json({ success: false }); }
});

app.delete('/api/products/:id', requireBearerAuth, async (req, res) => {
    try {
        const result = await pool.query('DELETE FROM products WHERE id = $1 RETURNING *', [parseInt(req.params.id)]);
        res.json({ success: !!result.rows.length });
    } catch (err) { res.status(500).json({ success: false }); }
});

app.listen(PORT, () => console.log(`🚀 Secure Bcrypt-Token Engine running on port ${PORT}`));