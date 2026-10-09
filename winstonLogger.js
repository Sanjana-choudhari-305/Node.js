const {createLogger, format, transports, info} = require('winston');
const logger = createLogger({
    level:'debug',
    format:format.combine(
        format.timestamp({format:'YYYY-MM-DD hh-mm-ss'}),
        format.printf(info=>`${info.timestamp}
            [${info.level.toUpperCase()}]:${info.message}`)    
    ),
    transports:[
        new transports.Console(),
        new transports.File({filename:'logs/app.log'})
    ]
})

module.exports=logger;