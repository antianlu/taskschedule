/**
 * Created by antianlu on 14-9-30.
 */
var mongoose = require('../db/mongoClient'),
    Schema = mongoose.Schema;

var Department = new Schema({
    depart_name: {type: String, desc: '部门名称'},
    direct: {type: String, desc: '部门方向'},
    slogan: {type: String, desc: '口号'},
    leader: {type: String, desc: '领导'},
    manager: {type: String, desc: '管理员'},
    sub_depart: mongoose.Mixed,
    //count: {type: String, desc: '人数'}
});