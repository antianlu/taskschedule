/**
 * Created by antianlu on 14-9-30.
 */

var mongoose = require('../db/mongoClient'),
    Schema = mongoose.Schema,
    Task = require('./task.model');

var TaskItem = new Schema({
    _item: {type: mongoose.Types.ObjectId, ref: 'Task', desc: '关联任务列表'},
    sort : {type: Number, desc: '任务排序号'}
});

var BlockList = new Schema({
    title   : {type: String, desc: '标题'},
    datetime: {type: Date, desc: '创建日期'},
    top     : {type: Number, desc: '窗口上边距离'},
    left    : {type: Number, desc: '窗口左边距离'},
    width   : {type: Number, desc: '宽度'},
    height  : {type: Number, desc: '高度'},
    taskitem: [TaskItem],
    item_sort:[{type:Number,desc:'item 排序'}],
    sort:{type:Number,desc:'块排序编号'}
});


var Memeber = new Schema({
    email: { type: String, desc: ''},
    realname: { type: String, desc: ''},
    pass: { type: String, desc: ''},
    top: {type: Number, desc: '窗口上边距离'},
    left: {type: Number, desc: '窗口左边距离'},
    width: {type: Number, desc: '宽度'},
    height: {type: Number, desc: '高度'},
    blocklist: [BlockList],
    present:{type:String,desc:'呈现方式，auto,list'},
    block_sort: [
        {type: Number, desc: '最新排序组合'}
    ],
    depart_id:mongoose.Types.ObjectId,
    sort: {type: Number, desc: '排序编号'}
},{collection:'members',_v:!1});

module.exports = mongoose.model('Member',Memeber);

var demo = {
    email:'atlatl333@126.com',
    realname:'tianlu',
    pass:'234tfrt4tef',
    top:200,
    left:300,
    width:500,
    height:400,
    blocklist:[
        {
            title:'推送',
            datetime:'2014-11-1',
            top:100,
            left:50,
            width:200,
            height:400,
            tasks:{

            },
            sort_num:0
        },
        {
            sort_num:2
        },
        {
            sort_num:1
        }

    ],
    sorts:[0,2,1]
}

