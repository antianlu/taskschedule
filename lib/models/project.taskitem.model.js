/**
 * Created by antianlu on 14-9-30.
 */
var mongoose = require('../db/mongoClient'),
    Schema = mongoose.Schema;

//var TaskFeedback = new Schema({
//    members:[{type:mongoose.Types.ObjectId,desc:'反馈给的处理人员，可以多人'}],
//    desc: {type: String, desc: '问题、反馈等描述'},
//    result:{type:Number,desc:'反馈结果,已处理，未处理，正在处理等'}
//});

// task item pool
var TaskItem = new Schema({
    title: {type: String, desc: ''},
    desc: {type: String, desc: ''},
//    predate: {type: Date, desc: '预备完成时间'},
//    enddate: {type: Date, desc: '完成时间'},
    level: {type: String, desc: '任务优先级,0紧急1正常'},
    status: {type: Number, desc: '任务完成状态：0未开始，1正在进行，2完成任务，3删除'},
//    color: {type: String, desc: '字体颜色'},
//    background_color: {type: String, desc: '背景颜色'},
    members: [
        {type: mongoose.Types.ObjectId, desc: '同时分配人员(共享)，可以克隆'}
    ],
    clone:{type:Boolean,desc:'是否可以克隆'},
    create_member: {type: mongoose.Types.ObjectId, desc: '创建人'},
    submit_date: {type: Date, desc: '提交日期'},
    category: {type: Number, desc: '任务分类:0.任务,1.bug,2.其他'},
    project_id: {type: mongoose.Types.ObjectId, desc: '哪个项目'},
    sort: {type: Number, desc: '排序'}
//    feedback:[TaskFeedback]
}, {collection: 'project.taskitems',__v:!1});

module.exports = mongoose.model('TaskItem', TaskItem);