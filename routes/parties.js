var express = require('express');
var router = express.Router();
var party_controller = require('../controllers/partyController')
const auth = require('../middleware/auth');


router.post('/create', auth , party_controller.party_create_post);

router.post('/:partyId/insert', auth, party_controller.party_update_post);

router.get('/:partyId', auth, party_controller.party_detail_get);

module.exports = router;