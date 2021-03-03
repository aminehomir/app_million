const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Round_score = new Schema(
    {
    
        id_round: {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Round'
        },

        score: {
        type: Number,
        required: true,
        },
    
       
    },
        {
        versionKey: false
        }
    );

    const Round_scorelist = mongoose.model("Round_score", Round_score);
    module.exports = Round_scorelist;
  