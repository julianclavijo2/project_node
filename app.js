const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('¡Hola, mundo!');
});
app.get('/mensaje', (req, res) => {
    res.send('Hola julian');
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
