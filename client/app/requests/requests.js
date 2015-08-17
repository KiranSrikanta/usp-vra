'use strict';

angular.module('newAuthAppApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/requests', {
        templateUrl: 'app/requests/requests.html',
        controller: 'RequestsCtrl'
      });
  });
