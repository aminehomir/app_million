const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Question_token = new Schema(
    {
    
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
            default: 0,
            required: true,
             },

       

       
    },
        {
        versionKey: false
        }
    );

    const Question_tokenlist = mongoose.model("Question_token", Question_token);
    module.exports = Question_tokenlist;
  