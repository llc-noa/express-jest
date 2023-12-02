const express = require('express');
const router = express.Router();
const log = require('./common/log');

router.get('/', (req, res) => {
    const systemLogger = log.getLogger();
    systemLogger.debug('test');
    if (req.query.id) {
        res.status(200).send({
            id: req.query.id,
        });
    }

    res.status(400).send('Who are you?');
});

module.exports = router;
