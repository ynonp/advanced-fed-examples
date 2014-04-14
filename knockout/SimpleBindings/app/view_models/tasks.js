define(function(require) {
  var ko = require('knockout');

  var self = {
    tasks: ko.observableArray(),
    curr_task_name: ko.observable()
  };

  self.add_task = function() {
    self.tasks.push(self.curr_task_name());
  };

  self.remove_task = function(which) {
    // remove is a new method of ko.observableArray
    // that takes an element and removes it from the array
    self.tasks.remove(which);
  };


  return self;
});

