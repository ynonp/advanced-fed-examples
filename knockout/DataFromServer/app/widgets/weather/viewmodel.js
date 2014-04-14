define(function(require) {
  var ko = require('knockout');
  var weather = require('models/weather');

  return function() {
    var self = {
      available_cities: weather.cities,
      current_city: ko.observable(),
      description: ko.observable('')
    };

    self.activate = function(settings) {
      // blank
    };

    self.city_changed = function() {
      console.log(self.current_city());
      weather.get_weather(self.current_city()).then(function(weather_data) {
        console.dir(weather_data);
         var desc = weather_data.weather[0].description;
         self.description(desc);
      });
    };


    return self;
  };
});

