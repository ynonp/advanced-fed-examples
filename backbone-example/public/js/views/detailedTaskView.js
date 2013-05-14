(function (global) {


  global.mytask.view.DetailedTaskView = Backbone.View.extend({

    render: function() {
      var result = this._template( this.model.toJSON() );
      this.$el.html( result );
      return this.$el;
    },

    events: {
      'input input': 'saveDataToModel'
    },

    saveDataToModel: function(ev) {
      this.model.set( 'text', ev.target.value );
    },

    _template: Handlebars.compile( $('#tmpl-detail').html() )
  });

}(this));