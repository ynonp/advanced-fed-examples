(function (global) {

  global.mytask.view.TaskView = Backbone.View.extend({

    initialize: function() {
      this.model.on('change', this.render, this );
    },

    render: function() {
      this.$el.html( this._template( this.model.toJSON() ) );
      return this.$el;
    },
    events: {
      'change' : 'setValue'
    },

    setValue: function( e ) {
      var checked = $(e.target).is(':checked');
      this.model.set( { done: checked });
      this.model.save();
    },


    _template: Handlebars.compile( $('#tmpl-task').html() )
  });


}(this));