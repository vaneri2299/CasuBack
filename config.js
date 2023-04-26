require('dotenv').config();
const config = {
  dbUrl:
    "mongodb+srv://user:1234@cluster0.njf2een.mongodb.net/Casu?retryWrites=true&w=majority",
  port: process.env.PORT || 8080,
};

console.log("gfdfsg",process.env.PORT)
module.exports = config;
