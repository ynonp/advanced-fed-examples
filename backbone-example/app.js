
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/users', user.list);

app.get('/tasks',      routes.getAllTasks );
app.get('/tasks/:id',  routes.getTask );
app.put( '/tasks/:id', routes.setTask);






var server = http.createServer(app);

var io = require('socket.io').listen(server);

routes.set_sockets( io );


server.listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});













