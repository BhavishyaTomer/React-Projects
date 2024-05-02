const express = require('express');

const router = express.Router();
const {getLogin,
    postLogin,
    getSignUp,
    postSignUp} =require('../controller/authcontroller')
router.get('/signup', 
 getSignUp
 
)
router.post('/signup', 
postSignUp
)
router.get('/login', 
    getLogin
 
)
router.post('/login', 
  postLogin
 
)

module.exports = router;