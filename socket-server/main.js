const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const app = express();
const httpServer = http.Server(app);
const io = socketIo(httpServer);

httpServer.listen(3000, () => {
  console.log("The host 3000 is listening ...");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  // console.log("socket: ", socket);
  console.log("socket-id: ", socket.id);
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("a user disconnect");
  });
});
