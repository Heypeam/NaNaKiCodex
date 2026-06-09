const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.static(path.join(__dirname)));
app.use(express.json());

// Serve index.html on root
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
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
