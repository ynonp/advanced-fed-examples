define(function(require) {
  var ko = require('knockout');
  var router = require('plugins/router');
  var contacts = require('models/contacts');

  var self = {
    name: ko.observable(),
    email: ko.observable()
  };


  self.activate = function(id) {
    return contacts.get_contact_info(id).then(function(info) {
      self.name(info.name);
      self.email(info.email);
    });
  };

  self.save = function() {
    contacts.save_contact_info(self.id, ko.toJSON(self)).then(
      function() {
        router.navigateBack();
      },
      function() {
        alert('Error saving data...');
      });
  };

  return self;
});

