exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('games_economies').truncate()
        .then(function () {
        // Inserts seed entries
            return knex('games_economies').insert([
                {
                    id: 1,
                    world_1_ratio: 1,
                    world_2_ratio: 6,
                    world_3_ratio: 3,
                    world_4_ratio: 12,
                    games_id: 1
                }
            ]);
        });
};