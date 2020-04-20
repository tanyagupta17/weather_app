const request=require('request')
const forecast=(lat,long,callback  ) => {
    const url='https://api.darksky.net/forecast/20797fd9bf3bf28d9c9b21657ffb10d3/'+ lat +','+long
    request({ url, json: true }, (error, {body}) => {        
        if (error) {

            callback('Unable to connect to location services!', undefined)
        }else if (body.error) {

            callback('Unable to find location. Try another search.', undefined)  
        }
                  
        
             else { 
                 callback(undefined,body.daily.data[0].summary + ' the temp is '+ body.currently.temperature + ' chances of rain ' + body.currently.precipProbability)  
                      
             }
 
    })
  } 
   

 module.exports=forecast