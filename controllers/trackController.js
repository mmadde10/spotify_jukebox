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

exports.track_search_post = function(req, res){
    spotify.searchTracks(req.body.searchQuery, { limit : 3, offset : 2 }).then(
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
        var item1 = data["tracks"]['items'][0];
        var item2 = data["tracks"]['items'][1];
        var item3 = data["tracks"]['items'][2];
        var trackObject = {"Track":
                                {"id":item1['id'], 
                                "name": item1['name'], 
                                "artist": item1['artists'][0]['name'], 
                                "href": item1['href'],
                                "albumName": item1['album']['name'],
                                "albumImage": item1['album']['images'][0]['url']}}
        
        var trackObject1 = {"Track":
                                {"id":item2['id'], 
                                "name": item2['name'], 
                                "artist": item2['artists'][0]['name'], 
                                "href": item2['href'],
                                "albumName": item2['album']['name'],
                                "albumImage": item2['album']['images'][0]['url']}}

        var trackObject2 = {"Track":
                                {"id":item3['id'], 
                                "name": item3['name'], 
                                "artist": item3['artists'][0]['name'], 
                                "href": item3['href'],
                                "albumName": item3['album']['name'],
                                "albumImage": item3['album']['images'][0]['url']}}                        
        console.log(trackObject);

        return [trackObject, trackObject1, trackObject2]
    }
    catch(err){
        console.log("errror")
    }
}