/**
 * Created by antianlu on 14/11/2.
 */
var Member = require('../lib/models/member.model');

function TestMember()
{

}

module.exports = Member;

/**
 * 创建用户
 * @param mem
 */
TestMember.create = function(mem){
    var member = new Member(mem);
    member.save(function(err,member){

    })
}

/**
 * 获取所有用户
 * @param cb
 */
TestMember.findAll = function (cb) {
    Member
        .find()
        .sort({'create_at': -1})
        .exec(cb);
};

/**
 * 传入key_value查询人员
 * @param key_value
 * @param cb
 */
TestMember.find = function (key_value, cb) {
    Member.find(key_value, function(err, docs) {
        if(err) return cb(err, null);
        cb(null, docs);
    });
};

/**
 * 根据key_value查询人员
 * @param key_value
 * @param cb
 */
TestMember.findOne = function (key_value, cb) {
    if(key_value) {
        Member.findOne(key_value, function (err, docs) {

        });
    } else {
        cb(null, null);
    }
};

/**
 * 根据姓名获取用户
 * @param name
 * @param cb
 */
TestMember.findByName = function (name, cb) {
    if(name) {
        this.find({realname: name}, cb);
    } else {
        cb(null, null);
    }
};

/**
 * 根据状态获取人员
 * @param state
 * @param cb
 */
TestMember.findByState = function (state, cb) {
    if(state) {
       this.find({state: state}, cb);
    } else {
        cb(null, null);
    }
};


/**
 * 根据用户获取他／她的blocklist
 * @param name
 * @param cb
 */
TestMember.findBlocksByName = function (name, cb) {
    if(name) {
        this.findByName(name, function(err, docs) {
            if(err) return cb(err, null);
            cb(null, docs.blocklist)
        })
    } else {
        cb(null, null);
    }
};

/**
 * 统计某人在某项目的block个数
 * @param name
 * @param project_id
 * @param cb
 */
TestMember.countProjectBlock = function(name, project_id) {
    if(name && project_id) {
        count = this.findOne({
            realname: name,
            'realname.blocklist.project_id': project_id
        }, function(err, docs) {
            if(err) return 0;
            return docs.length;
        });
    } else {
        return 0;
    }
};

/**
 * 根据object_id更新人员
 * @param objectid
 * @param obj
 * @param cb
 */
TestMember.update = function(objectid, obj, cb) {
    Member.update({_id: objectid}, obj, function(err, updated) {
        if(err) return cb(err, null);
        cb(null, updated);
    });
};

/**
 * 根据objectid删除人员
 * @param objectid
 * @param cb
 */
TestMember.remove = function(key_value, cb) {
    Member.remove(key_value , function (err, docs) {
        if(err) return cb(err, null);
        cb(null, docs);
    });
};



/*
Member.create({
    email:'1@.12.com',
    realname:'antianlu',
    age:27
})
*/
TestMember.findAll(function (err, members) {
   if(!err) {
       console.log(members.length);
   }
});

