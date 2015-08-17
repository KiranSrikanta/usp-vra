/// <reference path="../../../typings/angularjs/angular.d.ts"/>
'use strict';

angular.module('newAuthAppApp')
  .controller('RequestsCtrl', ['$q', '$http', '$scope', '$window', function ($q, $http, $scope, $window) {
    
    function getRequests() {
      return $http.get('/api/requests').success(function(allRequests) {
        $scope.requests = allRequests;
      });
    }
    
    var promises = [];
    
    promises[0] = getRequests();
    
    promises[1] = $http.get('/api/services').success(function(allServices) {
      $scope.services = allServices;
    });
    
    $q.all(promises).then(function(){
      bindServiceName();
    });
    
    function bindServiceName() {
      $scope.requests.forEach(function(request) {
        request.serviceObj = findService(request.Service);
      });
    }
    
    function findService(serviceId) {
      var serviceObj;
      $scope.services.forEach(function(service) {
        if(service._id === serviceId){
          serviceObj = service;
        }
      });
      return serviceObj;
    }
    
    $scope.showRefresh = true;
    $scope.refresh = function(){
      $http.post('/api/requests/refresh').then(function(){
        $window.alert('Request for update has been sent.');
        $scope.showRefresh = true;
      }, function(){
        $window.alert('Error occured while sending request for update.');
        $scope.showRefresh = true;
      });
      $scope.showRefresh = false;
    };
    
    function refreshRequestData() {
      setTimeout(function() {
        getRequests().then(function(){
          bindServiceName();
        });
        refreshRequestData();
      }, 3000);
    }
    
    refreshRequestData();
    
  }]);
