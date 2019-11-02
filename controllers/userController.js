var User = require('../models/user');
const { body,validationResult } = require('express-validator');
const { sanitizeBody } = require('express-validator');

var async = require('async');

exports.index = function(req, res){
    res.render('signin', {});
}

exports.sigin = function(req, res){
    res.render('siginin', {});
}

exports.user_list = function(req, res) {
    res.send('NOT IMPLEMENTED: User list');
};

// Display detail page for a specific User.
exports.user_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: User detail: ' + req.params.id);
};

// Display User create form on GET.
exports.user_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: User create GET');
};

// Handle User create on POST.
exports.user_create_post = function(req, res) {
    const user = new User ({
        email: req.body.email,
        password: req.body.password
    }).save((err, response)=>{
        if(err) res.status(400).send(err)
        res.status(200).send(response)
    });
};

exports.user_signin_post = async function(req, res) {
    console.log("signin req")
   try {
        User.findOne({'email': req.body.email}, function(err, user){
            if(!user) res.json({message: 'Login Failed, User not found'})

            user.comparePassword(req.body.password, function(err, isMatch){
                if(err) throw err;
                if(!isMatch) return res.status(400).json({
                    message: 'wrong password'
                });
                const token = user.generateAuthToken()
                res.send({ user, token })
            })
        })
    }
    catch (error) {
        res.status(400).send(error)
    }
}

exports.user_logout_post = async function(req, res){
     // Log user out of the application
     console.log("logout req")
     try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token != req.token
        })
        await req.user.save()
        res.send()
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.user_logout_all_post = async function(req, res){
      // Log user out of all devices
  try {
    req.user.tokens.splice(0, req.user.tokens.length)
    await req.user.save()
    res.send()
    } catch (error) {
        res.status(500).send(error)
    }
}