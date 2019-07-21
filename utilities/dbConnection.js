const Sequelize = require("sequelize");
var db;

function connectToDatabase() {
  if (!db) {
    db = new Sequelize("mylims", "postgres", "god", {
      host: "localhost",
      dialect: "postgres"
    });
        
    db.authenticate()
      .then(() => {
        console.log("Connection has been established successfully.");
      })
      .catch(err => {
        console.error(err);
      });
  }
  return db;
}

module.exports = {
  connectToDatabase: connectToDatabase(),
  Sequelize: Sequelize
};