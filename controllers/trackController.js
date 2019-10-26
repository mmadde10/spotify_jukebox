var Track = require('../models/track');
var fetch = require('node-fetch')

// Display list of all Aracks.
exports.track_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Track list');
};

// Display detail page for a specific Arack.
exports.track_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Track detail: ' + req.params.id);
};

// Handle Arack create on POST.
exports.track_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Track create POST');
};

// Display Arack delete form on GET.
exports.track_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Track delete GET');
};

// Handle Arack delete on POST.
exports.track_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Track delete POST');
};

// Display Arack update form on GET.
exports.track_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Track update GET');
};

// Handle Arack update on POST.
exports.track_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Track update POST');
};

exports.track_search_get = function(req, res){
    res.send('NOT IMPLEMENTED: Track Search GET');
}