/**
 * Created by antianlu on 14/11/1.
 */
var mongoose = require('../db/mongoClient'),
    Schema = mongoose.Schema,
    BlockList = require('./blocklist.model.js');

var Project = new Schema({
    name:{type:String,desc:''},
    company_id:{type:Schema.Types.ObjectId,desc:'公司或团队ID'},
    desc:{type:String,desc:''},
    leader:{type:String,desc:''},
    website:{type:String,desc:''},
    create_at:{type:Date,desc:''},
    finish_at:{type:Date,desc:''},
    status:{type:Number,desc:''},
    priority:{type:String,desc:''},
    category:{type:String,desc:''},
    blocklist:[BlockList]
},{collection:'projects',__v:false});

module.exports = exports = mongoose.model('Project',Project);

//var BlockList = new Schema({
//    title: {type: String, desc: ''},
//    top: {type: Number, desc: '窗口上边距离'},
//    left: {type: Number, desc: '窗口左边距离'},
//    width: {type: Number, desc: '宽度'},
//    height: {type: Number, desc: '高度'},
//    blocklist: [BlockList],
//    present:{type:String,desc:'呈现方式，auto,list'},
//    block_sort: [
//        {type: Number, desc: '最新排序组合'}
//    ],
//
//    sort: {type: Number, desc: '排序编号'},
//
//
//    desc: {type: String, desc: ''},
//    predate: {type: Date, desc: '预备完成时间'},
//    enddate: {type: Date, desc: '完成时间'},
//    level: {type: String, desc: '任务优先级'},
//    status: {type: Number, desc: '任务完成状态：0未开始，1正在进行，2完成任务，3删除'},
//    color: {type: String, desc: '字体颜色'},
//    background_color: {type: String, desc: '背景颜色'},
//    members: [
//        {type: mongoose.Types.ObjectId, desc: '同时分配人员(共享)，可以克隆'}
//    ],
//    clone:{type:Boolean,desc:'是否可以克隆'},
//    submit_person: {type: String, desc: '提交人'},
//    submit_date: {type: Date, desc: '提交日期'},
//    category: {type: Number, desc: '任务分类:0.任务,1.bug,2.其他'},
//    depart_id: {type: mongoose.Types.ObjectId, desc: '分配到哪个部门'},
//    sort: {type: Number, desc: '排序'},
//    feedback:[TaskFeedback]
//})
