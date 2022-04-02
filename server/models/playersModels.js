const db = require('../data/dbConfig,js');

module.exports = {
    addPlayer,
    findPlayers,
    findPlayerBy,
    findPlayerById,
    updatePlayer,
    deletePlayer
}

function findPlayers() {
    return db('players').select('id', 'username', 'email', 'password');
};

function findPlayerBy(email) {
    return db('players').where({ email }).first();
};

function findPlayerById(id) {
    return db('players').where({ id }).first();
};

async function addPlayer(player) {
    const [id] = await db('players').insert(player, 'id');
    return findPlayerById(id);
};

function updatePlayer(id, newData) {
    return findPlayerById(id).update(newData);
};

function deletePlayer(id) {
    return findPlayerById(id).del();
};