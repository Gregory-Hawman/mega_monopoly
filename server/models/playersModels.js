const db = require('../data/dbConfig,js');

module.exports = {
    addPlayer,
    findPlayer,
    findPlayerBy,
    findPlayerById,
    updatePlayer,
    deletePlayer
}

function findPlayer() {
    return db('players').select('id', 'username', 'email', 'password');
};

function findPlayerBy(filter) {
    return db('players').where(filter);
};

async function addPlayer(player) {
    const [id] = await db('players').insert(player, 'id');
    return findPlayerById(id);
};

function findPlayerById(id) {
    return db('players').where({ id }).first();
};

function updatePlayer(id, newData) {
    return findPlayerById(id).update(newData);
};

function deletePlayer(id) {
    return findPlayerById(id).del();
};