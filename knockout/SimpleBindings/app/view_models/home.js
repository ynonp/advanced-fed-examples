define(function (require) {
  var ko = require('knockout');

  var self = {
    name: ko.observable('Batu'),
    image: 'profile.png'
  };

  return self;
});
