var app = angular.module('InfoScreen', ['ngResource', 'googleApi'])
    .config(function(googleLoginProvider) {
        googleLoginProvider.configure({
            clientId: '301251250276-igdiqg8a5f7v1ph352lis9gu0mo5k4kj.apps.googleusercontent.com',
            scopes: ["https://www.googleapis.com/auth/userinfo.email", "https://www.googleapis.com/auth/calendar", "https://www.googleapis.com/auth/plus.login"]
        });
    });
