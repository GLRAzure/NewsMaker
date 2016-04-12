'use strict';

var url = require('url');
var _ = require("lodash");
var Default = require('./DefaultService');
var newsmaker = require('./newsmaker-core');

module.exports.upsertCats = function upsertCat (req, res, next) {

  Default.upsertCats(req.swagger.params, res, next);
};

module.exports.queryCats = function queryCats (req, res, next) {
  console.log("QueryCats!!!");
  newsmaker.queryCats(function(err,documents) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(_.map(documents,function(document) {
        return _.pick(document, ["id","catName"]);
    })));
  }, JSON.parse(req.swagger.params.order.value), JSON.parse(req.swagger.params.filter.value));
  
  //Default.findCats(req.swagger.params, res, next);
};

module.exports.getCatByID = function getCatByID (req, res, next) {
  Default.getCatByID(req.swagger.params, res, next);
};

module.exports.deleteCat = function deleteCat (req, res, next) {
  Default.deleteCat(req.swagger.params, res, next);
};