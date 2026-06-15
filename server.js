require('dotenv').config();
const express = require('express');
const session = require('express-session');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Set up directory references
const uploadDir = path.join(__dirname, 'public/uploads');
const dbPath = path.join(__dirname, 'database.json');

if (!fs.existsSync(uploadDir)){
    fs.mkdirSync(uploadDir, { recursive: true });
}

// Database Read/Write Utility Helpers
const readDatabase = () => {
  try {
    if (!fs.existsSync(dbPath)) fs.writeFileSync(dbPath, JSON.stringify([]));
    return JSON.parse(fs.readFileSync(dbPath, 'utf8') || '[]');
  } catch (err) {
    return [];
  }
};

const writeDatabase = (data) => {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2), 'utf8');
};

// Multer Image Configuration Engine (Handles multiple uploads flawlessly)
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, 'footwear-' + uniqueSuffix + path.extname(file.originalname));
  }
});
const upload = multer({ storage });

// Parsing & Static Asset Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: process.env.SESSION_SECRET || 'fallback-secret-key-keep-it-safe',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 1000 * 60 * 60 * 2 }
}));

// Route Protection Guard
const requireAuth = (req, res, next) => {
  if (req.session && req.session.isAdmin) return next();
  res.redirect('/admin');
};

// ==================== VIEW ROUTING ====================
app.get('/admin', (req, res) => {
  if (req.session && req.session.isAdmin) return res.redirect('/admin/dashboard');
  res.sendFile(path.join(__dirname, 'src/views/login.html'));
});

app.get('/admin/dashboard', requireAuth, (req, res) => {
  res.sendFile(path.join(__dirname, 'src/views/dashboard.html'));
});

// ==================== REST API ENDPOINTS ====================
app.post('/api/auth/login', (req, res) => {
  const { username, password } = req.body;
  if (username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD) {
    req.session.isAdmin = true;
    return res.json({ success: true });
  }
  res.status(401).json({ success: false, message: "Invalid administrator credentials." });
});

app.get('/admin/logout', (req, res) => {
  req.session.destroy(() => res.redirect('/admin'));
});

// Fetch all elements for UI mapping
app.get('/api/products', (req, res) => {
  res.json(readDatabase());
});

// ACTIVE MULTI-UPLOAD CONTROLLER
app.post('/api/products/upload', requireAuth, upload.array('footwearImages', 5), (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ success: false, message: "At least one display image is required." });
    }

    const { name, gender, price, description, specs } = req.body;
    const localDb = readDatabase();
    
    // Map multiple upload entries into accessible URL array chains
    const filePaths = req.files.map(file => `/uploads/${file.filename}`);

    const newProduct = {
      id: localDb.length > 0 ? localDb[localDb.length - 1].id + 1 : 1,
      name: name.toUpperCase(),
      gender,
      price: parseFloat(price) || 0,
      description,
      specs: specs ? specs.split('\n').map(s => s.trim()).filter(Boolean) : [],
      imageUrls: filePaths,
      clicks: 0
    };

    localDb.push(newProduct);
    writeDatabase(localDb);
    
    res.json({ success: true, data: newProduct });
  } catch (error) {
    res.status(500).json({ success: false, message: "Upload formatting processing failure." });
  }
});

// ACTIVE METRIC: Track Outbound WhatsApp Inquiry Clicks
app.post('/api/products/:id/click', (req, res) => {
  const localDb = readDatabase();
  const product = localDb.find(p => p.id === parseInt(req.params.id));
  
  if (product) {
    product.clicks = (product.clicks || 0) + 1;
    writeDatabase(localDb);
    return res.json({ success: true, clicks: product.clicks });
  }
  res.status(404).json({ success: false, message: "Item row not found." });
});

// ACTIVE METRIC CONFIGURATION: Reset tracking history back to zero
app.post('/api/products/:id/reset', requireAuth, (req, res) => {
  const localDb = readDatabase();
  const product = localDb.find(p => p.id === parseInt(req.params.id));
  
  if (product) {
    product.clicks = 0;
    writeDatabase(localDb);
    return res.json({ success: true, message: "Metrics cleared." });
  }
  res.status(404).json({ success: false, message: "Item not found." });
});

// REMOVE ASSET: Complete permanent row drop and server image file wipe
app.delete('/api/products/:id', requireAuth, (req, res) => {
  let localDb = readDatabase();
  const product = localDb.find(p => p.id === parseInt(req.params.id));
  
  if (!product) {
    return res.status(404).json({ success: false, message: "Item not found." });
  }

  // Erase associated image files from local disk directory space
  if (product.imageUrls && Array.isArray(product.imageUrls)) {
    product.imageUrls.forEach(imgPath => {
      const fullPath = path.join(__dirname, 'public', imgPath);
      if (fs.existsSync(fullPath)) {
        try { fs.unlinkSync(fullPath); } catch (e) { console.warn(`Could not drop file: ${fullPath}`); }
      }
    });
  }

  localDb = localDb.filter(p => p.id !== parseInt(req.params.id));
  writeDatabase(localDb);

  res.json({ success: true, message: "Asset completely deleted." });
});

app.listen(PORT, () => {
  console.log(`\nServer active at http://localhost:${PORT}`);
  console.log(`Admin panel: http://localhost:${PORT}/admin\n`);
});