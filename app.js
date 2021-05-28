// http://api.weatherstack.com/current?access_key=eb1cdbf17f681c6c8adb31928e8f4a63&query=Quito
const log = console.log
const request = require('postman-request')

const url = "http://api.weatherstack.com/current?access_key=eb1cdbf17f681c6c8adb31928e8f4a63&units=m&query=Quito"
request({url: url, json: true}, (error, response) => {
    const weather = response.body.current
    const message = weather.weather_descriptions[0]
        + ". It is currently " + weather.temperature
        + " degrees out. There's a UVIndex of " + weather.uv_index
        + " it feels like " + weather.feelslike + " degrees out."
    log(message)
})
