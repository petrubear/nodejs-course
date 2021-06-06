/* eslint-disable object-curly-spacing */
const path = require('path');
const express = require('express');
const hbs = require('hbs');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const app = express();

// ruta para recursos estaticos y hbs templates
const staticFolder = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// handlebars configuration
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

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
        name: 'Edison',
    });
});

// app.com/weather
app.get('/weather', (req, res) => {
    const address = req.query.address;
    if (!address) {
        return res.send({
            error: 'No address provided',
        });
    }
    geocode(address, (error, { longitude, latitude, location } = {}) => {
        if (error) {
            return res.send({ error: error });
        }

        forecast(longitude, latitude, (error, forecastData) => {
            if (error) {
                return res.send({ error: error });
            }

            res.send({
                forecast: forecastData.weather,
                location: location,
                address: address,
            });
        });
    });
});

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Edison',
        error: 'Help page not found',
    });
});

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Edison',
        error: 'Page not found',
    });
});

// Server config
app.listen(3000, () => {
    console.log('Server is listening on 3000');
});
