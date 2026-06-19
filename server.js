require('dotenv').config();
const express = require('express');
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

// ==================== MASTER OPEN-ACCESS CORS MIDDLEWARE ====================
app.use((req, res, next) => {
    // Blow the doors open for any domain (localhost, Vercel, production storefronts)
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');
    
    // Intercept browser preflight OPTIONS probes immediately and force pass them
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
    next();
});
// ============================================================================

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const storage = multer.memoryStorage();
const upload = multer({ storage });

// Master text token string matching frontend local storage handles
const masterTextToken = "newsomething_master_admin_session_token_prod";

// Security Gatekeeper reading text tokens out of query params or request bodies
const requireTextAuth = (req, res, next) => {
    const token = req.query.token || req.body.token;
    
    if (token === masterTextToken) {
        return next();
    }
    return res.status(401).json({ success: false, message: "Unauthorized dashboard text session." });
};

// ==================== ADMINISTRATIVE ROUTING ====================

// Administrative Verification Login
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

        // Return token directly as clear text inside JSON mapping
        res.json({ success: true, token: masterTextToken });
    } catch (err) {
        res.status(500).json({ success: false, message: "Server connection failure." });
    }
});

// Heartbeat Status Route matching frontend query parameter checking
app.get('/api/auth/status', (req, res) => {
    const token = req.query.token;
    if (token === masterTextToken) {
        return res.json({ authenticated: true });
    }
    res.json({ authenticated: false });
});

// Dashboard Disconnect Router
app.post('/api/auth/logout', (req, res) => {
    res.json({ success: true, message: "Logged out." });
});

// ==================== CATALOG REST ENDPOINTS ====================

// Public endpoint reading all products
app.get('/api/products', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM products ORDER BY id DESC');
        res.json(result.rows.map(row => ({
            id: row.id, name: row.name, gender: row.gender, price: parseFloat(row.price),
            description: row.description, specs: row.specs || [], imageUrls: row.image_urls || [], clicks: row.clicks
        })));
    } catch (err) { res.status(500).json({ success: false }); }
});

// Protected Multi-file Upload Channel (Checks token inside multer text body parameters)
app.post('/api/products/upload', upload.array('footwearImages', 5), (req, res, next) => {
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

// Public click accumulation metric pulse tracker
app.post('/api/products/:id/click', async (req, res) => {
    try {
        const result = await pool.query('UPDATE products SET clicks = clicks + 1 WHERE id = $1 RETURNING clicks', [parseInt(req.params.id)]);
        res.json({ success: true, clicks: result.rows[0]?.clicks });
    } catch (err) { res.status(500).json({ success: false }); }
});

// Protected click clearing path
app.post('/api/products/:id/reset', requireTextAuth, async (req, res) => {
    try {
        await pool.query('UPDATE products SET clicks = 0 WHERE id = $1', [parseInt(req.params.id)]);
        res.json({ success: true });
    } catch (err) { res.status(500).json({ success: false }); }
});

// Protected collection asset erasure endpoint
app.delete('/api/products/:id', requireTextAuth, async (req, res) => {
    try {
        const result = await pool.query('DELETE FROM products WHERE id = $1 RETURNING *', [parseInt(req.params.id)]);
        res.json({ success: !!result.rows.length });
    } catch (err) { res.status(500).json({ success: false }); }
});

app.listen(PORT, () => console.log(`🚀 Wide-Open Global Access Engine active on port ${PORT}`));