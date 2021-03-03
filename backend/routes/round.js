const express = require('express');
const router = express.Router();
const Round = require('../controllers/round.controllers');


router.post('/add', Round.addround)


module.exports = router ; 