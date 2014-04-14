define(function(require) {
  var ko = require('knockout'),
      weather = require('models/weather');

  var self = {

    activate: function(city) {

      if ( city == null ) {
        city = "London,uk";
      }

      return weather.get_weather(city)
        .then(function(data) {
          // success
          self.weather_data = data;
        }, function() {
          alert('Error getting weather data');
        });
    }
  };

  return self;
});

