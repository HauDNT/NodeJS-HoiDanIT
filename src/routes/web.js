const express = require('express');
const {getHomePage, showNewPosts} = require('../controllers/HomeController');
const router = express.Router();

router.get('/', getHomePage);
router.get('/newPost', showNewPosts);

module.exports = router;