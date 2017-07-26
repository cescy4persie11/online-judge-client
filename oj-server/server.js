"using strict";
/* jshint node: true */
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
mongoose.connect('mongodb://feiyang-oj:feiyang@ds163672.mlab.com:63672/feiyangdb');

const problemRouter = require('./routes/rest');
const indexRouter = require('./routes/index');

app.use(express.static(path.join(__dirname, '../public/')));
app.use('/', indexRouter);

app.use('/api/v1', problemRouter);
app.use(function(req, res) {
  res.sendFile('index.html', {root: path.join(__dirname, '../public')});
});


// app.listen(3000, function() {
// 	  console.log('Example app listening on port 3000!');
// });

const http = require('http')
const socketIO = require('socket.io');
const io = socketIO();

const editorSocketService = require('./services/editorSocketService.js')(io);

const server = http.createServer(app);
io.attach(server);

server.listen(3000);
server.on('error', onError);
server.on('listening', onListening);

function onError(error) {
  throw error;
}

function onListening() {
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe' + address : 'port ' + address.port;
  console.log('Listening on ' + bind);
}


