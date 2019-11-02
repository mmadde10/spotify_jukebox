var track = require('../models/track');
var fetch = require('node-fetch')
var spotify = require('../middleware/spotifyAPI');

// Display list of all Aracks.
exports.track_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Track list');
};

// Display detail page for a specific Arack.
exports.track_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Track detail: ' + req.params.id);
};

exports.track_detail_get = function(req, res){
    spotify.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE').then(
        function(data) {
            console.log('Artist albums', data.body);
        },
        function(err) {
            console.log(err);
        }
      );
}

exports.track_search_get = function(req, res){
    res.send('NOT IMPLEMENTED: Track Search GET');
}