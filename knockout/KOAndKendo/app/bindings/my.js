define(function(require) {
  var ko = require('knockout');

  ko.bindingHandlers.datepicker = {
    init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
      var $el = $(element);

      $el.kendoDatePicker();
      $el.on('change', function() {
        var observable = valueAccessor();
        observable(this.value);
      });
    },
    update: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
      var value = valueAccessor();
      var valueUnwrapped = ko.unwrap(value);

      $(element).val(valueUnwrapped);

      console.log('update');
    }
  };
});

