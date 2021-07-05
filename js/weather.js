const API_KEY = "16943c9acde8730cf4d24e3d355b4b00";

function success(loc){

    const lat = loc.coords.latitude ;
    const longt = loc.coords.longitude;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${longt}&appid=${API_KEY}`;
    fetch(url);
}

function fail(loc){
    alert("NOP");
}

navigator.geolocation.getCurrentPosition(success, fail);
