const express = require('express');
const router = express.Router();
const Question = require('../controllers/question.controllers');


router.post('/add',Question.verifyt ,Question.addquestion)


module.exports = router ; 