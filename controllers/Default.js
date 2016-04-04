'use strict';

var url = require('url');


var Default = require('./DefaultService');


module.exports.addCat = function addCat (req, res, next) {
  Default.addCat(req.swagger.params, res, next);
};

module.exports.addFeed = function addFeed (req, res, next) {
  Default.addFeed(req.swagger.params, res, next);
};

module.exports.addPost = function addPost (req, res, next) {
  Default.addPost(req.swagger.params, res, next);
};

module.exports.deleteCat = function deleteCat (req, res, next) {
  Default.deleteCat(req.swagger.params, res, next);
};

module.exports.deleteFeed = function deleteFeed (req, res, next) {
  Default.deleteFeed(req.swagger.params, res, next);
};

module.exports.deletePost = function deletePost (req, res, next) {
  Default.deletePost(req.swagger.params, res, next);
};

module.exports.findCats = function findCats (req, res, next) {
  Default.findCats(req.swagger.params, res, next);
};

module.exports.findFeeds = function findFeeds (req, res, next) {
  Default.findFeeds(req.swagger.params, res, next);
};

module.exports.findPosts = function findPosts (req, res, next) {
  Default.findPosts(req.swagger.params, res, next);
};

module.exports.getCatByID = function getCatByID (req, res, next) {
  Default.getCatByID(req.swagger.params, res, next);
};

module.exports.getFeedByID = function getFeedByID (req, res, next) {
  Default.getFeedByID(req.swagger.params, res, next);
};

module.exports.getPostByID = function getPostByID (req, res, next) {
  Default.getPostByID(req.swagger.params, res, next);
};
