const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=77b969d6d514d193f3af9b4778ffa74e&query=37.8267,-122.4233&units=m';

request({url:url ,json: true}, (error, response) => {
    console.log("it is currently "+response.body.current.temperature +' degress out. its feels like '+response.body.current.feelslike + ' degress out.')
})

// Geocoding
// Address -> weather


const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoia2FtYWxhbHNhZWVkIiwiYSI6ImNscGw5amYxODAxbm4yc3FqcjY0ZHdqMWwifQ.L03nCcfjZf27haQ7iVqh_g&limit=1';
request({url: geocodeURL,json:true}, (error, response) =>{
    const latitude = response.body.features[0].center[1]
    const longitude =response.body.features[0].center[0]
    console.log(latitude,longitude)
})