const path = require('path');
const express = require('express');

const app = express();
// ruta para recursos estaticos
const staticFolder = path.join(__dirname, '../public');
app.use(express.static(staticFolder));

// app.com/weather
app.get('/weather', (req, res) => {
    res.send({
        forecast: 'Nublado, 30% posibilidad de lluvia',
        location: 'Quito, Ecuador',
    });
});

// Server config
app.listen(3000, () => {
    console.log('Server is listening on 3000');
});
