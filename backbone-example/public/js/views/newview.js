(function (global) {

  var newview = Backbone.View.extend({
    render: function () {
    },

    _template: Handlebars.compile($('#template_id').html())
  });

}(this));