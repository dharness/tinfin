var myapp = angular.module('myapp', ['ngRoute', 'ngAnimate']);

// configure our routes
myapp.config(function($routeProvider) {

    $routeProvider

    // home page
    .when('/', {
        templateUrl: 'pages/notype.html',
        controller: 'loginController'
    })

    // about page
    .when('/about', {
        templateUrl: 'pages/about.html',
        controller: 'aboutController'
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

});