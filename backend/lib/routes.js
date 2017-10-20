var sampleController = require('./controllers/sampleController');

module.exports = function(server) {
    server.get('/sample', sampleController.sampleAction);
};