const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    if (req.query.id) {
        res.status(200).send({
            id: req.query.id,
        });
    }

    res.status(400).send('Who are you?');
});

module.exports = router;
