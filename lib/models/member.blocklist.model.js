/**
 * Created by antianlu on 14/11/1.
 */
var mongoose = require('../db/mongoClient'),
    Schema = mongoose.Schema,
    TaskItem = require('./project.taskitem.model');

var TaskItem = new Schema({
    _item: {type: Schema.Types.ObjectId, ref: 'TaskItem', desc: '关联任务列表'},
    sort : {type: Number, desc: '任务排序号'}
});

var BlockList = new Schema({
    title: {type: String, desc: ''},
    present:{type:String,desc:'呈现方式，auto,list'},
    project_id:{type: Schema.Types.ObjectId, desc: '属于哪个项目'},
    sort: {type: Number, desc: '排序编号'},
    create_at:{type:Date,desc:''},
    status: {type: Number, desc: '比如完成百分比'},
    member_id:{type: Schema.Types.ObjectId, desc: 'blongs to someone'},
    category: {type: Number, desc: '任务分类:0.任务,1.bug,2.其他'},
    taskitems:[TaskItem]
});

module.exports = exports = mongoose.model('BlockList',BlockList);