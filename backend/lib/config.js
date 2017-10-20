'use strict';

console.log('process.env.NODE_ENV',process.env.NODE_ENV);
if (!process.env.NODE_ENV) {
    console.log('setting to NODE_ENV=dev');
    process.env.NODE_ENV = 'dev';
}
var conf = require('../config/config-'+process.env.NODE_ENV+'.json');

module.exports = conf;