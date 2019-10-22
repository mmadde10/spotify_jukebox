var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var TrackSchema = new Schema({
  spotifyID: String,
  name: String,
  artist: String,
  spotifyUri: String,
  spotifyHref: String,
  spotifyUrl: String
});

var TrackModel = mongoose.model('TrackModel', TrackSchema );
module.exports = TrackModel;