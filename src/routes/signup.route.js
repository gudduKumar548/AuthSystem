const express = require('express');
const { handleSignup } = require('../controllers/auth.Controller');
const router = express.Router();

router.post('/signup', handleSignup);

module.exports = router;
