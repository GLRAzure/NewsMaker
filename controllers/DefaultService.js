'use strict';

exports.deleteCat = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  **/
  // no response value expected for this operation
  res.end();
}

exports.deleteFeed = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  **/
  // no response value expected for this operation
  res.end();
}

exports.deletePost = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (Long)
  **/
  // no response value expected for this operation
  res.end();
}

exports.getCatByID = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "catName" : "aeiou",
  "id" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getFeedByID = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "catID" : "aeiou",
  "feedURL" : "aeiou",
  "feedName" : "aeiou",
  "feedSite" : "aeiou",
  "id" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getPostByID = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (Long)
  **/
    var examples = {};
  examples['application/json'] = {
  "summary" : "aeiou",
  "date" : "aeiou",
  "unixtime" : 123456789,
  "catID" : "aeiou",
  "feedID" : "aeiou",
  "feedName" : "aeiou",
  "author" : "aeiou",
  "link" : "aeiou",
  "id" : 123456789,
  "categories" : [ "aeiou" ],
  "title" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.queryCats = function(args, res, next) {
  /**
   * parameters expected in the args:
  * query (List)
  * limit (Integer)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "catName" : "aeiou",
  "id" : "aeiou"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.queryFeeds = function(args, res, next) {
  /**
   * parameters expected in the args:
  * query (List)
  * limit (Integer)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "catID" : "aeiou",
  "feedURL" : "aeiou",
  "feedName" : "aeiou",
  "feedSite" : "aeiou",
  "id" : "aeiou"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.queryPosts = function(args, res, next) {
  /**
   * parameters expected in the args:
  * query (List)
  * limit (Integer)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "summary" : "aeiou",
  "date" : "aeiou",
  "unixtime" : 123456789,
  "catID" : "aeiou",
  "feedID" : "aeiou",
  "feedName" : "aeiou",
  "author" : "aeiou",
  "link" : "aeiou",
  "id" : 123456789,
  "categories" : [ "aeiou" ],
  "title" : "aeiou"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.refreshPosts = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
  // no response value expected for this operation
  res.end();
}

exports.upsertCats = function(args, res, next) {
  /**
   * parameters expected in the args:
  * cat (Cat)
  **/
    var examples = {};
  examples['application/json'] = {
  "catName" : "aeiou",
  "id" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.upsertFeed = function(args, res, next) {
  /**
   * parameters expected in the args:
  * feed (Feed)
  **/
    var examples = {};
  examples['application/json'] = {
  "catID" : "aeiou",
  "feedURL" : "aeiou",
  "feedName" : "aeiou",
  "feedSite" : "aeiou",
  "id" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.upsertPost = function(args, res, next) {
  /**
   * parameters expected in the args:
  * post (Post)
  **/
    var examples = {};
  examples['application/json'] = {
  "summary" : "aeiou",
  "date" : "aeiou",
  "unixtime" : 123456789,
  "catID" : "aeiou",
  "feedID" : "aeiou",
  "feedName" : "aeiou",
  "author" : "aeiou",
  "link" : "aeiou",
  "id" : 123456789,
  "categories" : [ "aeiou" ],
  "title" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

