import express from 'express';
import { Pool } from 'pg';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;

// Настройка подключения к PostgreSQL
const pool = new Pool({
    user: 'your_username',
    host: 'localhost',
    database: 'your_database',
    password: 'your_password',
    port: 5432,
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// API endpoint для проверки статуса заказа
app.post('/api/check-order', async (req, res) => {
    const { orderNumber } = req.body;

    try {
        // Проверяем, что номер заказа состоит из 10 цифр
        if (!/^\d{10}$/.test(orderNumber)) {
            return res.status(400).json({ error: 'Неверный формат номера заказа' });
        }

        // Запрос к базе данных
        const result = await pool.query(
            'SELECT status FROM orders WHERE order_number = $1',
            [orderNumber]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Заказ не найден' });
        }

        res.json({ status: result.rows[0].status });
    } catch (err) {
        console.error('Error checking order:', err);
        res.status(500).json({ error: 'Внутренняя ошибка сервера' });
    }
});

app.get('/', (req, res) => {
    res.send('Hello Express');
})

app.get('/About', (req, res) => {
    res.send('About Express');
})

app.listen(port, () => {
    console.log(`Сервер запущен. Порт: ${port}`);
});