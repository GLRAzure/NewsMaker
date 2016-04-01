'use strict';

var url = require('url');


var Default = require('./DefaultService');


module.exports.addPet = function addPet (req, res, next) {
  Default.addPet(req.swagger.params, res, next);
};

module.exports.deletePost = function deletePost (req, res, next) {
  Default.deletePost(req.swagger.params, res, next);
};

module.exports.findPetById = function findPetById (req, res, next) {
  Default.findPetById(req.swagger.params, res, next);
};

module.exports.findPosts = function findPosts (req, res, next) {
  Default.findPosts(req.swagger.params, res, next);
};
