// const Questiontoken = require('../models/question_token.model')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const questiontkn = ((req, res) => {

    const  id_question = req.body.id_question;
    const participant_answer = req.body.participant_answer;
    const id_participant = req.body.id_participant;

    
      const QuestiontokenPush = new  Questiontoken({
        
        id_question,
        participant_answer,
        id_participant
  
       
      });
    
      QuestiontokenPush
        .save()
        .then(() => res.json(" Questiontoken successfully added"))
        .catch((err) =>  res.status(400).json("Error :" + err));
})


module.exports = {
    questiontkn
};