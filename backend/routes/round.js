const express = require('express');
const router = express.Router();
const Round = require('../controllers/round.controllers');


router.post('/add', Round.createRound)


module.exports = router ; 