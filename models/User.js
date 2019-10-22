const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
let SALT = 10;

//Define a schema
var Schema = mongoose.Schema;

var userSchema = new Schema({
    email:{
        type: String,
        required: true,
        unique: 1,
        trim: true
    },
    password:{
        type: String,
        required: true,
        minlength: 6
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
});

userSchema.pre('save', function(next){
    var user = this;

    if(user.isModified('password')){
        bcrypt.genSalt(SALT, function(err, salt){
            if(err) return next(err);

            bcrypt.hash(user.password, salt, function(err, hash){
                if(err) return next(err);
                user.password = hash;
                next();
            })
        })
    } else {
        next();
    }
})

userSchema.methods.generateAuthToken = async function() {
    // Generate an auth token for the user
    const user = this
    const token = jwt.sign({_id: user._id}, process.env.JWT_KEY);
    user.tokens = user.tokens.concat({token});
    await user.save();
    return token;
}

userSchema.methods.comparePassword = function(caniddatePassword, checkpassword){
    bcrypt.compare(caniddatePassword, this.password, function(err, isMatch){
        if(err) return checkpassword(err)
        checkpassword(null, isMatch)
    })
}

module.exports = mongoose.model('userModel', userSchema);