var track = require('../models/Track');
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

exports.track_search_post = function(req, res){
    spotify.searchTracks(req.body.searchQuery, { limit : req.body.limit, offset : 2 }).then(
        function(data) {
            var track = create_track_json_helper(data.body);
            res.status(200).send(track);
        },
        function(err) {
            console.log("errr\n", err);
            res.status(400).send(err);
        }
    )
}

//WIP: im going to fix this up, i just needed to get the spotifi api to work for now
create_track_json_helper = function(data){
    try{
        var items = data["tracks"]['items'];
        var itemsList = [];
        for (i = 0; i < items.length; i++){
            var trackObject = {"Track":
                                {"id":items[i]['id'], 
                                "name": items[i]['name'], 
                                "artist": items[i]['artists'][0]['name'], 
                                "href": items[i]['href'],
                                "albumName": items[i]['album']['name'],
                                "albumImage": items[i]['album']['images'][0]['url']}}
            itemsList.push(trackObject);
        }
        return itemsList;
    }
    catch(err){
        console.log("errror")
    }
}