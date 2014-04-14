define(function(require) {
  var ko = require('knockout');
  var self = {};
  var _tags = ko.observableArray();

  self.tags = ko.computed({
    read: function() {
      return _tags();
    },
    write: function(value) {
      console.log('writing: ' + value);
      var taglist = value.split(/\s*,\s*/).filter(function(el) { return ! el.match(/^\s*$/); });
      _tags(taglist);
    }
  });

  self.remove_tag = function(tag) {
    _tags.remove(tag);
  };

  return self;
});

