'use strict';

var url = require('url');
var _ = require("lodash");
var Default = require('./DefaultService');
var newsmaker = require('./newsmaker-core');

module.exports.upsertPost = function upsertPost (req, res, next) {
  newsmaker.upsertPosts(req.swagger.params.posts.value,next);
};

module.exports.queryPosts = function queryPosts (req, res, next) {
  console.log("QueryPosts!!!");
  newsmaker.queryPosts(function(err,documents) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(_.map(documents,function(document) {
        return _.pick(document, ["id","title", "summary", "date", "author", "link", "categories", "feedID", "feedName", "catID", "unixtime"]);
    })));
  }, JSON.parse(req.swagger.params.order.value), JSON.parse(req.swagger.params.filter.value));
  
  //Default.findPosts(req.swagger.params, res, next);
};

module.exports.getPostByID = function getPostByID (req, res, next) {
  newsmaker.queryPosts(function(err,documents) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(_.pick(documents[0], ["id","title", "summary", "date", "author", "link", "categories", "feedID", "feedName", "catID", "unixtime"])));
  }, "" , {"id": req.swagger.params.id.value});
  //Default.getPostByID(req.swagger.params, res, next);
};

module.exports.deletePost = function deletePost (req, res, next) {
  Default.deletePost(req.swagger.params, res, next);
};

module.exports.refreshPosts = function refreshPosts (req, res, next) {
  newsmaker.refreshPosts(function(next){
    res.end('Post Refresh Complete');
    next;
  });
  //Default.refreshPosts(req.swagger.params, res, next);
};