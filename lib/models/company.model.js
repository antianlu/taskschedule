/**
 * Created by antianlu on 14-9-30.
 */

var mongoose = require('../db/mongoClient'),
    Schema = mongoose.Schema,
    Org = require('./company.org.model.js');

var Company = new Schema({
    name: {type: String, alis: 'n', desc: '公司名称'},
    website: {type: String, desc: '官网'},
    desc: {type: String, desc: '描述'},
    contact: {
        email: [
            {type: String, desc: ''}
        ],
        telphone: {type: String, desc: ''},
        mobile: {type: String, desc: ''}
    },
    address: {
        name: {type: String, desc: '地址'},
        visible:{type:Boolean,desc:''}
    },
    weixin:{ type: String, desc: ''},
    real_name: {type: String, desc: '公司负责人'},
    create_at:{type:String,desc:'注册日期'},
    build_at:{type:String,desc:'公司成立日期'},
    meta:[{type:String,desc:''}],
    orgs:[Org],
    projects:[{type:mongoose.Types.ObjectId,desc:''}]
},{collection:'companys',__v:!1});

module.exports = mongoose.model('Company',Company);