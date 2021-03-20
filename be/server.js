const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const routes = require('./api/routes');
routes(app);

app.listen(port, function() {
    console.log('Server started on port: ' + port);
});

module.exports = app;