const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../vars');
const Players = require('../models/playersModels');

const secret = jwtSecret;

const checkUser = (req, res, next) => {
    const token = req.headers.authorization;
    if (token) {
        jwt.verify(token, secret, async (error, decodedToken) => {
            if (error) {
                console.log(error, error.message);
                res.locals.player = null;
                next();
            } else {
                console.log('DECODED === ', decodedToken);
                let player = await Players.findPlayerById(decodedToken.subject);
                res.locals.player = player;
                console.log('LOCALS', res.locals)
                next();
            }
        })
    } else {
        res.locals.player = null;
        next();
    }
}

module.exports = checkUser;
