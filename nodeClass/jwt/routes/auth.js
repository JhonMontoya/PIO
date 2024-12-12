const express = require('express');

const {register, login, profile} = require('../controllers/authConroller');
const {verifyToken} = require('../utils/jwt');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/profile', verifyToken, profile);

module.exports = router;