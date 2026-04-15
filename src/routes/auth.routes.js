const express = require('express');
const router = express.Router();
const {login} = require('../Controllers/auth.controller');


router.post('/login',login);



module.exports = router;