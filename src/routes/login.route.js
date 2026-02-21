const { handleUserLogin } = require('../controllers/login.Controller');
const express = require('express');
const router = express.Router();

router.post('/login', handleUserLogin);

module.exports = router;