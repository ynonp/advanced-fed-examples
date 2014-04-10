define(function(require) {
  var self = {
    all: []
  };

  self.reload = function() {
    return $.ajax({
      url: '/api/contacts',
      success: function(data) {
        self.all = data;
      }
    });
  };

  self.get_contact_info = function(id) {
    var q = $.Deferred();

    $.ajax({
      url: '/api/contacts/' + id,
      success: function(data) {
        q.resolve({
          name: data.name,
          email: data.email
        });
      }
    });

    return q;
  };


  self.save_contact_info = function(id, info) {
    return $.ajax({
      url: '/api/contacts/' + self.id,
      data: info,
      type: 'POST'
    });
  };

  return self;
});
