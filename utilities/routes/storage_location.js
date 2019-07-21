var router = require("express").Router();
var storage_location = require("../controllers/storage_location");

router.get('/getiddetails', storage_location.returnIdDetails);
router.get('/generateid', storage_location.returnGeneratedId);
router.post('/ceatestoragelocation', storage_location.postData );

module.exports = router;
