const db = require('../data/dbConfig,js');

module.exports = {
    addWorld,
    findWorlds,
    findWorldBy,
    findWorldById,
    updateWorld,
    deleteWorld
}

function findWorlds() {
    return db('world').select('id', 'created_at', 'updated_at')
};

function findWorldBy(filter) {
    return db('worlds').where(filter);
};

function findWorldById(id) {
    return db('worlds').where({id}).first();
};

async function addWorld(world) {
    const [id] = await db('worlds').insert(world, 'id');
    return findWorldById(id);
};

function updateWorld(id, update) {
    return findWorldById(id).update(update);
}

function deleteWorld(id) {
    return findWorldById(id).del();
};