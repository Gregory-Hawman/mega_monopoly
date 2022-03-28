const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const usersRouter = require('../routers/usersRouter');
const authRouter = require('../routers/authRouter');
const { authenticate } = require('./middleware');


const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/users', authenticate, usersRouter);
server.use('/api/auth', authRouter);

server.get("/", (req, res) => {
    res.json({ api: "server up" });
});
  
module.exports = server;