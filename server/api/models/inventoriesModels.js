const db = require('../../data/dbConfig,js');

module.exports = {
    addInventory,
    findInventories,
    findInventoryBy,
    findInventoryById,
    updateInventory,
    deleteInventory
}

function findInventories() {
    return db('inventories').select('id', 'money', 'cards', 'in_jail', 'players_id', 'worlds_id')
};

function findInventoryBy(filter) {
    return db('inventories').where(filter);
};

function findInventoryById(id) {
    return db('inventories').where({id}).first();
};

async function addInventory(inventory) {
    const [id] = await db('inventories').insert(inventory, 'id');
    return findInventoryById(id);
};

function updateInventory(id, update) {
    return findInventoryById(id).update(update);
}

function deleteInventory(id) {
    return findInventoryById(id).del();
};