const log4js = require('log4js');
const logger = log4js.getLogger();
logger.level = 'debug';

const getLogger = () => {
    return logger;
};

module.exports = {
    getLogger,
};
