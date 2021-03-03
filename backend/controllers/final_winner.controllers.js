const QuestionRoundScore = require('../models/final_winner.model')
const QuestiontknScore = require('../models/question_token.model')



async function finalwinner(idParticipant){
    if  (QuestiontknScore.findOne(idParticipant))
    {
    try{
        const  score = await QuestiontknScore.find(score)
    }catch(err){
        console.log(err);
    }
    }


}





module.exports = {
   
};