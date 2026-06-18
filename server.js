require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const bcrypt = require('bcrypt');

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

// Basic, clean CORS configuration
// Clean, wide-open CORS for public data access
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const storage = multer.memoryStorage();
const upload = multer({ storage });

// Static master text session token
const masterTextToken = "newsomething_master_admin_session_token_prod";

// Security Middleware reading token directly from request text body or text query parameters
const requireTextAuth = (req, res, next) => {
    // Check query string (for GET/DELETE) or body payload (for POST)
    const token = req.query.token || req.body.token;
    
    if (token === masterTextToken) {
        return next();
    }
    return res.status(401).json({ success: false, message: "Unauthorized dashboard text session." });
};

// ==================== ADMINISTRATIVE ROUTING ====================

// LOGIN ROUTE
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

        // Send back the plain text token in the JSON body response
        res.json({ success: true, token: masterTextToken });
    } catch (err) {
        res.status(500).json({ success: false, message: "Server connection failure." });
    }
});

// CHECK STATUS ROUTE - Parses the token completely out of the URL text parameters
app.get('/api/auth/status', (req, res) => {
    const token = req.query.token;
    if (token === masterTextToken) {
        return res.json({ authenticated: true });
    }
    res.json({ authenticated: false });
});

// LOGOUT ROUTE
app.post('/api/auth/logout', (req, res) => {
    res.json({ success: true, message: "Logged out." });
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

// Protected upload route (Reads token from multi-part body fields)
app.post('/api/products/upload', upload.array('footwearImages', 5), (req, res, next) => {
    // Multer populates req.body before running validation fields
    requireTextAuth(req, res, next);
}, async (req, res) => {
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

app.post('/api/products/:id/reset', requireTextAuth, async (req, res) => {
    try {
        await pool.query('UPDATE products SET clicks = 0 WHERE id = $1', [parseInt(req.params.id)]);
        res.json({ success: true });
    } catch (err) { res.status(500).json({ success: false }); }
});

app.delete('/api/products/:id', requireTextAuth, async (req, res) => {
    try {
        const result = await pool.query('DELETE FROM products WHERE id = $1 RETURNING *', [parseInt(req.params.id)]);
        res.json({ success: !!result.rows.length });
    } catch (err) { res.status(500).json({ success: false }); }
});

app.listen(PORT, () => console.log(`🚀 Text-Based Session Engine active on port ${PORT}`));