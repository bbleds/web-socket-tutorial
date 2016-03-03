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
// postgres connection
const pg = require('pg').native;
const POSTGRES_URL = process.env.POSTGRES_URL || 'postgres://localhost:5432/nodechat';

const db = new pg.Client(POSTGRES_URL);

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/chats', (req, res) => {
  db.query('SELECT * FROM chats', (err, result) => {
    if (err) throw err;

    res.send(result.rows);
  });
});


server.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});

io.on('connection', socket => {
  console.log('socket connected');
  // when message is sent
  socket.on('send chat', (msg) => {
    console.log(msg);
    // emit the event to all listeners
    socket.broadcast.emit('received chat', msg);
  });
});
