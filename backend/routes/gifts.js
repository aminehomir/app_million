const express = require('express');
const router = express.Router();
const gift= require('../controllers/gift.controllers')





router.post('/addGift', gift.addGifts);




module.exports = router;