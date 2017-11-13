"use strict";

//na klik na button-ot sakame da se egzekutita searchWeather funkcijata koja ni ja dava vrednosta koja korisnikot ja napisal vo input poleto
searchButton.addEventListener('click',searchWeather);


function searchWeather(){
//loading text-ot se pojavuva pred pojavata na weather block-ot
    loadingText.style.display = 'block';

    weatherBox.style.display = 'none';

    //ja zacuvuvame vrednosta za city sto ja vnesuva korisnikot
    var cityName = searchCity.value;

    // go validirame input-ot za city
    if(cityName.trim().length == 0){
        alert('Please enter a city name!');
    }


    var http =  new XMLHttpRequest();

    var method = 'GET';

    //akpKey dobivame koga ke se logirame na openweather stranata
    var apiKey = "64a98850d358ed81f6ee092c94b1126d";

    var url =" http://api.openweathermap.org/data/2.5/weather?q="+cityName +'&units=metric&appid='+apiKey;

    http.open(method,url);

    http.onreadystatechange = function(){

        if(http.readyState === XMLHttpRequest.DONE && http.status ===200){

            //json text-ot sto go dobivame od  serverot go zacuvuvame vo promenliva
            var data = JSON.parse(http.responseText);
         
            //formirame nov objekt  po instanca na constructor funkcijata vo weather-data.js
            var weatherData = new Weather(cityName,data.weather[0].description.toUpperCase());
            
            //na property temperature mu ja davame vrednosta od parsiraniot json objekt
            weatherData.temperature = data.main.temp;

            //ja povikuvame updateWeather funkcijata  kojagi ispisuva vrednostite vo html dokumentot
            updateWeather(weatherData);

        }else if(http.readyState == XMLHttpRequest.DONE && http.status !== 200) {

             alert("Something got wrong!!!!!!")
        }


    };

    http.send();

}





function updateWeather(weatherData) {

    weatherCity.textContent =  weatherData.cityName;

    weatherDescription.textContent = weatherData.description;

    weatherTemperature.textContent =  weatherData.temperature;

    //loading text-ot isceznuva pred pojavata na weather block-ot
    loadingText.style.display = 'none';

    weatherBox.style.display = "block";
}




