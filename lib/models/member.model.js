/**
 * Created by antianlu on 14-9-30.
 */

var mongoose = require('../db/mongoClient'),
    Schema = mongoose.Schema,
    BlockList = require('./blocklist.model.js');



var Memeber = new Schema({
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
        {type: mongoose.Types.ObjectId, desc: ''}
    ],
    top: {type: Number, desc: '窗口上边距离'},
    left: {type: Number, desc: '窗口左边距离'},
    width: {type: Number, desc: '宽度'},
    height: {type: Number, desc: '高度'},

    seenlist:[{type:mongoose.Types.ObjectId,desc:'可见人员的member_id'}],
    blocklist: [BlockList]
},{collection:'members',__v:!1});

module.exports = mongoose.model('Member',Memeber);

var b = {
    blolklist:[
        {
            title: {type: String, desc: ''},
            present:{type:String,desc:'呈现方式，auto,list'},
            project_id:{type: mongoose.Types.ObjectId, desc: '属于哪个项目'},
            sort: {type: Number, desc: '排序编号'},
            create_at:{type:Date,desc:''},
            status: {type: Number, desc: '比如完成百分比'},
            member_id:{type: mongoose.Types.ObjectId, desc: 'blongs to someone'},
            category: {type: Number, desc: '任务分类:0.任务,1.bug,2.其他'},
            taskitems:[TaskItem]
        },
        {
            title: {type: String, desc: ''},
            present:{type:String,desc:'呈现方式，auto,list'},
            project_id:{type: mongoose.Types.ObjectId, desc: '属于哪个项目'},
            sort: {type: Number, desc: '排序编号'},
            create_at:{type:Date,desc:''},
            status: {type: Number, desc: '比如完成百分比'},
            member_id:{type: mongoose.Types.ObjectId, desc: 'blongs to someone'},
            category: {type: Number, desc: '任务分类:0.任务,1.bug,2.其他'},
            taskitems:[TaskItem]
        }
    ]
}