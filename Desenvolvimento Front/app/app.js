var app = angular.module('app',['ngRoute','ui.materialize']);

app.config(function($routeProvider, $locationProvider)
{
   // remove o # da url
   $locationProvider.html5Mode(true);

   $routeProvider

   .when('/', {
        templateUrl : 'app/module/login-module/login/login.html',
        controller  : 'LoginCtrl',
    })

    .when('/alterar-senha', {
        templateUrl : 'app/module/login-module/alterar-senha/alterar-senha.html',
        controller  : 'AlterarSenhaCtrl',
    })

    .when('/recuperar-senha', {
        templateUrl : 'app/module/login-module/recuperar-senha/recuperar-senha.html',
        controller  : 'RecuperarSenhaCtrl',
    })

    .when('/primeiro-acesso', {
        templateUrl : 'app/module/login-module/primeiro-acesso/primeiro-acesso.html',
        controller  : 'PrimeiroAcessoSenhaCtrl',
    })

   .otherwise ({ redirectTo: '/' });

   $locationProvider.html5Mode(true);
});