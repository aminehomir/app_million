const jwt = require('jsonwebtoken');
const Gifts = require('../models/gift.model');

const addGifts = (req, res) => {

 


      const GiftsPush = new Gifts({

        name: req.body.name,
        image: req.body.image,
        


      });

      GiftsPush
        .save()
        .then((data) => {
          res.send(data);
          res.json("Gift successfully added")

        }).catch((err) => res.status(400).json("Error :" + err));


}




module.exports = {
    addGifts
}