const axios = require('axios');
const log = require('./log');

const url = 'http://zipcloud.ibsnet.co.jp/api/search?zipcode=';

const search = async (postCode) => {
    const systemLogger = log.getLogger();
    const testUrl = url + postCode;
    systemLogger.debug(testUrl);
    let result = await axios.get(testUrl);
    systemLogger.debug(result.data.results[0]);
    return result.data.results[0];
};

module.exports = {
    search,
};
