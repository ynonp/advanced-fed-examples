define(function(require) {

  var url = 'http://api.openweathermap.org/data/2.5/weather?q=';

  return {
    cities: [
      { name: 'London', val: 'London,uk' },
      { name: 'Paris', val: 'Paris,fr' },
      { name: 'Tel Aviv', val: 'Tel Aviv,il' }
    ],

    get_weather: function(city) {
      return $.get(url + city);
    }
  };
});

