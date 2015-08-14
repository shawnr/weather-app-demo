'use strict';

/**
 * @ngdoc function
 * @name weatherApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the weatherApp
 */
angular.module('weatherApp')
  .controller('MainCtrl', function ($scope, CitySearch, $localStorage) {
    $scope.citiesFound = CitySearch.find();
    $scope.storage = $localStorage;

    $scope.findCities = function(){
        $scope.citiesFound = CitySearch.find({
            query: $scope.location
        });
        $scope.searchQuery = $scope.location;
    };
  });