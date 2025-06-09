// server.js
import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
app.use(cors()); // разрешаем запросы с localhost:5173 и т.д.

app.get('/api/reverse-geocode', async (req, res) => {
    const { lat, lon } = req.query;
    const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&accept-language=en`;

    try {
        const response = await fetch(url, {
            headers: {
                'User-Agent': 'KarenApp/1.0',
            }, // обязателен!
        });
        const data = await response.json();
        console.log(data)
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Ошибка геокодинга' });
    } 
});

app.listen(3333, () => {
    console.log('Сервер запущен на http://localhost:3333');
});