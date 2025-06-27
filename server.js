const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

let counter = 0;

app.use(express.static('public'));

io.on('connection', (socket) => {
  socket.emit('update', counter);

  socket.on('increment', () => {
    counter++;
    io.emit('update', counter);
  });
});

server.listen(3000, () => {
  console.log('Server running on http://<your-local-ip>:3000');
});
