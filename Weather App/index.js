const apiKey = "3fb512624e247b81ed0f57c544a01d17";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchInput = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weatherimg");


    async function checkWeather(city){
        const response = await fetch(apiUrl + city + `&appid=${apiKey} `);
        if(response.status == 404){
             document.querySelector(".error").style.display = "block";
             document.querySelector(".weather").style.display = "none";

        }
        else{
        var data = await response.json();
        
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+ "°C";
        document.querySelector(".Humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    
        if(data.weather[0].main == "Clouds"){
           weathericon.src = "images/clouds.png";
        }
        else if(data.weather[0].main == "Rain"){
            weathericon.src = "images/rain.png";
         }
         else if(data.weather[0].main == "Drizzle"){
            weathericon.src = "images/drizzle.png";
         }
         else if(data.weather[0].main == "Mist"){
            weathericon.src = "images/mist.png";
         }
         else if(data.weather[0].main == "Snow"){
            weathericon.src = "images/snow.png";
         }
         else if(data.weather[0].main == "Clear"){
            weathericon.src = "images/clear.png";
         }
        
        document.querySelector(".weather").style.display = "block"
     
    
    }
}
      
searchBtn.addEventListener("click",()=>{
    checkWeather(searchInput.value);
})



 











