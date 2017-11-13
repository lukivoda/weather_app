"use strict";
//formirame konstruktor funkcija
function Weather(cityName,description) {

    this.cityName = cityName;

    this.description = description;

    this._temperature = "";
}

// formirame getter and setter funkcii so defineProperty  za konverzija od celziusovi vo fahrenheit
Object.defineProperty(Weather.prototype,'temperature',{

    get:function () {
        return this._temperature;
    },

    set:function(value) {
         this._temperature = (value *1.8 + 32).toFixed(2) + 'F';


    }

});


