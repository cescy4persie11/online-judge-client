"using strict";
/* jshint node: true */
const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://feiyang-oj:feiyang@ds163672.mlab.com:63672/feiyangdb');

const problemRouter = require('./routes/rest');

app.use('/', problemRouter);

app.listen(3000, function() {
	  console.log('Example app listening on port 3000!');
});
