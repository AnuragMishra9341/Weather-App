const apiKey="8067a260e9217f2de8746a7b0b32277c";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");


async function checkWeather(city) {
    const response=await fetch(apiUrl+city+`&appid=${apiKey}`);
    var data=await response.json();

   if(response.status==404){
    document.querySelector(".error").style.display="block";
    document.querySelector(".weather").style.display="none";
   }

   else{

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.floor(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind").innerHTML=data.wind.speed + "km/h";
   
     if(data.weather[0].main=="Clouds"){
      weatherIcon.src="clouds.png";
     }
   
     else if(data.weather[0].main=="Clear"){
       weatherIcon.src="clear.png"
     }
     else if(data.weather[0].main=="Rain"){
       weatherIcon.src="rain.png"
     }
     else if(data.weather[0].main=="Drizzle"){
       weatherIcon.src="drizzle.png"
     }
     else if(data.weather[0].main=="Mist"){
       weatherIcon.src="mist.png"
     }
   
     document.querySelector(".weather").style.display="block";
     document.querySelector(".error").style.display="none";
   }

    
}

searchBtn.addEventListener("click",(event)=>{
  checkWeather(searchBox.value);
});



