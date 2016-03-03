"use strict";
// -------------- Dependencies
//--- modules
// express
const express = require("express");
const app = express();
// Init naitive node server
const server = require("http").createServer(app);
// pass server into socketio
const io = require("socket.io")(server);
// listen on process port or 3000
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

server.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
