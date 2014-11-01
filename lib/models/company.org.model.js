/**
 * Created by antianlu on 14-9-30.
 */
var mongoose = require('../db/mongoClient'),
    Schema = mongoose.Schema;

var Organization = new Schema({
    depart_name: {type: String, desc: '部门名称'},
    direct: {type: String, desc: '部门方向'},
    slogan: {type: String, desc: '口号'},
    leader: {type: String, desc: '领导'},
    sub_depart: mongoose.Mixed,
    create_at:{type:Date,desc:''}
    //count: {type: String, desc: '人数'}
});

//var OrgStructure = new Schema({
//    company_id:{type:mongoose.Types.ObjectId},
//    orgs:[Organization]
//})

module.exports = exports  = mongoose.model('Organization',Organization);

var b = {
    campany_id: '11',
    orgs: [
        {
            _id:'12',
            name: 'tech',
            leader: 'name',
            members: []
        },
        {
            _id:'123',
            parent_id:'12',
            name: 'front',
            members: []
        },
        {
            name: 'end',
            members: []
        },
        {
            name: 'design',
            members: []
        }
    ]
}