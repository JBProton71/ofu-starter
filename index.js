import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import { TRAITS, BOOSTS } from '../data/traitBoostGenerator.js';

const app = express();
const server = http.createServer(app);
const io = new Server(server);
const PORT = process.env.PORT || 3000;

// Serve the UI folder
app.use(express.static('src/ui'));

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: 'src/ui' });
});

io.on('connection', socket => {
  console.log('Client connected');
  socket.emit('init', { traitsCount: TRAITS.length, boostsCount: BOOSTS.length });

  socket.on('playerChoice', choice => {
    // handle incoming choice (future feature)
  });
});

// Simple simulation loop
setInterval(() => {
  const event = { time: Date.now(), type: 'heartbeat' };
  io.emit('gameEvents', [event]);
}, 1000);

server.listen(PORT, () => {
  console.log(`OFU Engine listening on http://localhost:${PORT}`);
});
