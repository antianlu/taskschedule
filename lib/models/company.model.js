/**
 * Created by antianlu on 14-9-30.
 */

var mongoose = require('../db/mongoClient'),
    Schema = mongoose.Schema,
    Depart = require('./depart.model');

var Company = new Schema({
    name:{type:String,desc:'公司名称'},
    departs:[Depart]
},{collection:'company',_v:!1});

module.exports = mongoose.model('Company',Company);