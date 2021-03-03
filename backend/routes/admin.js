const express = require('express');
const router = express.Router();
const Admin = require('../controllers/admin.controllers');


router.post('/add',Admin.verifyt ,Admin.registeradmin)
router.post('/login',Admin.login);

module.exports = router ; 