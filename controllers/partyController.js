var Party = require('../models/party');
const { body,validationResult } = require('express-validator');
const { sanitizeBody } = require('express-validator');
var ObjectId = require('mongodb').ObjectId;

// Display list of all parties.
exports.party_list = function(req, res) {
    res.send('NOT IMPLEMENTED: party list');
};

// handle get on specific party.
exports.party_detail_get = function(req, res) {
    try{
        var id = req.params.partyId;
        var o_id = new ObjectId(id);
        Party.findOne({_id : o_id}, function(err, party){
            if(err) res.status(500).send(err);
            res.status(200).send({party});
        })
    }
    catch (error){
        res.status(400).send(error);
    }
};

// Handle Party create on POST.
exports.party_create_post = function(req, res) {

    try {
        const party = new Party({
            name: req.body.name,
            startTime: Date.now(),
            isActive: true,
            hostName: req.body.hostName
        }).save((err, response) =>{
            if(err) res.status(400).send(err)
            res.status(200).send(response)
        })
    }
    catch(err){
        console.log("errrr");
        res.status(400).send(err);
    }
};

exports.party_update_post = function(req, res) {
    try{
        Party.findOne({'id': req.body.id}, function(err, party){
            if(!party) res.json({message: 'Party not found'})
            res.json({message: 'Party here'})
            // Insert track into playlist queue
        })
    }
    catch (err){
        res.status(400).send(error)
    }
}
