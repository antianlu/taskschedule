/**
 * Created by antianlu on 14-10-12.
 */
var index = require('./index');
var task  = require('./task.router');
var member= require('./member.router');

var test = require('./test.router')

module.exports = function(app)
{
    app.use('/',index);
    app.use('/test',test);
//    app.use('/task',task);
//    app.use('/member',member);
}