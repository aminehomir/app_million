const express = require('express');
const router = express.Router();
const Finalwinner = require('../controllers/final_winner.controllers');


router.post('/add/:id_group_members',Finalwinner.AddFinalWinner);

module.exports = router ; 