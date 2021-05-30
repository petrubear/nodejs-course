// http://api.weatherstack.com/current?access_key=eb1cdbf17f681c6c8adb31928e8f4a63&query=Quito
const log = console.log
const request = require('postman-request')

const url = "http://api.weatherstack.com/current?access_key=eb1cdbf17f681c6c8adb31928e8f4a63&units=m&query=Quito"
request({ url: url, json: true }, (error, response) => {
    const weather = response.body.current
    const message = weather.weather_descriptions[0]
        + ". It is currently " + weather.temperature
        + " degrees out. There's a UVIndex of " + weather.uv_index
        + " it feels like " + weather.feelslike + " degrees out."
    log(message)
})


// Gecocoding
const geocoding_url = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicGV0cnViZWFyIiwiYSI6ImNrcGJnYnZkaDBvbTIzMG4ycHdwN3UxemUifQ.E3ns5TUxlzhZLLCYIEYcLA&limit=1"
request({ url: geocoding_url, json: true }, (error, response) => {
    //log(response.body)
    const features = response.body.features[0]
    const center = features.center
    const longitude = center[0]
    const latitude = center[1]

    log("Longitude: " + longitude + " Latitude: " + latitude)
})
