const g_memebrs = require('../models/g_memebrs.model')

const jwt = require('jsonwebtoken');

const addgroupe = ((req, res) => {

    jwt.verify(req.token, 'homirkey', (err, authData) => {
        if(err) {
                res.sendStatus(403);
        } else{
    
    const groupe_code = req.body.groupe_code;
    const id_participant = req.body.id_participant;
        

  


    
    const GmemebrsPush = new g_memebrs({
        
        groupe_code,
        id_participant
       
  
       
      });
    
      GmemebrsPush
        .save()
        .then(() => res.json("Groupe successfully added"))
        .catch((err) =>  res.status(400).json("Error :" + err));
       

        authData
    }
         })

});

  

        const rejoingroupe = (req , res)=>{
            
    jwt.verify(req.token, 'homirkey', (err, authData) => {
        if(err) {
                res.sendStatus(403);
        } else{
    

            let group_code = req.params.groupe_code;
            let id_new_participant = req.body.id_participant;
    
            // check if group exist and there is less than 4 particpant 
    
            g_memebrs.findOne({groupe_code : group_code})
            .then(group => {
                    if(!group) {
                        return res.status(404).send({
                            message: "group not found with id " + group_code
                        });
                    }
                    if(group.id_participant.length > 3) {
                            return res.send({
                                message: "Ops the game is started !"
                            });
                    }
    
    
                    g_memebrs.updateOne(
                            { groupe_code: group_code },
                            { $push: { id_participant: [id_new_participant] } },
                            function(err, result) {
                              if (err) {
                                res.send(err);
                              } else {
                                res.send(result);
                              }
                            }
                          )
    
                }).catch(err => {
    
                    return res.status(500).send({
                        message: "Error retrieving group with id " + group_code
                    });
                });
                
                authData
            }
                 })
                
    
    }


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

    addgroupe,
    rejoingroupe,
    verifyt
    
};