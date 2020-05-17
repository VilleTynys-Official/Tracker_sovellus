const express = require('express');
const mongoose = require('mongoose');
const requireAuth = require('../src/middlewares/requireAuth');
const Track = mongoose.model('Track');


/**
 * tämä hoitelee paikkatietojen reititystä
 */


const router =express.Router();
 router.use(requireAuth);

//selvitetään kuka käyttäjä on
//tehdään Track-mallilla kysely tietokantaan.
//sit lähetetään paikkatiedot tietokannasta käyttäjälle.
 router.get('/tracks', async (req, res) => {
    const tracks = await Track.find({ userId: req.user._id}); //tsekkaa käyttäjän trackit.
    
    res.send(tracks);
});

//oletetaan et post req lähettää nimen ja saman rakenteen kun mitä tietokanta mallissa on.(rakennetaan se niin)
router.post('/tracks', async(req, res) =>{
    const {name, locations} = req.body;
    if (!name || !locations){
        return ({ error: 'You must provide a name and locations'});
    }
    try{
        const track = new Track({name, locations, userId: req.user._id});
        await track.save(); //this could fail if user input is garbage
        res.send(track);
    } catch(err){
        res.status(422).send({ error: err.message});
    }

});


module.exports = router;