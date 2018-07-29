const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
const app = express();
var server = http.createServer(app);
var io =socketIO(server);

app.use(express.static(publicPath));

// app.get('/', (req, res) => {
//   res.send('Hello world');
// })
io.on('connection', (socket) => {
  console.log('New user connected');

  socket.emit('newMessage', {
    from: 'mike@example.com',
    text: 'Hey, Jo',
    createdAt: Date.now()
  });

  socket.on('createMessage', (newMessage) => {
    console.log('Create message ', newMessage);
  })

  socket.on('disconnect', () => {
    console.log('User was disconnected');
  })
});

io.on('disconnection', (socket) => {
  console.log('New user connected');
});

server.listen(port, () => {
  console.log(`Server is up on ${port}`);
});