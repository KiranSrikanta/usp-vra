/// <reference path="../../../typings/angularjs/angular.d.ts"/>
'use strict';

angular.module('newAuthAppApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });
  });