const { url } = require('inspector')
const request = require('postman-request')
/*
const  url = 'http://api.weatherstack.com/current?access_key=a38e7fac95e6c2d477918383e9565366&query=London&units=m'

request({ url: url, json: true }, (error, response) => {

    if(error){
        console.log('We cant found weather APP!')
    } else if(response.body.error){
        console.log('Unable to location!Please try one more time or change location!')
    } else if(response.body.current.temperature === 0){
        console.log('We dont have info about this character try another one!')
    } else
   console.log(`${response.body.current.wind_speed} - wind speed! That weather about ${response.body.request.query}. Time is: ${response.body.current.observation_time} degrize; Current temperature is ${response.body.current.temperature}, but that feels like ${response.body.current.feelslike}, and visibility is ${response.body.current.visibility}`)
}) 


const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibmVzdGVyMjcxMyIsImEiOiJjbGFjbmFuangwYWhnM29veWRhMGtjeHo1In0.D-6Ljwps2osIaUetDYB8MQ&limit=1'

request({url: url, json: true}, (error, response) => {
    const latitude = response.body.features[0].center[0]
    const longitude = response.body.features[0].center[1]
    console.log(latitude, longitude)
}) 8*/
/*
const geoCode = ((address, callback) => {

    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address +'.json?access_token=pk.eyJ1IjoibmVzdGVyMjcxMyIsImEiOiJjbGFjbmFuangwYWhnM29veWRhMGtjeHo1In0.D-6Ljwps2osIaUetDYB8MQ&limit=1' 
    request({url: url, json: true}, (error, response) => {
        if(error){
            callback('Unable location App',undefined)
        } else if (response.body.features === 0) {
            callback( 'Unable to find this location! Try another search', undefined)
        }else {
            callback(undefined, {
                latitude: response.body.features[0].center[0], 
                longitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name,
            })
        }
    })

})
geoCode('London', (error, data) => {
    console.log("Data", data)
}) */

const forecast = (( adress, callback) => {
const url = 'http://api.weatherstack.com/current?access_key=a38e7fac95e6c2d477918383e9565366&query=' + adress +'&units=m' 
 request({url: url, json: true}, (error, response) => {
    if(error){
        callback('Unable to connect weather APP', undefined)
    } else if(response.body.error === 0){
        callback('This city not found. Please, try another one.', undefined)
    } else {
        callback(undefined, `${response.body.current.wind_speed}km/h - wind speed! That weather about ${response.body.request.query}. Time is: ${response.body.current.observation_time}; Current temperature is ${response.body.current.temperature} degrise, but that feels like ${response.body.current.feelslike} degrise, and visibility is ${response.body.current.visibility}`)
    }
 })
})


forecast('London', (error, data) => {
    console.log('Error:', error)
    console.log('Weather:  ', data)
})
