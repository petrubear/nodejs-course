// http://api.weatherstack.com/current?access_key=eb1cdbf17f681c6c8adb31928e8f4a63&query=Quito
const log = console.log
const request = require('postman-request')

const url = "http://api.weatherstack.com/current?access_key=eb1cdbf17f681c6c8adb31928e8f4a63&query=Quit"
request({url: url}, (error, response) => {
    const data = JSON.parse(response.body)
    log(data.current)
})
