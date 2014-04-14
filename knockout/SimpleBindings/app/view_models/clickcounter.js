define(function(require) {
  var ko = require('knockout');

  var self = {
    clicks: ko.observable(0)
  };

  self.increaseClicks = function() {
    self.clicks(self.clicks()+1);
  };

  self.activate = function() {
    var q = $.Deferred();
    setTimeout(function() {
      q.resolve();
    }, 3000);

    return q;
  };

  return self;
});

