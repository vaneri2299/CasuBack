require("dotenv").config();
const config = {
  dbUrl: process.env.DB,
  port: process.env.PORT || 8080,
};

console.log("gfdfsg", process.env.PORT);
module.exports = config;
