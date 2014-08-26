/**
 * Created by storskel on 26.08.2014.
 */
app.controller("RescueTimeController", function($http, $timeout){
    var rescueTime = this;
    var url = "https://www.rescuetime.com/anapi/data?format=json&key=B63DVYfBySQpGWQDw_ruIIa7mGeNtHBuHKQRekCF&perspective=interval&rs=day&rk=efficiency&callback=JSON_CALLBACK";

    function getEfficiency(){
        $http.get(url).success(function(data){
            rescueTime.efficiency = data.rows[0][4];
        });
        $timeout(function(){
            getEfficiency();
        }, 3600000);
    }

    getEfficiency();
});