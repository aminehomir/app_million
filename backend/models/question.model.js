const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Question = new Schema(
    {
    
        quest: {
            type: String,
            required: true,
        },


        answer: {
            type: String,
            required: true,

        },

        false_choices: [{
            type: String,
            required: true,

        }],

        points: {
            type: Number,
            required: true,
        },

    },
        {
        versionKey: false
        }
    );

    const Questionlist = mongoose.model("Question", Question);
    module.exports = Questionlist;
  