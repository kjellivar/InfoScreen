/**
 * Created by storskel on 20.08.2014.
 */
app.controller("WeatherController", function($http, $timeout){
    var url = "http://api.openweathermap.org/data/2.5/weather?q=Oslo&units=metric";
    var weather = this;

    function getWeather() {
        $http.get(url).success(function(data){
            var iconString = "";

            var icon = data.weather[0].icon.substr(0,2);
            weather.desc = data.weather[0].main + " (" + data.weather[0].description + ")";
            weather.temp = Math.round(data.main.temp);
            weather.sunrise = moment(data.sys.sunrise, "X").format("HH:mm");
            weather.sunset = moment(data.sys.sunset, "X").format("HH:mm");
            weather.time = moment(data.dt, "X").format("HH:mm");


            var timeOfDay = (data.dt > data.sys.sunrise && data.dt < data.sys.sunset) ? "day":"night";

            if(icon === "01") {
                iconString  = "wi-" + timeOfDay + "-clear";
            } else if (icon === "02") {
                iconString  = "wi-" + timeOfDay + "-overcast";
            } else if (icon === "03") {
                iconString  = "wi-" + timeOfDay + "-cloudy";
            } else if (icon === "04") {
                iconString  = "wi-cloudy";
            } else if (icon === "09") {
                iconString  = "wi-showers";
            } else if (icon === "11") {
                iconString  = "wi-thunderstorm";
            } else if (icon === "13") {
                iconString  = "wi-snow";
            } else if (icon === "50") {
                iconString  = "wi-fog";
            }

            weather.icon = iconString;

        });
        $timeout(function(){getWeather();},3600000);
    }
    getWeather();

});