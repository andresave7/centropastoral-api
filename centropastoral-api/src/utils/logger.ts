import * as winston from "winston";
import * as DailyRotateFile from "winston-daily-rotate-file";
import * as fs from "fs";
import * as _ from "lodash";

// const tsFormat = (): string => (new Date()).toLocaleTimeString();
const logDir: string = "log";

// Create log directory if it doesn't exist
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const transport: DailyRotateFile = new DailyRotateFile({
  filename: "application-%DATE%.log",
  datePattern: "YYYY-MM-DD-HH",
  zippedArchive: true,
  maxSize: "20m",
  maxFiles: "14d",
});

// Logging levels and colors assigned to Winston syslog defaults
const levels = _.clone(winston.config.syslog.levels);
const colors: winston.config.AbstractConfigSetColors = _.clone(winston.config.syslog.colors);
// ... Except for logger.notice()
colors.notice = "cyan";

winston.addColors(colors);

const logger: winston.Logger = new (winston.Logger)({
  levels: levels,
  handleExceptions: false,
  exceptionHandlers: [
    new winston.transports.File({filename: `${logDir}/exceptions.log`}),
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

export default logger;
