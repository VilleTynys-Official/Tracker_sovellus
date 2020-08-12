const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

//kerrotaan userin rakenne mongooselle.
//mongoose tekee myös suoraan collectionin MongoDB:hen.
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password:{
        type: String,
        required: true
    }
});



//suolaus, huom. function() tekee sen et ei käytetä tämän tiedoston this vaan userScheman this.
userSchema.pre('save', function(next) {
    const user = this;
    if (!user.isModified('password')){ //jos user ei ole muuttanut salasanaa, älä suolaa
        return(next);
    }

    //generoidaan suola ja sekoitetaan se hashiin
    bcrypt.genSalt(10, (err,salt) => {  //generoidaan suola
        if (err) {             
            return next(err);
        }

        bcrypt.hash(user.password, salt, (err,hash) =>{ 
            if (err){    
                return next(err);
            }
                
        user.password = hash;
        next();
        });
    });
});
//salasanojen vertailu.
//jälleen käytetään function() koska halutaan userScheman  "this"
userSchema.methods.comparePassword = function(candidatePassword){
    const user = this;

    return new Promise((resolve, reject) => {  //promise on eräänlainen async funktio?
        bcrypt.compare(candidatePassword, user.password, (err, isMatch) => {
            if (err){
                return reject(err);
            }

            if (!isMatch){
                return reject(false);
            };

            resolve(true);

        });
    });
}


//yhdistetään mongooseen User schema
mongoose.model('User', userSchema);
