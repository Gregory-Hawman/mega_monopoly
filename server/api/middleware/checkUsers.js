const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../vars');
const Players = require('../models/playersModels');

const secret = jwtSecret;

const checkUser = (req, res, next) => {
    const token = req.headers.authorization;

    if (token) {
        jwt.verify(token, secret, (error, decodedToken) => {
            if (error) {
                console.log(error, error.message);
                res.localStorage.user = null;
                next();
            } else {
                console.log(decodedToken);
                let player = await Players.findPlayerById(decodedToken.id);
                res.localStorage.user = user;
                next();
            }
        })
    } else {
        res.localStorage.user = null;
        next();
    }
}

module.exports = checkUser;
