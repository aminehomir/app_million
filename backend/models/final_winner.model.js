const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Final_winner = new Schema(
    {
    
        id_round: [{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Round'
        }],

        final_score: {
        type: Number,
        required: true,
        },

        id_participant: {
        type: Number,
        required: true,
        },

        id_gift: {
            type: mongoose.Schema.Types.ObjectId,
            ref : 'Gifts'
            },

        
    
       
    },
        {
        versionKey: false
        }
    );

    const Final_winnerlist = mongoose.model("Round_score", Final_winner);
    module.exports = Final_winnerlist;
  