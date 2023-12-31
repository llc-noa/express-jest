const express = require('express');
const router = express.Router();
const log = require('./common/log');
const address = require('./common/address');

router.get('/', async (req, res) => {
    const systemLogger = log.getLogger();
    systemLogger.debug(req.query);

    let addressResult = {};
    if (req.query.postCode) {
        addressResult = await address.search(req.query.postCode);
        systemLogger.debug('addressResult:' + addressResult);
    }

    res.status(200).send({
        id: req.query.id,
        address: addressResult,
    });
});

module.exports = router;
