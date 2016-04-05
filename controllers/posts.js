'use strict';

var url = require('url');

var Default = require('./DefaultService');

module.exports.addPost = function addPost (req, res, next) {
  Default.addPost(req.swagger.params, res, next);
};

module.exports.findPosts = function findPosts (req, res, next) {
  Default.findPosts(req.swagger.params, res, next);
};

module.exports.getPostByID = function getPostByID (req, res, next) {
  Default.getPostByID(req.swagger.params, res, next);
};

module.exports.deletePost = function deletePost (req, res, next) {
  Default.deletePost(req.swagger.params, res, next);
};