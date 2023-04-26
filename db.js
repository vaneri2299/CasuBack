const db = require("mongoose");
db.Promise = global.Promise;

// "mongodb+srv://user:1234@cluster0.njf2een.mongodb.net/Casu?retryWrites=true&w=majority"
const connect = async (url) => {
  await db.connect(url, {
    useNewUrlParser: true,
  });
  console.log("db conectada");
};

module.exports = connect;
