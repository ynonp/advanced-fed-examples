define(function (require) {
  var app = require('durandal/app'),
    ko = require('knockout'),
    contacts = require('models/contacts');

  var self = {
    contacts: ko.observable()
  };

  self.activate = function() {
    return contacts.reload().then(function() {
      self.contacts(contacts.all);
    });
  };

  return self;
});
