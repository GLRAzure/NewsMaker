'use strict';

var url = require('url');
var _ = require("lodash");
var Default = require('./DefaultService');
var newsmaker = require('./newsmaker-core');

module.exports.upsertFeeds = function upsertFeeds (req, res, next) {
  newsmaker.upsertFeeds(req.swagger.params.feeds.value,next);
};

module.exports.queryFeeds = function queryFeeds (req, res, next) {
  console.log("QueryFeeds!!!");
  newsmaker.queryFeeds(function(err,documents) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(_.map(documents,function(document) {
        return _.pick(document, ["id", "catID", "feedName", "feedSite", "feedURL"]);
    })));
  }, JSON.parse(req.swagger.params.order.value), JSON.parse(req.swagger.params.filter.value));
};

module.exports.getFeedByID = function getFeedByID (req, res, next) {
  newsmaker.queryFeeds(function(err,documents) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(_.pick(documents[0], ["id","catID", "feedName", "feedSite", "feedURL"])));
  }, "" , {"id": req.swagger.params.id.value});
};

module.exports.deleteFeed = function deleteFeed (req, res, next) {
  Default.deleteFeed(req.swagger.params, res, next);
};
