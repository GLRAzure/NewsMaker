var config = require('./config');
var _ = require('lodash');
var md5 = require('md5');
var async = require('async');
var moment = require('moment');
var http = require('http');
var FeedParser = require('feedparser');
var request = require('request');
var DocumentClient = require('documentdb').DocumentClient;
var DoQmentDB = require('doqmentdb');
var querybuilder = require('../lib/query');
 
var ddbClient = new DocumentClient(config.endpointUrl, { masterKey: config.masterKey });
var db = new DoQmentDB(ddbClient, config.database);
var col = db.use('BlogMS');

function queryByType(type, callback, order, filter) {
    var querystring;
    if(!filter) {
        querystring = querybuilder({type: type});
    } else {
        if (_.isString(filter)) {
            querystring = querybuilder('r.type = "'+type+'" AND '+filter);
        } else {
            querystring = querybuilder(_.merge({type: type},filter));
        }
    }
    
    //console.log(querystring);
    ddbClient.queryDocuments(config.collectionsLink, querystring).toArray(function(err, documents) { 
        if (!err) {
            if (_.isObject(order)) documents = _.sortByOrder(documents, _.keys(order), _.values(order))
            //console.log('found ' + documents.length + ' cats...');
        }
        callback(err, documents);
    });  
}

    
function queryCats(callback, order, filter) {
    queryByType('cat', callback, order, filter);
}

function queryFeeds(callback, order, filter) {
    queryByType('feed', callback, order, filter);

}

function queryPosts(callback, order, filter) {
    queryByType('post', callback, order, filter);
}

function GeneratePostID(URL) {
    return md5(URL);
}

function retrievePosts(feed, callback)
{
    var output = [];
    var req = request(feed.feedURL);
    var feedparser = new FeedParser();

    req.on('error', function (error)
    {
        //add error handling for the feed request here
        console.log("Error: " + error);
        callback(error);
    })

    req.on('response', function (res)
    {
        var stream = this;
        
        if (res.statusCode != 200) {
            console.log('Error reading Feed: ' + res.request.href);
            //return this.emit('error', new Error('Bad status code'));
            callback('Error reading Feed: ' + res.headers.location)
        } else {
            //console.log('reading feed:'+ res.request.href)
            stream.pipe(feedparser);
        }

    });

    feedparser.on('error', function (error)
    {
        // add feedreader error handling
        //TODO: make it unreadable
        console.log('Request Error: '+ error);
        //callback(error);
    });
    feedparser.on('readable', function () {
        // This is where the action is!
        var stream = this;
        var meta = this.meta; // **NOTE** the "meta" is always available in the context of the feedparser instance
        var item;
        
        while (item = stream.read()) {
            item.feedID = feed.id;
            item.feedName = feed.feedName;
            item.catID = feed.CatID;
            //item.catName = categories.catName;
            //console.log(item);
            output[output.length] = item;    
        }
    });
    feedparser.on("end", function() {
        callback('', output);
    });

    //return output;
}

function upsertItem(item, callback) {
    ddbClient.upsertDocument(config.collectionsLink, item, function (err, resource, resourceHeaders, ddbcallback){
        if(err){
            console.log("Error with Upsert");
            if(err.code == "429") {
                if (!resourceHeaders['x-ms-retry-after-ms']) {
                    console.log("something when wrong with my rate limiting logic");
                    console.log(err);
                    callback(err, item);
                } else {
                    console.log("delaying next retry based on x-ms-after-ms");
                    setTimeout( function(){
                        upsertItem(item, callback(err, item));
                    }, resourceHeaders['x-ms-retry-after-ms']);
                }
            } else if (err.code == "400"){
                console.log("Error: Invalid ID");
                console.log(err);
                callback(err, item);            
            } else {
                console.log("Non-rate related error occured: try again")
                console.log(err);
                console.log(item.link);
                //UpsertItem(item);
                callback(err, item);
            }
        } else {
            //console.log("Inserted " + item.id);
            callback(null,item);
        }
    });
}

function refreshPosts(feeds, callback) {
	if(!_.isArray(feeds)) {
		feeds = [feeds];
	}
    async.eachSeries(feeds, function(feed, callback) {
        retrievePosts(feed, function(error, output) {
            if(error){
                //todo: do something with the eror
                callback();
            } else {
                upsertPosts(output, function(err) {
                    if(error) {
                        console.log(err); 
                        callback();
                    } else {
                        callback();
                    }
                });
            }
        });
    });

}

function upsertPosts(posts, callback)
{
    var cutofftime = moment().subtract(config.historydays, 'days').unix();
    
    async.eachSeries(posts, function(post, postcallback) {
        if (post.link != null) {
            var insobject = {
                id: GeneratePostID(post.link),
                type: 'post',
                title: post.title,
                //description: post.description,
                summary: post.summary,
                date: post.date,
                author: post.author,
                link: post.link,
                categories: post.categories,
                feedID: post.feedID,
                feedName: post.feedName,
                catID: post.catID,
                unixtime: moment(post.date).unix()
            }

            if (insobject.id != null && insobject.unixtime > cutofftime) {
                //console.log(posts[i].feedName + ": "+ posts[i].catID +": " +posts[i].id);
                upsertItem(insobject, function(err, item) {
                    if(err) {
                        //do something if error
                    }
                });   
            }
        }
        postcallback();       
    }, function(err){
        //all done
        callback(err);
    });
}

function refreshAllPosts(alldonecallback) {
    queryFeeds(function(err, feeds) {
        refreshPosts(feeds, function() {
            console.log('done');
            alldonecallback();
        })
    });
}

module.exports = {
    queryCats: queryCats,
    queryFeeds: queryFeeds,
    queryPosts: queryPosts,
    GeneratePostID: GeneratePostID,
    retrievePosts: retrievePosts,
    upsertItem: upsertItem,
    refreshPosts: refreshAllPosts,
    upsertPosts: upsertPosts,
    refreshAllPosts: refreshAllPosts
}