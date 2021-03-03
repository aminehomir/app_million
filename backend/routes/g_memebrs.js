const express = require('express');
const router = express.Router();
const G_memebrs = require('../controllers/g_memebrs.controllers');


router.post('/add',G_memebrs.verifyt ,G_memebrs.addgroupe)
router.put('/:groupe_code',G_memebrs.verifyt , G_memebrs.rejoingroupe);
// router.post('/login',Admin.login);

module.exports = router ; 