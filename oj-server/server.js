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

app.listen(3000, function() {
	  console.log('Example app listening on port 3000!');
});
