const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Final_winner = new Schema(
    {
    
        id_group_members: {
            type: mongoose.Schema.Types.ObjectId,
            ref : 'Gmemebrs'
        },

        final_score: {
        type: Number,
        required: true,
        },

        id_participant: {
        type: String,
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

    const Final_winnerlist = mongoose.model("Final_winner", Final_winner);
    module.exports = Final_winnerlist;
  