const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Participant = new Schema(
    {
    
        full_name: {
            type: String,
            required: true,
        },

        age: {
            type: Number,
           
        },

        phone: {
            type: String,
            required: true,

        },

        email: {
            type: String,
            required: true,

        },

        is_valid: {
            type: Boolean,
            default: false,
           
          },
            
        online: {
        type: Boolean,
        default: false,
        
        },

        password: {
            type: String,
            required: true,
        },

    },
        {
        versionKey: false
        }
    );

    const Participantlist = mongoose.model("Participant", Participant);
    module.exports = Participantlist;
  