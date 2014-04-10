define(function(require) {
  var ko = require('knockout');

  var self = {
    tasks: ko.observableArray()
  };

  self.save = function() {
    console.dir(ko.toJS(self));
    window.dbg = ko.toJS(self);

    $.ajax({
      url: '/api/tasks',
      type: 'POST',
      data: JSON.stringify({ tasks: ko.toJS(self).tasks }),
      contentType: 'application/json',
      success: function() {
        console.log('success!');
        alert('Saved OK');
      }
    });
  };

  self.activate = function() {
    return $.ajax({
      url: '/api/tasks'
    }).then(function(data) {
      // success
      var observableItems = data.map(function(el) {
        return { text: ko.observable(el.text), done: ko.observable(el.done) };
      });

      self.tasks(observableItems);
    }, function() {
      alert('error');
    });
  };

  return self;
});

