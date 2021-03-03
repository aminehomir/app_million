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

        id_question_token: {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Question_token'
        },

       

       
    },
        {
        versionKey: false
        }
    );

    const Roundlist = mongoose.model("Round", Round);
    module.exports = Roundlist;
  