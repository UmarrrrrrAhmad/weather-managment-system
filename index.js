const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '83fb3e4919mshe4f4f8a82a9c70bp1c47c1jsn2b6d9a181281',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

let getweather=(city)=>
{
  cityname.innerHTML=city
 fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
 .then(response =>
  
    response.json())
  
    .then((response)=>
 {
        // cloud_pct.innerHTML=response.cloud_pct
        temp.innerHTML=response.temp
        temp2.innerHTML=response.temp
        feels_like.innerHTML=response.feels_like                      
        humidityy.innerHTML= response.humidity 
        humidity2.innerHTML= response.humidity 
        min_temp.innerHTML= response.min_temp    
        max_temp.innerHTML=response.max_temp   
        wind_speed.innerHTML= response.wind_speed
        wind_speed2.innerHTML= response.wind_speed
        wind_degrees.innerHTML=response.wind_degrees 
        sunrise.innerHTML= response.sunrise
        sunset.innerHTML=response.sunset 
        console.log(response)
               
      }
     
 )
    }
    submit.addEventListener("click",(e)=>
    {
        e.preventDefault()
        getweather(city.value)
    })
    getweather("Faisalabad")
   

    

    