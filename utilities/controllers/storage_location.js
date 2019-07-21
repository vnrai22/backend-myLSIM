var dbSchema = require("../schema/storage_location");
var Storage_Location_Registation = dbSchema.Storage_Location_Registation;
var db = dbSchema.db;

function returnIdDetails(req, res) {
    Storage_Location_Registation.findAll().then(data => {
        res.send(data);
    });
}


function returnGeneratedId(req, res) {
  db.query(
    "SELECT nextval('storage_location_registration_storageLocationId_seq')"
  ).then(data => {
    res.send(data[0][0].nextval);
  });
}

function postData(req, res) {
    console.log(req.body);
    Storage_Location_Registation.create({
        storageLocationId: req.body.storageLocationId,
      site: req.body.site,
      building: req.body.building,
      floor: req.body.floor,
      room: req.body.room,
      type: req.body.type,
      identifier: req.body.identifier,
      createdBy: req.body.createdBy,
      updatedBy: req.body.updatedBy
    })
      .then(function(x) {
        res.json(x);
      })
      .catch(err => {
        res.json({
          status: "err"
        });
      });
  }

module.exports = {
    returnIdDetails: returnIdDetails,
    postData: postData,
    returnGeneratedId: returnGeneratedId
}