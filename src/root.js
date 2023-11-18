const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    if (req.query.id) {
        return res.status(200).send(`Hi! ${req.query.id}`);
    }

    res.status(400).send('Who are you?');
});

module.exports = router;
