#!/usr/bin/env node

'use strict';

if (!process.env.NODE_ENV) process.env.NODE_ENV='dev';

var pkg = require('./package.json');
var conf = require('./lib/config');
var restify = require('restify');
var bodyParser = require('body-parser');
var db = require('./lib/database');
var logger = require('./lib/logger');
var plugins = require('restify-plugins');

var server = restify.createServer({
    name: pkg.name,
    version: pkg.version
});

// middleware
server.use(plugins.acceptParser(server.acceptable));
server.use(plugins.queryParser());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(plugins.gzipResponse());

// this is to send back CORS headers
//plugins.CORS.ALLOW_HEADERS.push('authorization');
//server.use(restify.CORS({
//    headers: ['x-requested-with', 'accept', 'authorization'],
//    origins: ['*']
//}));

require('./lib/routes')(server);

server.get('/sample1', function(req, res, next) {
  res.send({ aa: "ss"});
  return next();
});

server.on('uncaughtException', function (req, res, route, err) {
    logger.error('Unexpected server Error:' + route, err.stack);
    res.status(500);
    res.send({message : 'Unexpected server error'});
});

process.on('exit', (code) => {
    console.log('About to exit with code:', code);
});

logger.info('Starting %s in %s mode',server.name,process.env.NODE_ENV);

module.exports = server;