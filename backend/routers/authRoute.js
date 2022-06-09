const express = require('express');
const router = express.Router();
const authCtrl = require('../controllers/user');




// authUser 
router.post('/signup',authCtrl.signup);//'/api/auth/signup'.
router.post('/login',authCtrl.login);








module.exports = router;