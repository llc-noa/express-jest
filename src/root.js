exports.Get = (req, res) => {
    if (req.query.id) {
        return res.status(200).send(`Hi! ${req.query.id}`);
    }

    res.status(400).send('Who are you?');
};
