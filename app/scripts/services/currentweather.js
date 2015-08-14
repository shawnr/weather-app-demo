'use strict';

/**
 * @ngdoc service
 * @name weatherApp.CurrentWeather
 * @description
 * # CurrentWeather
 * Factory in the weatherApp.
 */
angular.module('weatherApp')
  .factory('CurrentWeather', function ($resource) {
    // Service logic
    // ...

    // Public API here
    return $resource('http://api.openweathermap.org/data/2.5/weather?id=:cityID&units=imperial&APPID=d9947bfbe4d5f42fa39c0d5e08ff915f', {}, {
      query: {
        method:'GET',
        params:{
          cityID: '5809844' // Seattle, WA USA
        },
        isArray:false
      }
    });
  });
