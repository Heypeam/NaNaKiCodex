const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname), {
    extensions: ['html', 'css', 'js', 'png', 'jpg', 'jpeg', 'gif'],
    maxAge: '1d'
}));
app.use(express.json());

app.use((req, res, next) => {
    if (req.url.endsWith('.css')) {
        res.type('text/css');
    } else if (req.url.endsWith('.js')) {
        res.type('application/javascript');
    }
    next();
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'), { 'Content-Type': 'text/html' });
});

app.get('/:path(*)', (req, res) => {
    if (!req.path.startsWith('/api')) {
        res.sendFile(path.join(__dirname, 'index.html'));
    }
});

app.get('/api', (req, res) => {
    res.json({
        service: 'NaNaKi Codex API',
        version: '1.0',
        status: 'active',
        developer: 'NaNaKi Team'
    });
});

app.post('/api/contact', (req, res) => {
    const input = req.body;
    res.json({
        status: 'ok',
        message: 'ได้รับข้อความแล้ว ทีมงานจะติดต่อกลับ'
    });
});

app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
    console.log(`📝 API available at http://localhost:${PORT}/api`);
});
