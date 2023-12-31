require('dotenv').config();

const express = require('express');
const app = express();
const router = express.Router();
const rootRouter = require('./src/root');

app.use('/api/root', rootRouter);
app.use('/', router);
app.use(express.json());

module.exports = app;
