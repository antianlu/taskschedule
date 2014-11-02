/**
 * Created by antianlu on 14-9-30.
 */

var mongoose = require('../db/mongoClient'),
    Schema = mongoose.Schema,
    BlockList = require('./blocklist.model.js');



var Member = new Schema({
    email: { type: String, desc: ''},
    age: { type: Number, desc: ''},
    no: { type: String, desc: ''},
    gender: { type: String, desc: ''},
    birthday: { type: String, desc: ''},
    icon: {type: String, desc: ''},
    realname: { type: String, desc: ''},
    status: { type: Number, desc: ''},
    pass: { type: String, desc: ''},
    telephone: { type: String, desc: ''},
    mobile: { type: String, desc: ''},
    address: { type: String, desc: '住址'},
    qq: { type: String, desc: ''},
    sign: { type: String, desc: ''},
    your_desc: { type: String, desc: ''},
    org_id: [
        {type: Schema.Types.ObjectId, desc: ''}
    ],
    top: {type: Number, desc: '窗口上边距离'},
    left: {type: Number, desc: '窗口左边距离'},
    width: {type: Number, desc: '宽度'},
    height: {type: Number, desc: '高度'},

    seenlist:[{type:Schema.Types.ObjectId,desc:'可见人员的member_id'}],
    blocklist: [BlockList]
},{collection:'members',__v:false});

module.exports = mongoose.model('Member',Member);