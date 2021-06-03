const express = require('express');

const app = express();

// app.com
app.get('', (req, res) => {
    res.send('<h1>Weather</h1>');
});

// app.com/help
app.get('/help', (req, res) => {
    res.send([{
        name: 'Edison',
        age: 39,
    },
    {
        name: 'Sarah',
        age: 39,
    },
    ]);
});

// app.com/about
app.get('/about', (req, res) => {
    res.send('<h1>About page</h1>');
});

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
