/**
 * Created by antianlu on 14-9-30.
 */
var env = 'development';
var developor = 'antianlu';

var settings =
{
    mongodb:{
        host:'localhost',
        port:27017,
        user:'',
        pass:'',
        db:'taskschedule',
        poolSize:4
    },
    app:{
        host:'localhost',
        port:3000,
        main:'index'
    }
}

exports = module.exports  = settings;