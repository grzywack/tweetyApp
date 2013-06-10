module.exports.create = function(app) {
  /*
   * Add routes here
   */

  app.get('/', function(req, res) {
    res.render('index', { title: 'Express' });
  });
}