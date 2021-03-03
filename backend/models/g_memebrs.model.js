const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Gmemebrs = new Schema(
    {
    
        id_participant: [{
            type: mongoose.Schema.Types.ObjectId,
            ref : 'Participant'
          }],


        groupe_code: {
            type: Number,
            required: true,

        },

      

    },
        {
        versionKey: false
        }
    );

    const Gmemebrslist = mongoose.model("Gmemebrs", Gmemebrs);
    module.exports = Gmemebrslist;
  