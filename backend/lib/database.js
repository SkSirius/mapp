'use strict';
var mongoose = require('mongoose');
var config = require('./config');
mongoose.Promise = global.Promise;

//var conf = require('./config');
//var logger = require('./logger');

function init(callback) {
    var url = config.mongodb.url,
        opts = config.mongodb.options;

    //logger.info(`Connecting to database: ${url} with options ${JSON.stringify(opts)}`);
    mongoose.connect(url, opts, function(err){
        if (err) {
            return callback(err);
        }

        callback();
    });
}

function close() {
    mongoose.connection.close();
}

function getDb() {
    return mongoose.connection.db;
}

function getCollection(name) {
    return mongoose.connection.db.collection(name);
}

function ping(cb) {
    mongoose.connection.db.admin().ping(cb);
}

module.exports = {
    init,
    close,
    getDb,
    getCollection,
    ping
};

