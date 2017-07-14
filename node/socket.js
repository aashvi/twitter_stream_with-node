var http  = require('http')
var express = require('express')
  , app = express()
  , http = require('http')
  , server = http.createServer(app)
  ,Twit = require('twit')
  , io = require('socket.io').listen(server);

server.listen(8080);
console.log('abc')
// routing
app.get('/', function (req, res) {
res.sendfile('index.html');
});
console.log('abc1')
var watchList = ['love', 'hate'];
 var T = new Twit({
    consumer_key:         'ph7btvc4om9y5DQrZYsLBH3Ix'
  , consumer_secret:      'MTKeh4wmFvAaNeZ89s6ph4q4sNIr6ZXmLMBMFIJx18qUPMmWyb'
  , access_token:         '140899430-igSuZkjhhireG0Qxs48b8BOQxFz5pKOasBOGCjbu'
  , access_token_secret:  'tcGNWNo50IDEDdo2mokdCqiZGK5NKRXaQ0XQOF4MdTzIX'
})
console.log('abc2')







io.sockets.on('connection', function (socket) {
  console.log('Connected');

console.log('abc3')
 var stream = T.stream('statuses/filter', { track: watchList })

  stream.on('tweet', function (tweet) {

    io.sockets.emit('stream',tweet.text);


  });
 });
