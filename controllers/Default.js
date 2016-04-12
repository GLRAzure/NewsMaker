'use strict';

var url = require('url');


var Default = require('./DefaultService');


module.exports.deleteCat = function deleteCat (req, res, next) {
  Default.deleteCat(req.swagger.params, res, next);
};

module.exports.deleteFeed = function deleteFeed (req, res, next) {
  Default.deleteFeed(req.swagger.params, res, next);
};

module.exports.deletePost = function deletePost (req, res, next) {
  Default.deletePost(req.swagger.params, res, next);
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

module.exports.queryCats = function queryCats (req, res, next) {
  Default.queryCats(req.swagger.params, res, next);
};

module.exports.queryFeeds = function queryFeeds (req, res, next) {
  Default.queryFeeds(req.swagger.params, res, next);
};

module.exports.queryPosts = function queryPosts (req, res, next) {
  Default.queryPosts(req.swagger.params, res, next);
};

module.exports.refreshPosts = function refreshPosts (req, res, next) {
  Default.refreshPosts(req.swagger.params, res, next);
};

module.exports.upsertCats = function upsertCats (req, res, next) {
  Default.upsertCats(req.swagger.params, res, next);
};

module.exports.upsertFeed = function upsertFeed (req, res, next) {
  Default.upsertFeed(req.swagger.params, res, next);
};

module.exports.upsertPost = function upsertPost (req, res, next) {
  Default.upsertPost(req.swagger.params, res, next);
};
