const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=dadde64f5436741619d8777f15e9f9b5&query=' + latitude + ',' + longitude + '&unit=f'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to fetch weather', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. The temperature was ' + body.current.temperature + ' degress out at ' + body.current.observation_time + ', though it felt like ' + body.current.feelslike + ' degrees!')
        }
    })
}

module.exports = forecast