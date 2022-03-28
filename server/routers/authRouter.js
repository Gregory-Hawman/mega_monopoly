const router = require('express').Router();
const bcrypt = require('bcryptjs');
const { rounds } = require('../api/vars')

const Users = require('../models/usersModels');
const { generateToken } = require('../api/middleware');

// === AUTH ROUTER === AUTH ROUTER === AUTH ROUTER === AUTH ROUTER === AUTH ROUTER === AUTH ROUTER === AUTH ROUTER === //

// AUTH API TEST
router.get('/', (req, res) => {
    res.json({
        api: "(.get api/auth) brings you here, use /api/auth/register or /api/auth/login to register a new user or login in a user."
    })
});

// REGISTER (SIGN UP NEW USER)
router.post('/register', (req, res) => {
    const user = req.body;
    const hash = bcrypt.hashSync(user.password, rounds);
    user.password = hash;

    Users.addUser(user)
    .then(newUser => {
        const token = generateToken(user);
        res.status(201).json({ 
            message: 'Successful Registration',
            newUser: newUser,
            token: token
        });
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({ message: 'Server Error occured during registering', error });
    });
});

// LOGIN 
router.post('/login', (req, res) => {
    let { username, email, password } = req.body;

    Users.findUserBy({ username })
         .then(([user]) => {
            if (user && bcrypt.compareSync(password, user.password)) {
                const token = generateToken(user);
                res.status(200).json({ 
                    message: `Welcome ${user.username}!`,
                    user: user,
                    token: token, 
                });
            } else {
                res.status(401).json({ 
                    message: 'Invalid username or password' 
                });
            }
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ 
                message: 'Server Error occurred during login',
                error: error.message 
            });
        });
});

module.exports = router