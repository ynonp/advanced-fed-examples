(function (global) {
  var tasks = new mytask.collection.Tasks();
  tasks.fetch();


  /*
  tasks.on('error', function (...)) {

  }
  */
  var collectionView = new mytask.view.AllTasksView({
    collection: tasks
  });

  var openView = new mytask.view.OpenTasks({
    collection: tasks
  });

  var navigateToTab = function(destination) {
    $('.nav li.active').removeClass('active');
    $('.nav .' + destination).addClass('active');
  };

  global.mytask.router.MyRouter = Backbone.Router.extend({

    routes: {
      '': 'home',
      'help' : 'showHelp',
      'task/:id' : 'showTask'
    },

    home: function() {
      navigateToTab('home');
      $('#container').empty();
      $('#container').append( collectionView.render() );
      $('#container').append( openView.render() );
    },

    showHelp: function() {
      navigateToTab('help');
      $('#container').html('HELP !!! I need somebody');
    },

    showTask: function(id) {
      var model = tasks.get( id );
      var tv = new global.mytask.view.DetailedTaskView(
        { model: model });
      $('#container').html( tv.render() );
    }


  });


  var socket = io.connect('http://localhost:3000');

  socket.on('modelchange', function(ev) {
    var id = ev.model.id;
    tasks.get(id).set( ev.model );
  });





}(this));