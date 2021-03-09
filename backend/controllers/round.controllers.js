const Round = require('../models/round.model')
const Question = require('../models/question.model')
const Gmembers = require('../models/g_memebrs.model');



const createRound = async (req, res) => {
    
    let idgroup = req.body.id_group_members;

    await Gmembers.findById(idgroup)
            .then(groupe => {
                    if (!groupe) {
                            return res.status(404).send({
                                    message: "group not found with id " + idgroup
                            });
                    }
                    if (groupe.id_participant.length < 3) {
                            return res.send({
                                    message: "Ops you need 4 players to start the game  !"
                            });
                    }




                    let id_group_members = idgroup;
                    let id_question = req.body.id_question;
                    let id_participant = req.body.id_participant;
                    let participant_answer = req.body.participant_answer;
                   
                   
                   
                
                   
                   
                    (async () => {

                        let score = await CheckScoreParticipant(idgroup,id_participant);
                        
                       
                        
                        // let score = await CheckScoreParticipant(id_group_members,id_participant);
                       

                            // console.log(score);

                            // check if the answer is correct then update score 
                            let check = await CheckAnswer(participant_answer, id_question)
                            if (check == true) {
                                score = score + 10;
                                console.log(score);

                        }
                          
                       
                            const RoundPush = new Round({

                                    id_group_members: id_group_members,
                                    id_question: id_question,
                                    id_participant: id_participant,
                                    participant_answer: participant_answer,
                                    score: score,
                                    


                            });
                          
                            
                            RoundPush
                                    .save()

                                    .then((data) => {
                                            res.send(data);
                                            res.json("Round  successfully saved")

                                    }).catch((err) => res.status(400).json("Error :" + err));
                               
                           }) ()
                            }).catch(err => {

                                    return res.status(500).send({
                                            message: "Error retrieving group with id " + idgroup
                                    });
                            });
                       



   
}

async function CheckAnswer(participant_answer, id_question) {

   
    question = await Question.findById(id_question)
    if (question.answer == participant_answer) {

            
            return true
            
    }else{
            return false
    }



}

async function CheckScoreParticipant(id_group_members, id_participant) {

    let scoreArray = [0];
    round = await Round.find({
            id_group_members: id_group_members,
            id_participant: id_participant
    })

    if (round) {

            for (let i = 0; i < round.length; i++) {

                   scoreArray.push(round[i].score)

            }



            return Math.max(...scoreArray)

    } else {
            return 0

    }

    

    

}


module.exports = {
    createRound
};