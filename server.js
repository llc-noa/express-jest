const app = require('./app');
require('dotenv').config();

const env = process.env;
const port = env.PORT;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
