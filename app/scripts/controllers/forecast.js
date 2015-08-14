'use strict';

/**
 * @ngdoc function
 * @name weatherApp.controller:ForecastCtrl
 * @description
 * # ForecastCtrl
 * Controller of the weatherApp
 */
angular.module('weatherApp')
  .controller('ForecastCtrl', function ($scope, $routeParams, Forecast) {
    $scope.cityID = $routeParams.cityID;

    $scope.forecastData = Forecast.query({
        cityID: $routeParams.cityID
    });
  });