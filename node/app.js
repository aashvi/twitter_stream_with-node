

var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var Twit = require('twit');

var port = 8000;

app.get('/',function(req,res){
  res.sendfile(__dirname+'/index.html');

});

http.listen(port, function(){

  console.log('listening on:' + port);
});


var watchList = ['yogi'];
 var T = new Twit({
    consumer_key:         'ph7btvc4om9y5DQrZYsLBH3Ix'
  , consumer_secret:      'MTKeh4wmFvAaNeZ89s6ph4q4sNIr6ZXmLMBMFIJx18qUPMmWyb'
  , access_token:         '140899430-igSuZkjhhireG0Qxs48b8BOQxFz5pKOasBOGCjbu'
  , access_token_secret:  'tcGNWNo50IDEDdo2mokdCqiZGK5NKRXaQ0XQOF4MdTzIX'
})


io.sockets.on('connection', function (socket) {
  console.log('Connected');


 var stream = T.stream('statuses/filter', { track: watchList })

  stream.on('tweet', function (tweet) {

    io.sockets.emit('stream',tweet.text);
    console.log(tweet.text)


  });
 });










