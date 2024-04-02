"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston = require("winston");
const DailyRotateFile = require("winston-daily-rotate-file");
const fs = require("fs");
const _ = require("lodash");
// const tsFormat = (): string => (new Date()).toLocaleTimeString();
const logDir = "log";
// Create log directory if it doesn't exist
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}
const transport = new DailyRotateFile({
    filename: "application-%DATE%.log",
    datePattern: "YYYY-MM-DD-HH",
    zippedArchive: true,
    maxSize: "20m",
    maxFiles: "14d",
});
// Logging levels and colors assigned to Winston syslog defaults
const levels = _.clone(winston.config.syslog.levels);
const colors = _.clone(winston.config.syslog.colors);
// ... Except for logger.notice()
colors.notice = "cyan";
winston.addColors(colors);
const logger = new (winston.Logger)({
    levels: levels,
    handleExceptions: false,
    exceptionHandlers: [
        new winston.transports.File({ filename: `${logDir}/exceptions.log` }),
    ],
    transports: [
        // For console logging
        new winston.transports.Console({
            handleExceptions: true,
        }),
        transport,
    ],
    exitOnError: false,
});
exports.default = logger;
//# sourceMappingURL=logger.js.map