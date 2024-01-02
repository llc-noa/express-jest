const log = require('./log');
const axiosBase = require('axios');
const axios = axiosBase.create({
    timeout: 2000,
    headers: {},
    defaults: {},
});

exports.search = async (zipcode) => {
    const systemLogger = log.getLogger();
    let getData;
    try {
        await axios
            .get(`http://zipcloud.ibsnet.co.jp/api/search?zipcode=${zipcode}`)
            .then((res) => {
                if (res && res.status === 200) {
                    systemLogger.debug(res.data.results[0]);
                    getData = res.data;
                }
            })
            .catch((error) => {
                systemLogger.fatal(error.stack);
            });
    } catch (e) {
        systemLogger.fatal(e.stack);
    }
    return getData;
};
