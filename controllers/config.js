var config = {};

config.endpointUrl = process.env.HOST;
config.masterKey = process.env.AUTH_KEY;
config.database = 'BlogMS';
config.dbrid = 'LhoBAA==';
config.collrid = 'LhoBALQZTAA=';
config.collectionsLink = "dbs/" + config.dbrid + "/colls/" + config.collrid + "/";
config.documentsLink = config.collectionsLink + "docs/";

config.port = process.env.port || 8080;

config.historydays = 400;

module.exports = config;