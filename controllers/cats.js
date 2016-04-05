'use strict';

var url = require('url');

var Default = require('./DefaultService');

module.exports.addCat = function addCat (req, res, next) {
  Default.addCat(req.swagger.params, res, next);
};

module.exports.findCats = function findCats (req, res, next) {
  Default.findCats(req.swagger.params, res, next);
};

module.exports.getCatByID = function getCatByID (req, res, next) {
  Default.getCatByID(req.swagger.params, res, next);
};

module.exports.deleteCat = function deleteCat (req, res, next) {
  Default.deleteCat(req.swagger.params, res, next);
};