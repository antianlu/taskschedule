/**
 * Created by antianlu on 14/11/2.
 */
var Member = require('../lib/models/member.model');

function Member()
{

}

module.exports = Member;

Member.create = function(mem){
    var member = new Member(mem);
    member.save(function(err,member){

    })
}


Member.create({
    email:'1@.12.com',
    realname:'antianlu',
    age:27
})
