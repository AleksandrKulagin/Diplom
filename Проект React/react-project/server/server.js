import express from 'express';
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello Express');
})

app.get('/About', (req, res) => {
    res.send('About Express');
})

let port = 5173;
app.listen(port, () => {
    console.log(`Сервер запущен: http://localhost:${port}`);
})