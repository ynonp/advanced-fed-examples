define(function(require) {
  var ko = require('knockout');

  return function() {
    var self = {
      items: ko.observableArray([1,1,1]),
      add: function() {
        self.items.push(1);
        console.log('add: items = ');
        console.dir(self.items);
      }
    };

    // self.activate = function(settings) {
    // };

    return self;
  };
});

