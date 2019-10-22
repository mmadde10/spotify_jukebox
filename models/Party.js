var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var partySchema = new Schema({
  _Id: Schema.Types.ObjectId,
  name: String,
  startTime: Date,
  endTime: Date,
  isActive: Boolean,
  host: {type: Map, of: String}
});

var partyModel = mongoose.model('partyModel', partySchema );
module.exports = partyModel;