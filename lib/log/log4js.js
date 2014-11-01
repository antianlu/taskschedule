/**
 * Created by antianlu on 14-10-9.
 */
var log4js = require('log4js');
var log4jsConfig = require('../../conf/log4jsConfig');
log4js.configure(log4jsConfig);
module.exports = {
    logger: function (name) {
        return log4js.getLogger(name);
    },
    log4js: log4js
};