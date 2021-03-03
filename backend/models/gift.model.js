const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Gifts = new Schema(
    {
    
        name: {
            type: String,
            required: true,
        },


        image: {
            type: String,
            required: true,

        },


    },
        {
        versionKey: false
        }
    );

    const Giftslist = mongoose.model("Gifts", Gifts);
    module.exports = Giftslist;
  