const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://ExtraSuperUser:Dausganteng12@localhost:27017/latihan?authSource=admin",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  // console.log("Server databae connect");
});
