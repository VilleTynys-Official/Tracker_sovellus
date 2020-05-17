const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = mongoose.model('User');//otetaan käyttöön User, joka on ladattu mongooseen User.js -tiedostossa.



//täl voidaan reitittää osoitteita
const router = express.Router();

//signup handler:
router.post('/signup', async (req, res) => {
    const {email, password} = req.body; //parsitaan bodystä ulos email ja password
    
    try{
    const user = new User({email, password}); //mongoosen User instanssi
    await user.save();  //mongoosen save operaatio tallentaa tiedot MongoDB:hen.
    
    
    const token = jwt.sign({ userId: user._id}, 'MY_SECRET_KEY');
    res.send({token});


    } catch(err) {
      return res.status(422).send(err.message);
        }
});

//signin handler:
router.post('/signin', async (req, res) => {
    const {email, password} = req.body;

    if (!email || !password){
        return res.status(422).send({ error: 'Must provide email and password'});
    }

    const user = await User.findOne({ email });
    if (!user){
        return res.status(422).send({ error: 'Invalid password or email'});
    }
    try{
        await user.comparePassword(password);
        const token = jwt.sign({ userId: user._id}, 'MY_SECRET_KEY')
        res.send({token});
    }catch (err) {
        return res.status(422).send({ error: 'Invalid password or email'});
    }

});


//exportataan router applikaatiolle
module.exports = router;