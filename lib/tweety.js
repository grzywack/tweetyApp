var ntwitter = require('ntwitter')
  , _ = require('underscore');

var incomingTweets = []
  , subscribers = [];

var tweety = new ntwitter({
  consumer_key: 'pYv8SDVElfFTwT6uxNPcqw',
  consumer_secret: '50IaBpSuKKHgMFoBw7Cey73tzW53XnrS7uH07xl40VM',
  access_token_key: '18751623-MUlrYUdatNBBxe2OrF4XV3H2wlq6hT3wkEzq5BeY',
  access_token_secret: 'mblzSBVBLybuc0YWOuczAiz7RkPhL5zQnGL5ELgw'
});

function getStream (cb) {

  tweety.stream('user', {track: ['timisbusy', 'brainflake', 'trevormcleod', 'timosa75', 'alexshyba', 'sobersp', 'amyspendleton', 'nvillatoro', 'grzywack']}, function (stream) {
    cb(null, stream);
  });

}


module.exports = {
  getStream: getStream
}