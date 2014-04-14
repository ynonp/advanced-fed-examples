define(function (require) {
  var app = require('durandal/app'),
      ko = require('knockout'),
      router = require('plugins/router'),
      weather = require('models/weather');

  var self = {
    cities: weather.cities,
    selectedCity: ko.observable(),

    goto_city: function() {
      router.navigate('weather/' + self.selectedCity());
    }
  };

  return self;
});
