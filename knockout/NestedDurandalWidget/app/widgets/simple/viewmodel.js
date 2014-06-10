define(function(require) {
  var ko = require('knockout');

  return function() {
    var self = {
      id: 'Anonymous'
    };

    self.activate = function(settings) {
      self.id = settings.id;
    };

    return self;
  };
});

