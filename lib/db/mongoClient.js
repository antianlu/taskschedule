/**
 * Created by antianlu on 14-9-30.
 */

var mongoose = require('mongoose');
var settings = require('.././settings');

var mongoUrl = 'mongodb://'+settings.mongodb.host + ":"+settings.mongodb.port + "/" + settings.mongodb.db;
    mongoose.connect(mongoUrl);

console.log('connect to mongodb :'+ mongoUrl);

module.exports = mongoose;