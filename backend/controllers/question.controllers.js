const Question = require('../models/question.model')

const jwt = require('jsonwebtoken');


const addquestion = ((req, res) => {
    jwt.verify(req.token, 'hrkey', (err, authData) => {
        if(err) {
                res.sendStatus(403);
        } else{

    const quest = req.body.quest;
    const answer = req.body.answer;
    const false_choices = req.body.false_choices;
    const points = req.body.points;

    
      const QuestionPush = new  Question({
        
        quest,
        answer,
        false_choices,
        points
  
       
      });
    
      QuestionPush
        .save()
        .then(() => res.json(" Question successfully added"))
        .catch((err) =>  res.status(400).json("Error :" + err));

        authData
    }
         })
});

const verifyt = function verifyToken(req, res, next) {

    const breareHeader = req.headers['authorization'];

    if(typeof breareHeader !== 'undefined'){
        const bearer = breareHeader.split(' ');
        const bearerToken = bearer[1]; 
        req.token = bearerToken;

        next();

    } else {
        res.sendStatus(403);
    }
 }


module.exports = {
    addquestion,
    verifyt
};