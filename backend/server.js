const express = require('express');
const app = express();
const mongoose = require('mongoose');
var cors = require('cors');
var bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');


const port = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

mongoose.connect("mongodb://localhost:27017/dbMillion", {
  useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
  console.log("Successfully connected to the database");    
}).catch(err => {
  console.log('Could not connect to the database. Exiting now...', err);
  process.exit();
});


const adminRoute = require('./routes/admin');
const participantRoute = require('./routes/participant');
const g_memebrsRoute = require('./routes/g_memebrs');
const questionRoute = require('./routes/question');
const questiontknRoute = require('./routes/questiontoken');
const roundRoute = require('./routes/round');

app.use('/Admin' ,adminRoute);
app.use('/Participant' ,participantRoute);
app.use('/G_memebrs' ,g_memebrsRoute);
app.use('/Question' ,questionRoute);
app.use('/Questiontkn' ,questiontknRoute);
app.use('/round' ,roundRoute);

// app.post('/posts', verifyToken, (req, res) => {
//    jwt.verify(req.token,'secretkey', (err, authData) => {
//        if(err) {
//            res.sendStatus(403);
//        } else {
//         res.json({
//             message: 'post Created ...',
//             authData
//         });
//        }

//    });

    
   
// });

// app.post('/login',(req, res) => {
      
//     const admin= {
//         id: 1,
//         phone : 0600112233,
//         password: 0000



//     }

//      jwt.sign({admin},'secretkey', (err,token) => {
//         res.json({
//             token: token
//         });
//      });  
// });

//  function verifyToken(req, res, next) {

//     const breareHeader = req.headers['authorization'];

//     if(typeof breareHeader !== 'undefined'){
//         const bearer = breareHeader.split(' ');
//         const bearerToken = bearer[1]; 
//         req.token = bearerToken;

//         next();

//     } else {
//         res.sendStatus(403);
//     }
//  }

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })