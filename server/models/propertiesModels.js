const db = require('../data/dbConfig,js');

module.exports = {
    addProperty,
    findProperties,
    findPropertyBy,
    findPropertyById,
    updateProperty,
    deleteProperty
}

function findProperties() {
    return db('game').select('id', 'set', 'name', 'houses', 'hotel', 'mortgaged', 'players_id', 'worlds_id')
};

function findPropertyBy(filter) {
    return db('properties').where(filter);
};

function findPropertyById(id) {
    return db('properties').where({id}).first();
};

async function addProperty(game) {
    const [id] = await db('properties').insert(game, 'id');
    return findPropertyById(id);
};

function updateProperty(id, update) {
    return findPropertyById(id).update(update);
}

function deleteProperty(id) {
    return findPropertyById(id).del();
};