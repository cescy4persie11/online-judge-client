const express = require('express');
const problemRouter = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const problemService = require('../services/problemService');

// GET /api/v1/problems
problemRouter.get('/problems', function (req, res) {
	problemService.getProblems()
		.then(p => res.json(p));
});


// GET /api/v1/problem/:id
problemRouter.get('/problems/:id', function (req, res) {
    "use strict";
    const id = req.params.id;
    problemService.getProblemById(+id)
        .then(p => res.json(p));
});

// POST /api/v1/problems
problemRouter.post('/problems', jsonParser, function(req, res){
    "use strict";
    problemService.addProblem(req.body)
        .then(function(problem){
           res.json(problem);
        }, function(err){
            res.status(400).send("Problem already exists");
        });
});

module.exports = problemRouter;
