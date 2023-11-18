require('dotenv').config();

const express = require('express');
const app = express();
const router = express.Router();
const rootRouter = require('./src/root');
const env = process.env;
const port = env.PORT;

app.use('/api/root', rootRouter);
app.use('/', router);
app.use(express.json());

module.exports = app;
