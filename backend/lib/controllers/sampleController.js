'use strict';

exports.sampleAction = function(req, res, next) {
    res.send({ item: 'Hello world!' });
    return next();
};