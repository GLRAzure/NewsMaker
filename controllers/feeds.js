'use strict';

var url = require('url');
var _ = require("lodash");
var Default = require('./DefaultService');
var newsmaker = require('./newsmaker-core');

module.exports.addFeed = function addFeed (req, res, next) {
  Default.addFeed(req.swagger.params, res, next);
};

module.exports.queryFeeds = function queryFeeds (req, res, next) {
  console.log("QueryFeeds!!!");
  newsmaker.queryFeeds(function(err,documents) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(_.map(documents,function(document) {
        return _.pick(document, ["id", "catID", "feedName", "feedSite", "feedURL"]);
    })));
  }, JSON.parse(req.swagger.params.order.value), JSON.parse(req.swagger.params.filter.value));
  
  //Default.findFeeds(req.swagger.params, res, next);
};

module.exports.getFeedByID = function getFeedByID (req, res, next) {
  Default.getFeedByID(req.swagger.params, res, next);
};

module.exports.deleteFeed = function deleteFeed (req, res, next) {
  Default.deleteFeed(req.swagger.params, res, next);
};
