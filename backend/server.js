const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// middleware های پایه
app.use(cors());
app.use(express.json());

// route اصلی برای تست
app.get('/', (req, res) => {
  res.json({ 
    message: 'Vish Marketplace API کار می‌کند!',
    status: 'success',
    timestamp: new Date().toISOString()
  });
});

// route سلامت سرور
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK',
    database: ' disconnected', // بعداً وصل می‌شه
    timestamp: new Date().toISOString()
  });
});

// راه‌اندازی سرور
app.listen(PORT, () => {
  console.log(`✅ سرور ویـش روی پورت ${PORT} اجرا شد`);
  console.log(`📡 آدرس سرور: http://localhost:${PORT}`);
});
