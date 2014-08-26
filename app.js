var app = angular.module('InfoScreen', ['ngResource', 'googleApi'])
    .config(function(googleLoginProvider) {
        googleLoginProvider.configure({
            clientId: '239511214798.apps.googleusercontent.com',
            scopes: ["https://www.googleapis.com/auth/userinfo.email", "https://www.googleapis.com/auth/calendar", "https://www.googleapis.com/auth/plus.login"]
        });
    });
