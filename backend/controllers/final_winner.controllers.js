const FinalWinner = require('../models/final_winner.model');
const Gifts = require('../models/gift.model');
const Round = require('../models/round.model');



const AddFinalWinner = (req, res) =>{

   
    
          let id_group_members = req.params.id_group_members;
    
          (async () => {
            let round = await  getHighScore(id_group_members);
            let final_score = Math.max.apply(Math, round.map(function(round) { return round.score; }))
            let finalWinner = await winner(id_group_members, final_score);
            console.log(finalWinner);

            let gift = await getRandomGift()
    
    
    
            const FinalWinnerPush = new FinalWinner({
    
              id_group_members: id_group_members,
              final_score: final_score,
              id_participant: finalWinner,
              id_gift: gift,
    
            });
    
            FinalWinnerPush
              .save()
              .then((data) => {
                res.send(data);
                res.json("FinalWinner successfully added")
    
              }).catch((err) => res.status(400).json("Error :" + err));
    
    
          })()
      
    
    }
    
    
    
    async function getRandomGift() {
    
       gift =  await Gifts.find()
       let randomGift = gift[Math.floor(Math.random() * gift.length)];
       return randomGift._id;
    
     
    
    
    }
    
    async function getHighScore(id_group_members) {
      round = await Round.find({
        id_group_members: id_group_members
      })
    
      return round;
    
    
    
    }
    
    async function winner(id_group_members, final_score) {
     
      round = await Round.findOne({
          id_group_members: id_group_members,
          score: final_score
        })
    
        return round.id_participant;

}





module.exports = {
AddFinalWinner
};