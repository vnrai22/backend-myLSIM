var dbCon = require("../dbConnection");
var db = dbCon.connectToDatabase;
var Sequelize = dbCon.Sequelize;


const Storage_Location_Registration = db.define(
  "storage_location_registration",
  {
    storageLocationId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    site: {
      type: Sequelize.STRING(300),
      allowNull: false
    },
    building: {
      type: Sequelize.STRING(30),
      allowNull: false
    },
    floor: {
      type: Sequelize.STRING(300),
      allowNull: false
    },
    room: {
      type: Sequelize.STRING(1500),
      allowNull: true
    },
    type: {
        type: Sequelize.STRING(1500),
        allowNull: true
      },
      identifier: {
        type: Sequelize.STRING(1500),
        allowNull: true
      },
    createdBy: {
      type: Sequelize.STRING,
      allowNull: false
    },
    updatedBy: {
      type: Sequelize.STRING,
      allowNull: false
    },
    Delete_Flag: {
      type: Sequelize.STRING(10),
      allowNull: false,
      defaultValue: "A"
    }
  },
  {
    timestamps: true,
    underscored: false,
    freezeTableName: true
  }
);

Storage_Location_Registration.sync({force: false});

module.exports = {
  db: db,
  Storage_Location_Registration: Storage_Location_Registration
};