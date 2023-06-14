var port = process.env.PORT || 3000;
express = require('express'),
app = express().use(express.static(__dirname + '/')),
http = require('http').Server(app),
io = require('socket.io')(http);

//var express = require('express');
//var app = express();
//var http = require('http'),
    fs = require('fs'),
    ccav = require('./ccavutil.js'),
    qs = require('querystring'),
    ccavReqHandler = require('./ccavRequestHandler.js'),
    ccavResHandler = require('./ccavResponseHandler.js');



app.get('/', function(req, res){
    res.sendFile(__dirname + '/dataFrom.html');
});

io.on('connection', function(socket){
    console.log('a user connected');
});

app.get('/about', function (req, res){
        res.render('dataFrom.html');
});

app.post('/ccavRequestHandler', function (request, response){
    console.log(request)
    ccavReqHandler.postReq(request, response);
});


app.post('/ccavResponseHandler', function (request, response){
    //  console.log(response)
        ccavResHandler.postRes(request, response);
});
// app.listen(port, "0.0.0.0", () =>
//   console.log(`welcome your listernig at port ${port}`)
// );
http.listen(port, function(){
    console.log("Node server listening on port " + port);
});