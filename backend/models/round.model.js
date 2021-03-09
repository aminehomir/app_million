const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Round = new Schema(
    {
    
        id_group_members: {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Gmemebrs'
        },

        id_question: {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Question'
        },


        participant_answer: {
        type: String,
        required: true,
            },

        id_participant: {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Participant'
        },

        score: {
            type: Number,
            default: 0
                },

    

       
    },
        {
        versionKey: false
        }
    );

    const Roundlist = mongoose.model("Round", Round);
    module.exports = Roundlist;
  