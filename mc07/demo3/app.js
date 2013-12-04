var app = angular.module('app', ['ngRoute']).config(function($routeProvider){
    $routeProvider.when('/login', {
        templateUrl: 'login.html', 
        controller:'LoginController' 
    });
    $routeProvider.when('/home', {
        templateUrl: 'home.html', 
        controller: 'HomeController'
    });
    $routeProvider.otherwise({redirectTo:'login'});
});

app.controller('LoginController', function(){

});

app.controller('HomeController', function(){

});