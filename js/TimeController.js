/**
 * Created by storskel on 26.08.2014.
 */
app.controller("TimeController", function($timeout){
    var time = this;

    function updateTime(){
        time.currentTime = Date.now();
        $timeout(function(){
            updateTime();
        }, 1000);
    }

    updateTime();


});