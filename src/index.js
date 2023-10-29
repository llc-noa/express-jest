const express = require('express');
const app = express();
const router = express.Router();
const { Get } = require('./root');

router.get('/', Get);

app.use('/', router);

app.listen(3000);
