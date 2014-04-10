define(function (require) {
  var app = require('durandal/app'),
    ko = require('knockout');

  var self = {};

  self.start_dt = ko.observable('');


  return self;
});
