/**
 * Created by storskel on 26.08.2014.
 */
app.controller('GoogleCalendarController', function ($scope, googleLogin, googleCalendar, googlePlus) {

    $scope.login = function () {
        googleLogin.login();
    };

    $scope.$on("googlePlus:loaded", function() {
        googlePlus.getCurrentUser().then(function(user) {
            $scope.currentUser = user;
        });
    })
    $scope.currentUser = googleLogin.currentUser;

    $scope.loadEvents = function() {
        this.calendarItems = googleCalendar.listEvents({calendarId: this.selectedCalendar.id});
    }

    $scope.loadCalendars = function() {
        $scope.calendars = googleCalendar.listCalendars();
    }

});