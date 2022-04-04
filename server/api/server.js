const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const { authenticate } = require('./middleware/auth_middleware');
const authRouter = require('./routers/authRouter');
const gamesRouter = require('./routers/gamesRouter');
const worldsRouter = require('./routers/worldsRouter');
const playersRouter = require('./routers/playersRouter');
const inventoriesRouter = require('./routers/inventoriesRouter');
const propertiesRouter = require('./routers/propertiesRouter');

const server = express();

// middleware
server.use(helmet());
server.use(express.json());
server.use(cors());

//routes
server.use('*', checkUser);
server.use('/api/auth', authRouter);
server.use('/api/games', authenticate, gamesRouter);
server.use('/api/worlds', authenticate, worldsRouter);
server.use('/api/players', authenticate, playersRouter);
server.use('/api/inventories', authenticate, inventoriesRouter);
server.use('/api/properties', authenticate, propertiesRouter);

server.get("/", (req, res) => {
    res.json({ api: "server up" });
});
  
server.use(function(req, res) {
    res.status(404).send('Page does not exist')
});

module.exports = server;