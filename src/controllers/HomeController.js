const connection = require('../config/database');

const getHomePage = (req, res) => {
    //Process data <=> call Model
    res.render('sample.ejs');
};

const showNewPosts = (req, res) => {
    //Process data <=> call Model
    res.send('New post page!');
};

module.exports = {
    getHomePage,
    showNewPosts,
};