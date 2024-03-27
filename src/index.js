require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3010;
const hostname = process.env.HOST_NAME;
const webRoutes = require('./routes/web');
const configViewEngine = require('./config/viewEngine');
const mysql = require('mysql2');

// config view engine & static files:
configViewEngine(app);

// init routers:
app.use('/', webRoutes);

// test connect:
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: '123456',
    database: 'hoidanit',
});

// test query:
connection.query (
    'SELECT * FROM Users',
    function (err, results, fields) {
        console.log("==> Results: ", results);
        // console.log("==> Fields: ", fields);
    }
);


app.listen(port, hostname, (req, res) => {
    console.log(`App's running at port: ${port}`)
});