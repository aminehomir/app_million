const express = require('express');
const app = express();
const mongoose = require('mongoose');
var cors = require('cors');
var bodyParser = require('body-parser');


const port = 8080;

app.use(express.json());
app.use(cors());

//Prise en charge des formulaires HTML
app.use(bodyParser.urlencoded({ extended: true }))

// Prise en charge du JSON
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
const giftsRoutes = require("./routes/gifts")
const roundRoute = require('./routes/round');
const winnerRoute = require('./routes/final_winner');

app.use('/Admin' ,adminRoute);
app.use('/Participant' ,participantRoute);
app.use('/G_memebrs' ,g_memebrsRoute);
app.use('/Question' ,questionRoute);
app.use('/Gifts' ,giftsRoutes);
app.use('/Finalwinner' ,winnerRoute);

app.use('/round' ,roundRoute);




  
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })