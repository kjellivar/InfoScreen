/**
 * Created by storskel on 21.08.2014.
 */
app.controller("RuterController", function($resource, $timeout){

    var ruter = this;

    var Departures = $resource(
        "http://reis.trafikanten.no/ReisRest/RealTime/GetRealTimeData/:id",
        {callback:"JSON_CALLBACK"},
        {get: {method: "JSONP", isArray:true}}
    );

    function getDepartures() {
        Departures.get({id:3010610}).$promise.then(function(data){
            ruter.departures = data;
        });
        $timeout(function(){
            getDepartures();
        }, 60000);
    }

    getDepartures();

})
    .filter('fromNow', function() {
        return function(dateString) {
            //moment.lang('nb');
            return moment(dateString).fromNow(true);
        };
    })
    .filter('direction', function() {
        return function(departures, direction) {
            var filtered = [];
            angular.forEach(departures, function(departure) {
                if (departure.DirectionName === direction && filtered.length < 5) {
                    filtered.push(departure);
                }
            });
            return filtered;
        };
    });
