/* global angular */

function routesConfig($stateProvider, $urlRouterProvider) {
  $stateProvider

      .state('welcome', {
          url: '/welcome',
          templateUrl: 'app/welcome/welcome.html',
          controller: 'WelcomeCtrl'
      });

  $urlRouterProvider.otherwise('welcome');
}

angular.module('lyceum').config([
  '$stateProvider',
  '$urlRouterProvider',
  routesConfig
]);
