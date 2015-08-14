'use strict';

describe('Service: CitySearch', function () {

  // load the service's module
  beforeEach(module('weatherApp'));

  // instantiate service
  var CitySearch;
  beforeEach(inject(function (_CitySearch_) {
    CitySearch = _CitySearch_;
  }));

  it('should do something', function () {
    expect(!!CitySearch).toBe(true);
  });

});
