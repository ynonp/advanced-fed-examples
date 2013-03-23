(function (global) {


  global.mytask.view.AllTasksView = Backbone.View.extend({
    initialize: function() {
      this.collection.on('reset', this.render, this );
    },

    render: function() {
      var $el = this.$el;
      $el.empty();


      for ( var i=0; i < this.collection.length; i++ ) {
        var m = this.collection.at( i );
        var view = new global.mytask.view.TaskView( { model: m });
        $el.append( view.render() );
      }

      return $el;
    }
  });

}(this));