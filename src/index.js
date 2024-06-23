require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3010;
const hostname = process.env.HOST_NAME;
const webRoutes = require('./routes/web');
const configViewEngine = require('./config/viewEngine');

// Config request body:
app.use(express.json());
app.use(express.urlencoded({extended: true}))

// config view engine & static files:
configViewEngine(app);

// init routers:
app.use('/', webRoutes);

app.listen(port, hostname, (req, res) => {
    console.log(`App's running at port: ${port}`)
});