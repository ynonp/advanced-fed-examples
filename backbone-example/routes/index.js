
/*
 * GET home page.
 */

var io;

var data = [
  { id: 0, text: 'Eat the animals', done: false },
  { id: 1, text: 'Feed the animals', done: false },
  { id: 2, text: 'Bear eat you', done: true },
  { id: 3,  text: 'Take over the world', done: true }
];

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.getTask = function(req, res) {
  var id = req.param('id');
  res.send( data[id] );
};

exports.setTask = function(req, res) {
  var id = req.param('id');
  data[id] = req.body;

  io.sockets.emit('modelchange', { model: data[id] });

};

exports.getAllTasks = function(req, res) {
  res.send( data );
};

exports.createNewTask = function(req, res) {
  // TODO
};



exports.set_sockets = function(_io) {
  io = _io;
};


