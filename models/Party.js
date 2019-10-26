var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var partySchema = new Schema({
  _Id: Schema.Types.ObjectId,
  name: String,
  startTime: Date,
  isActive: Boolean,
  hostName: String
});

var partyModel = mongoose.model('partyModel', partySchema );
module.exports = partyModel;