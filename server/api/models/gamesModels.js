const db = require('../../data/dbConfig,js');

module.exports = {
    addGame,
    findGames,
    findGameBy,
    findGameById,
    updateGame,
    deleteGame
}

function findGames() {
    return db('games').select('id', 'players_turn', 'econ_turns_left', 'created_at', 'updated_at')
};

function findGameBy(filter) {
    return db('games').where(filter);
};

function findGameById(id) {
    return db('games').where({id}).first();
};

async function addGame(game) {
    const [id] = await db('games').insert(game, 'id');
    return findGameById(id);
};

function updateGame(id, update) {
    return findGameById(id).update(update);
}

function deleteGame(id) {
    return findGameById(id).del();
};