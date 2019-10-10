const WebSocket = require("ws");
const WebSocketServer = WebSocket.Server;

const server = new WebSocketServer({
  port: 3141
});
console.log("Server is listening port 3141...");

const data = [820, 932, 901, 934, 1290, 1330, 1320];

server.on("connection", (socket) => {
  console.log("Connection established.");
  socket.send(JSON.stringify(data));
  setInterval(() => {
    data[0] += 10;
    socket.send(JSON.stringify(data));
  }, 1000);
});
