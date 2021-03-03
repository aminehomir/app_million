const express = require('express');
const router = express.Router();
const Questiontkn = require('../controllers/question_token.controllers');


router.post('/add', Questiontkn.questiontkn)


module.exports = router ; 