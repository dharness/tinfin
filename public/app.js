var myapp = angular.module('myapp', ['ngRoute', 'ngAnimate']);
profile = {
    "username": "",
    "picture": "",
    "desc": "",
    "isPrize": "",
    "gender": "",
    "bidCount": 0,
    "bidders": "[]"
};
bitches = null;

// configure our routes
myapp.config(function($routeProvider) {

    $routeProvider

    // home page
    .when('/', {
        templateUrl: 'pages/notype.html',
        controller: 'loginController'
    })

    // about page
    .when('/select', {
        templateUrl: 'pages/select.html',
        controller: 'selectController'
    })

    // contact page
    .when('/gameplay', {
        templateUrl: 'pages/gameplay.html',
        controller: 'gameplayController'
    })

    // contact page
    .when('/login', {
        templateUrl: 'pages/notype.html',
        controller: 'loginController'
    })

    // competitor
    .when('/competitor', {
        templateUrl: 'pages/competitor.html'
    })

    // prize
    .when('/prize', {
        templateUrl: 'pages/prize.html'
    })


    // chitty
    .when('/chat', {
        templateUrl: 'pages/chat.html'
    })

     // waiting to join room
     .when('/loading', {
         templateUrl: 'pages/loading.html'
     })
     
      // photo upload
     .when('/upload', {
         templateUrl: 'pages/upload.html'
     })

 });
