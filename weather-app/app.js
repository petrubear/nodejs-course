// http://api.weatherstack.com/current?access_key=eb1cdbf17f681c6c8adb31928e8f4a63&query=Quito
const log = console.log;
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const argumets = process.argv.length;

if (argumets === 3) {
    const location = process.argv[2];
    // si hay un error no se genera el segundo parametro
    // por lo que necesito valor por defecto con = {}
    geocode(location, (error, {longitude, latitude, location} = {}) => {
        if (error) {
            return log('Error', error);
        }

        forecast(longitude, latitude, (error, forecastData) => {
            if (error) {
                return console.log('Error', error);
            }

            console.log(location);
            console.log(forecastData.weather);
        });
    });
} else {
    log('Proveer una ciudad como argumento, ej: Quito, "Los Angeles."');
}


// without callbacks
/*
const url = "http://api.weatherstack.com/current?access_key=eb1cdbf17f681c6c8adb31928e8f4a63&units=m&query=37.8,-122"
request({ url: url, json: true }, (error, response) => {
    if (error) {
        log("unable to connect to weather service")
    } else if (response.body.error) {
        const error = response.body.error
        log("Unable to find location. Error: " + error.code)
    } else {
        const weather = response.body.current
        const message = weather.weather_descriptions[0]
            + ". It is currently " + weather.temperature
            + " degrees out. There's a UVIndex of " + weather.uv_index
            + " it feels like " + weather.feelslike + " degrees out."
        log(message)
    }
})
*/

// Gecocoding
/*
// eslint-disable-next-line max-len
const geocoding_url = "https://api.mapbox.com/geocoding/v5/mapbox.places/Quito.json?access_token=pk.eyJ1IjoicGV0cnViZWFyIiwiYSI6ImNrcGJnYnZkaDBvbTIzMG4ycHdwN3UxemUifQ.E3ns5TUxlzhZLLCYIEYcLA&limit=1"
request({ url: geocoding_url, json: true }, (error, response) => {
    if (error) {
        log("unable to connect to weather service")
    } else if (response.body.message) {
        log("Unable to get Geocode Information: " + response.body.message)
    } else if (response.body.features.length === 0) {
        log("Unable to get Geocode Information.")
    } else {
        const features = response.body.features[0]
        const center = features.center
        const longitude = center[0]
        const latitude = center[1]

        log("Longitude: " + longitude + " Latitude: " + latitude)
    }
})
*/

