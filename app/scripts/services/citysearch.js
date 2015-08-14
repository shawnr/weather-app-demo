'use strict';

/**
 * @ngdoc service
 * @name weatherApp.CitySearch
 * @description
 * # CitySearch
 * Factory in the weatherApp.
 */
angular.module('weatherApp')
  .factory('CitySearch', function ($resource) {
    // Service logic
    // ...

    // Public API here
    return $resource('http://api.openweathermap.org/data/2.5/find?q=:query&units=imperial&type=like&mode=json&APPID=d9947bfbe4d5f42fa39c0d5e08ff915f', {}, {
      find: {
        method: 'GET',
        params: {
          query: 'seattle'
        },
        isArray: false
      }
    });
  });
