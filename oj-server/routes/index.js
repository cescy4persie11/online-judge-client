const express = require('express');
const indexRouter = express.Router();
const path = require('path');

indexRouter.get('/', function(req, res) {
    // go to index.html, which is client's html
    res.sendFile('index.html', {root: path.join(__dirname, '../../public')});
});

module.exports = indexRouter;