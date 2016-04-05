'use strict';

var url = require('url');

var Default = require('./DefaultService');

module.exports.addFeed = function addFeed (req, res, next) {
  Default.addFeed(req.swagger.params, res, next);
};

module.exports.findFeeds = function findFeeds (req, res, next) {
  Default.findFeeds(req.swagger.params, res, next);
};

module.exports.getFeedByID = function getFeedByID (req, res, next) {
  Default.getFeedByID(req.swagger.params, res, next);
};

module.exports.deleteFeed = function deleteFeed (req, res, next) {
  Default.deleteFeed(req.swagger.params, res, next);
};
