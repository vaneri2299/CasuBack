const express = require("express");
const bodyParser = require("body-parser");
const config = require("./config");
const cors = require("cors");
const db = require("./db");

const router = require("./network/routes");

db(config.dbUrl);


const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

router(app);

app.listen(config.port);
app.use('/assets', express.static('./assets'));
console.log("Escuchando");
