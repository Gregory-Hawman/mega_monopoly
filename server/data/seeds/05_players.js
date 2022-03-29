const bcrypt = require('bcryptjs');
const { rounds } = require('../../api/vars')

const password_1 = bcrypt.hashSync('test123', rounds)
const password_2 = bcrypt.hashSync('test456', rounds)
const password_3 = bcrypt.hashSync('test789', rounds)
const password_4 = bcrypt.hashSync('test007', rounds)

exports.seed = function(knex) {
// Deletes ALL existing entries
return knex('players').truncate()
    .then(function () {
    // Inserts seed entries
        return knex('players').insert([
            { 
                id: 1, 
                username: 'Test123', 
                email: 'test123@email.com', 
                password: password_1,
                players_order_number: 1,
                location: 0
            },
            { 
                id: 2, 
                username: 'Test456', 
                email: 'test456@email.com', 
                password: password_2,
                players_order_number: 2,
                location: 0
            },
            { 
                id: 3, 
                username: 'Test789', 
                email: 'test789@email.com', 
                password: password_3,
                players_order_number: 3,
                location: 0
            },
            { 
                id: 4, 
                username: 'Test007', 
                email: 'test007@email.com', 
                password: password_4,
                players_order_number: 4, 
                location: 0
            }
        ]);
    });
};