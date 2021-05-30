//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)
const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = "http://api.weatherstack.com/current?access_key=eb1cdbf17f681c6c8adb31928e8f4a63&units=m&query=" +
        longitude + "," + latitude
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback("Unable to connect to weather service", undefined)
        } else if (response.body.error) {
            const error = response.body.error
            callback("Unable to find location. Error: " + error.code, undefined)
        } else {
            const weather = response.body.current
            const summary = weather.weather_descriptions[0]
                + ". It is currently " + weather.temperature
                + " degrees out. There's a UVIndex of " + weather.uv_index
                + " it feels like " + weather.feelslike + " degrees out."
            callback(undefined, {
                weather: summary
            })
        }
    })
}

module.exports = forecast
