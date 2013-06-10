var tweety = require('../lib/tweety');

module.exports.create = function(app, io) {
  /*
   * Add routes here
   */

  app.get('/', function(req, res) {
    res.render('index', { title: 'Express' });
  });

  app.get('/tweets', function(req, res) {
    tweety.getStream(function (err, stream) {
      io.on('connection', function(socket) {
        stream.on('data', function (data) {
          console.log(data);
          socket.emit('data', data);
        });
      });
    });

    res.render('tweets', {
      title: 'Incoming Tweets'
    });
  });
};