const Round = require('../models/round.model')
const QuestionTkn = require('../models/question_token.model')
const Question = require('../models/question.model')

async function checkquestion(id){
    try{
        const  checkId = await Question.findOne(id)
        return checkId
    }catch(err){
        console.log(err);
    }


}

async function checkscore(id){
    try{
        const  checkId = await QuestionTkn.findByIdAndUpdate(id,{$set: {score : 10}} )
        return checkId
    }catch(err){
        console.log(err);
    }


}

async function checkquestiontkn(id){
    try{
        const  checkId = await QuestionTkn.findOne(id)
        return checkId
    }catch(err){
        console.log(err);
    }


}

async function totalscore(id){
    try{
        const  checkId = await QuestionTkn.findOne(id)
        return checkId
    }catch(err){
        console.log(err);
    }


}

// async function finalwinner(idParticipant){
//     const total=0

//     if  (QuestionTkn.findOne(idParticipant))
//     {
//     try{
//         const  score = await QuestionTkn.find(score)
//         total+=score
//     }catch(err){
//         console.log(err);
//     }
//     return total

//     }


// }

const addround = (async (req, res) => {

    const id_group_members = req.body.id_group_members;
    const id_question = req.body.id_question;
    const id_question_token = req.body.id_question_token;


    
      const RoundPush = new  Round({
        
        id_group_members,
        id_question,
        id_question_token
  
       
      });
    
      RoundPush
        .save(async (err, result) =>{

            // db.restaurants.find( { "borough" : "Brooklyn" } ).count()
            const checkQuestion = await checkquestion(result.id_question)
            const checkQuestiontkn = await checkquestiontkn(result.id_question_token)


            const checkscoretotal = await  totalscore(result.score)
        //    console.log(checkscore);
             let score = checkscoretotal.score;
            let answer = checkQuestion.answer;
            let participant_answer = checkQuestiontkn.participant_answer;
            

            console.log(score);
            if(answer == participant_answer){
              await  checkscore(result.id_question_token)
            }
        })
        // .then(() => res.json(" Round successfully added"))
        // .catch((err) =>  res.status(400).json("Error :" + err));
})


module.exports = {
    addround
};