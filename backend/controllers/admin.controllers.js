const Admin = require('../models/admin.model')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');




 const registeradmin = ((req, res) => {

     jwt.verify(req.token, 'hrkey', (err, authData) => {
                if(err) {
                        res.sendStatus(403);
                } else{
                   
    bcrypt.hash(req.body.password, 10, function (err, hashPass){
        if (err) {
            res.json({
                    error: err
            })

    }

   

    const full_name = req.body.full_name;
    const phone = req.body.phone;
    const password = hashPass;
  
    
     
    
      const AdminPush = new Admin({
        
        full_name,
        phone,
        password
  
       
      });
    
     AdminPush
        .save()
        .then(() => res.json("Admin successfully added"))
        .catch((err) =>  res.status(400).json("Error :" + err));
       
    })

    authData
}
     })
});

const login = (req, res, next) => {
    var phone = req.body.phone;
    var password = req.body.password;
 
    Admin.findOne({phone:phone})
    .then(admin =>{
        if(admin){
            bcrypt.compare(password, admin.password, function(err, result){
                if(err) {
                    res.json({
                        error: err
                    })
                }
                if(result){
                    let token = jwt.sign({phone:phone}, 'hrkey') 
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
                message: 'No Admin found !'
            }) 
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
        registeradmin,
        login,
        verifyt
    };