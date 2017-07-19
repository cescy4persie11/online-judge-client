
const problemModel = require('../models/problemModel');

const getProblems = function () {
    return new Promise((resolve, reject) => {
        problemModel.find(function(err, problems) {
            if (err)
                reject(err);
            else
                resolve(problems);
        });
    });

};

const getProblemById = function(id) {
    return new Promise((resolve, reject) => {
        problemModel.findOne({id: id}, function(err, problem) {
            if (err)
                reject(err);
            else
                resolve(problem);
        });
    }); 
};

const addProblem = function(newProblem){
    return new Promise((resolve, reject) => {
        if (problemModel.findOne({name: newProblem.name}, function(err, dupProblem) {
            if (dupProblem)
                reject('Problem name already exist');
            else
                problemModel.count(function(err, num) {
                    newProblem.id = num + 1;
                    let mongoProblem = new problemModel(newProblem);
                    mongoProblem.save();
                    resolve(mongoProblem);
                });
        }));
    });

};

module.exports = {
    getProblems,
    getProblemById,
    addProblem
};