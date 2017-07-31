const express = require('express');
const problemRouter = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const problemService = require('../services/problemService');

const nodeRestClient = require('node-rest-client').Client;
const restClient = new nodeRestClient();

const EXECUTOR_SERVER_URL = 'htttp://localhost:5000/build_and_run';

// registering remote methods
restClient.registerMethod('build_and_run', EXECUTOR_SERVER_URL, 'POST');


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

problemRouter.post('/build_and_run', jsonParser, function(req, res) {
    const userCodes = req.body.userCodes;
    const lang = req.body.lang;
    console.log(lang + ' ' + userCodes);
    // res.json({'text' : 'hello from nodejs'});

    restClient.methods.build_and_run(
        {
            data : {
                code: userCodes,
                lang: lang
            },
            headers: {
                'Content-Type': 'application-json'
            }
        },
        (data, response) => {
            console.log('received response from executor server: ');
            // build: abcd
            // run: qwer
            const text = `Build output: ${data['build']} Execute output: ${data['run']}`;
            console.log('text is', text);
            data['text'] = text;
            res.json(data);
        }
    );
})

module.exports = problemRouter;
