const db = require('../data/dbConfig,js');

module.exports = {
    addUser,
    findUser,
    findUserBy,
    findUserById,
    updateUser,
    deleteUser
}

function findUser() {
    return db('users').select('id', 'username', 'email', 'password');
};

function findUserBy(filter) {
    return db('users').where(filter);
};

async function addUser(user) {
    const [id] = await db('users').insert(user, 'id');
    return findUserById(id);
};

function findUserById(id) {
    return db('users').where({ id }).first();
};

function updateUser(id, newData) {
    return findUserById(id).update(newData);
};

function deleteUser(id) {
    return findUserById(id).del();
};