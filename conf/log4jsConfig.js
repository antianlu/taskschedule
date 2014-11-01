module.exports = {
    appenders: [
        {
            type: "dateFile",
            filename: dirname + "/logs/log.log",
            pattern: "_yyyy-MM-dd",
            alwaysIncludePattern: false,
            category: "dateFileLog"
        },
        {
            type: "file",
            filename: dirname + "/logs/app.log",
            maxLogSize: 10485760,
            numBackups: 3
        }
    ],
    replaceConsole: false,
    levels:{
        dateFileLog:"INFO"
    }
}