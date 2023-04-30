const weather = document.querySelector(".weather_location span:first-child");
const city =  document.querySelector(".weather_location span:last-child");    


const API_KEY = "bd3fa9526c0c0405119768e2e6283df0";

/********************* 
  날씨와 위치 (geolocation)
*********************/
function geoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {    
            weather.innerText = data.weather[0].main;
            city.innerText =  data.name; 

    });
}

function geoFail(){
    alert("당신의 위치를 찾을 수 없습니다.");
}
navigator.geolocation.getCurrentPosition(geoOk, geoFail);
