define(function(require) {
  var ko = require('knockout');

  var _template =
'  <div class="hero-unit">' +
'  <h1>Heading</h1>' +
'  <p>Tagline</p>' +
'  <p>' +
'    <a class="btn btn-primary btn-large">' +
'      Learn more' +
'    </a>' +
'  </p>' +
'</div>';

  ko.bindingHandlers.hello = {
    init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
      element.innerHTML = 'Hello World!';
    },
    update: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
      // blank;
    }
  };

});
