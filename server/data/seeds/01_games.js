exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('games').truncate()
        .then(function () {
        // Inserts seed entries
            return knex('games').insert([
                {
                    id: 1,
                    players_turn: 1,
                    econ_turns_left: 1
                }
            ]);
        });
};