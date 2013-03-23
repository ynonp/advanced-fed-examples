(function (global) {

  global.mytask.view.OpenTasks = Backbone.View.extend({

    initialize: function() {
      this.collection.on('change:done', this.render, this );
      this.collection.on('reset', this.render, this );
    },

    render: function() {
      var notdone = this.collection.filter(function(m) {
        return ! m.get('done');
      });

      this.$el.html(
        this._template( { counter: notdone.length } )
      );

      return this.$el;
    },

    _template: Handlebars.compile( $('#tmpl-open').html() )

  });

}(this));