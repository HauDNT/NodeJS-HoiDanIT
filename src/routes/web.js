const express = require('express');
const {getHomePage, showNewPosts, postCreateUser, getCreateUserPage} = require('../controllers/HomeController');
const router = express.Router();

router.get('/', getHomePage);
router.get('/newPost', showNewPosts);
router.get('/create', getCreateUserPage);

router.post('/create-user', postCreateUser);

module.exports = router;