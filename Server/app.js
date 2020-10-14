const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Port = 5000;
const { MONGOURI } = require("./keys.js");

mongoose.connect(MONGOURI, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on("connected", () => {
  console.log("connected to mongo");
});
mongoose.connection.on("error", (err) => {
  console.log("error occured :", err);
});

require("./models/user");
require("./models/post");

app.use(express.json());
app.use(require("./router/auth"));
app.use(require("./router/post"));

app.listen(Port, () => {
  console.log("server is running", Port);
});
