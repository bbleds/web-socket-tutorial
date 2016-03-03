"use strict";
// -------------- Dependencies
//--- modules
// Init naitive node server
const server = require("http").createServer();
// pass server into socketio
const io = require("socket.io")(server);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
