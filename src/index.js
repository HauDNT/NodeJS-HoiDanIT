require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3010;
const hostname = process.env.HOST_NAME;
const webRoutes = require('./routes/web');
const configViewEngine = require('./config/viewEngine');
const connection = require('./config/database');

// config view engine & static files:
configViewEngine(app);

// init routers:
app.use('/', webRoutes);

// test query:
connection.query (
    'SELECT * FROM Users',
    function (err, results, fields) {
        console.log("==> Results: ", results);
    }
);

app.listen(port, hostname, (req, res) => {
    console.log(`App's running at port: ${port}`)
});