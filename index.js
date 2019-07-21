const express = require("express");
const port = process.env.PORT || 3003;
const app = express();
const bodyParser = require("body-parser");
var index_route = require("./utilities/index_route");

// var cors = require("cors");
//app.use(cors());

 app.use(bodyParser.json());
 app.use("/", index_route);

app.listen(port, () => console.log(`listening at ${port}`));