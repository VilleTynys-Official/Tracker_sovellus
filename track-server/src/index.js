require('./models/User');
require('./models/Track'); //nää varmistaa et toteutuu kerran.

const express = require('express');
const mongoose = require('mongoose');
const authRoutes =require('../routes/authRoutes');
const trackRoutes = require('../routes/trackRoutes');
const requireAuth = require('./middlewares/requireAuth'); //itse rakennettu JWT tarkastus




const app = express();

//parsitaan json ulos postista
app.use(express.json());
//otetaan reititin käyttöön
app.use(authRoutes);
//otetaan track seuranta käyttöön
app.use(trackRoutes);






const mongoUri = 'mongodb+srv://admin:Vitunsalasana666@cluster0-nlbxp.mongodb.net/test?retryWrites=true&w=majority'

//otetaan mongoose käyttöön
mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});


//testataan et mongoose on yhdistetty
mongoose.connection.on('connected', () =>{
    console.log('Connected to Mongo instance');
})

mongoose.connection.on('error', (err) => {
    console.error('mongoose error');
});


//aina kun joku tekee get pyynnön root routee: tarkistetaan  et JWT kunnossa, jos on, suoritetaan 
app.get('/', requireAuth, (req, res)=>{
    res.send(`Your email: ${req.user.email}`);
});


app.listen(3000,()=>{
    console.log('listening port 3000')
});
