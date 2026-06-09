const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware - Serve static files from current directory
app.use(express.static(path.join(__dirname), {
    extensions: ['html', 'css', 'js', 'png', 'jpg', 'jpeg', 'gif'],
    maxAge: '1d'
}));
app.use(express.json());

// Set content type headers
app.use((req, res, next) => {
    if (req.url.endsWith('.css')) {
        res.type('text/css');
    } else if (req.url.endsWith('.js')) {
        res.type('application/javascript');
    }
    next();
});

// Serve index.html on root
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'), { 'Content-Type': 'text/html' });
});

// Serve index.html for any unknown routes (SPA behavior)
app.get('/:path(*)', (req, res) => {
    if (!req.path.startsWith('/api')) {
        res.sendFile(path.join(__dirname, 'index.html'));
    }
});

// Simple API endpoint (replacing PHP api.php)
app.get('/api', (req, res) => {
    res.json({
        service: 'NaNaKi Codex API',
        version: '1.0',
        status: 'active',
        developer: 'NaNaKi Team'
    });
});

// POST endpoint for contact form
app.post('/api/contact', (req, res) => {
    const input = req.body;
    res.json({
        status: 'ok',
        message: 'ได้รับข้อความแล้ว ทีมงานจะติดต่อกลับ'
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
    console.log(`📝 API available at http://localhost:${PORT}/api`);
});
