const Participant = require('../models/participant.model')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Nexmo = require('nexmo');




 const registerparticipant = ((req, res) => {
   
  
                     
    bcrypt.hash(req.body.password, 10, function (err, hashPass){
        if (err) {
            res.json({
                    error: err
            })

    }

    const full_name = req.body.full_name;
    const age = req.body.age;
    const email = req.body.email;
    const phone = req.body.phone;
    const password = hashPass;
    
      const ParticipantPush = new Participant({
        
        full_name,
        age,
        email,
        phone,
        password
  
       
      });
    
      ParticipantPush
        .save()
        .then(() => res.json({message:'Participant successfully added'}))
        .catch((err) =>  res.status(400).json("Error :" + err));
    })
       
    });

    const login = (req, res, next) => {
        var phone = req.body.phone;
        var password = req.body.password;
     
        Participant.findOne({phone:phone})
        .then(participant =>{
            if(participant){
                bcrypt.compare(password, participant.password, function(err, result){
                    if(err) {
                        res.json({
                            error: err
                        })
                    }
                    if(result){
                        let token = jwt.sign({phone:phone}, 'homirkey') 
                                    res.json({
                                        message: 'login Sucessful!',
                                        token
                                    })
                                
                    }else{
                        res.json({
                            message: 'password deos not matched !'
                        })
    
                    }
                })
            }else{
                res.json({
                    message: 'No Participant found !'
                }) 
            }
        })
      
    }

 const validep = ((req, res) => {
    jwt.verify(req.token, 'hrkey', (err, authData) => {
        if(err) {
                res.sendStatus(403);
        } else{
    Participant.findById(req.params.id)
            .then((participant) => {
                participant.is_valid = true;
             
                const nexmo = new Nexmo({
                    apiKey: '832d96f5',
                    apiSecret: 'GT9Kf9vhgwVkWETs',
                  });
                  
                  const from = 'Vonage APIs';
                  const to = '212648680297';
                  const text = 'votre participation est validé';
                  
                  nexmo.message.sendSms(from, to, text);
      
                participant
                    .save()
                    .then(() => res.json(" participant is valid"))
                    .catch((err) => res.status(400).json("Error :" + err));
            })
            .catch((err) => res.status(400).json("Error :" + err));
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
        registerparticipant,
       login,
       validep,
       verifyt
    };