'use strict';

var conf = require('./config');
var winston = require('winston');
require('winston-loggly');

var myCustomLevels = {
    error: 0,
    warn: 1,
    order: 2,
    info: 3,
    debug: 4,
    silly: 5
};

var myCustomColors = {
    error: 'red',
    warn: 'yellow',
    order: 'cyan',
    info: 'green',
    debug: 'blue',
    silly: 'magenta'
};

var logger = new (winston.Logger)({
    levels: myCustomLevels,
    colors: myCustomColors,
    transports: [
       new winston.transports.Console({ level: 'debug', colorize: true })
    ]
});


/* if (process.env.NODE_ENV==='production') {
    logger.add(winston.transports.Console, {
        colorize: true,
        timestamp: true,
        level: 'error'
    });
    logger.add(winston.transports.Loggly, {
        token: "b658b97a-5233-42f1-92cb-09724931bd94",
        subdomain: "swishd",
        tags: ["swishd-api","production"],
        json: true,
        level: conf.logging.level
    });
} else if (process.env.NODE_ENV==='staging') {
    logger.add(winston.transports.Console, {
        colorize: true,
        timestamp: true,
        level: 'error'
    });
    logger.add(winston.transports.Loggly, {
        token: "b658b97a-5233-42f1-92cb-09724931bd94",
        subdomain: "swishd",
        tags: ["swishd-api","staging"],
        json: true,
        level: conf.logging.level
    });
} else {
    logger.add(winston.transports.Console, {
        colorize: true,
        timestamp: true,
        level: conf.logging.level
    });
} */

module.exports = logger;
