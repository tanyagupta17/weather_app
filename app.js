// // console.log('starting')
//  // setTimeout(() => {
// //     console.log('0 sec timer')
//  // },0)
// // setTimeout(() => {
// //     console.log('2 sec timer')
//  // },2000)
// // console.log('stopping')
//  const request= require('request')
 const geocode = require('./utilis/geocode') 
 const forecast= require('./utilis/forecast')
// const url='https://api.darksky.net/forecast/20797fd9bf3bf28d9c9b21657ffb10d3/37.8267,-122.4233?units=si&lang=es'
// request({url:url,json:true}, (error,response) =>{
//     // console.log(response)
//     // const data = JSON.parse(response.body)
//     // console.log(data.currently)
//     // console.log(response.body.currently)
//     if(error){
//         console.log('net not available')
//     }
//     else if(response.body.error ){ 
//         console.log('unable to find location')
//     }
//     else{
//     console.log(response.body.daily.data[0].summary + ' the temp is '+ response.body.currently.temperature + ' chances of rain ' + response.body.currently.precipProbability)
//     }
// })

// const geocodeurl='https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoidGFueWExNzAwIiwiYSI6ImNrODFzdThvZTAwNjYzb3F0dDJjNXdna3IifQ.1rzB88dTA8LP22mHMwBmow'

// request({ url:geocodeurl , json:true},(error, response) =>{
//     if(error){
//         console.log('net not available')
//     }
//     else if(response.body.features.length===0 ){
//         console.log('unable to find location')
//     }
//     else{
//     const lat=response.body.features[0].center[1]
//     const long=response.body.features[0].center[0]
//     console.log(lat,long)
//     }

// })


// const geocode = (address, callback) => {   
//   const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiYW5kcmV3bWVhZDEiLCJhIjoiY2pvOG8ybW90MDFhazNxcn J4OTYydzJlOSJ9.njY7HvaalLEVhEOIghPTlw&limit=1' 
 
//     request({ url: url, json: true }, (error, response) => {        
//       if (error) {          
//              callback('Unable to connect to location services!', undefined)        
//        } else if (response.body.features.length === 0) {  
//               callback('Unable to find location. Try another search.', undefined)       
//             }
//            else {  
//                callback(undefined, {  
//             latitude: response.body.features[0].center[0],             
//             longitude: response.body.features[0].center[1],             
//             location: response.body.features[0].place_name          
//            })    
//      }   
//   })
// } 
 

const address=process.argv[2]
if(!address){
    console.log('provide address')
}else{

    geocode(address, (error, {latitude,longitude,location}) => { 
        if(error){
            return console.log(error)
        }  
        //   console.log('Error', error)   
        //   console.log('Data', data)
          forecast(latitude,longitude, (error, forecastdata) => {
            if(error){
                return console.log(error)
            }
            console.log(location)   
            console.log(forecastdata)
          })
     })

}




 


