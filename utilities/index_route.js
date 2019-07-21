var router = require("express").Router();

var container_route = require("./routes/container");
var storage_location_route = require("./routes/storage_location");


router.get("/", function(req, res) {
  res.send("XLIMS Backend.");
});
router.use("/container", container_route);
router.use("/storage_location", storage_location_route);


module.exports = router;