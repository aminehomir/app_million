const express = require('express');
const router = express.Router();
const Participant = require('../controllers/participant.controllers');


router.post('/add', Participant.registerparticipant)
router.post('/login',Participant.login);
router.put('/:id',Participant.verifyt ,Participant.validep );

module.exports = router ; 