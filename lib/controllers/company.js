/**
 * Created by antianlu on 14-10-9.
 */
var companyModel = require('../models/company.model');

function Company(){}

Company.findOne = function(compId,cb)
{
    companyModel.findOne({_id:compId},function(err,docs){
        if(err) return cb(err,null);
        cb(docs);
    })
}