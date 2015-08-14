'use strict';

describe('Service: CurrentWeather', function () {

  // load the service's module
  beforeEach(module('weatherApp'));

  // instantiate service
  var CurrentWeather;
  beforeEach(inject(function (_CurrentWeather_) {
    CurrentWeather = _CurrentWeather_;
  }));

  it('should do something', function () {
    expect(!!CurrentWeather).toBe(true);
  });

});
