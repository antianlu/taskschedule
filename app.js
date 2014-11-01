global.appname = 'TaskSchedule';
global.dirname = __dirname;
global.version = 1.0;
var app = require('./conf/appConfig');
global.TaskApp = app;
module.exports = app;