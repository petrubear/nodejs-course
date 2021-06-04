const path = require('path');
const express = require('express');

const app = express();

// ruta para recursos estaticos y hbs templates
const staticFolder = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates');

// hbs configuration
app.set('view engine', 'hbs');
app.set('views', viewsPath);

// setup static folder
app.use(express.static(staticFolder));

app.get('', (req, res) => {
    // template, objeto de valores
    res.render('index', {
        title: 'Weather App',
        name: 'Edison',
    });
});

app.get('/about', (req, res) => {
    // template, objeto de valores
    res.render('about', {
        title: 'About Me',
        name: 'Edison',
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        helpText: 'Get some help',
    });
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
