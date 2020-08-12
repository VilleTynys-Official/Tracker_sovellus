//tää varmistaa et JWT on kunnossa

const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = mongoose.model('User');


//jos JWT kunnossa niin menee next
module.exports = (req, res, next) => {
    const { authorization } = req.headers;
    // authorization === 'Bearer lsdkfj234aklsdjgkljdfalkjgdfl

    if(!authorization) {
        return res.status(401).send({ error: 'you must be logged in.'});
    }

    const token = authorization.replace('Bearer ', ''); //katenoidaan Bearer pois.. tarkkana!!!!

    //validoidaan JWT ja määrätään toiminto joka suoritetaan jos ei err.
    jwt.verify(token, 'MY_SECRET_KEY', async (err, payload) => {
        if (err){
            return res.status(401).send({ error: 'You must be logged in.'});
        }

        const {userId} = payload;

        const user = await User.findById(userId);   //etsi mongoDB:stä User tietokannasta userId
        req.user = user;    //annetaan muillekin request handlereille kyseinen user
        next(); //voidaan suorittaa seuraava middleware..





    });
    
};

