exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('worlds').truncate()
        .then(function () {
        // Inserts seed entries
            return knex('worlds').insert([
                {
                    id: 1,
                    world_name: 'original',
                    world_order: null,
                    world_econ: null,
                    houses_left: 32,
                    hotels_left: 12,
                    games_id: null
                },
                {
                    id: 2,
                    world_name: 'lotr',
                    world_order: null,
                    world_econ: null,
                    houses_left: 32,
                    hotels_left: 12,
                    games_id: null
                },
                {
                    id: 3,
                    world_name: 'star_wars',
                    world_order: null,
                    world_econ: null,
                    houses_left: 32,
                    hotels_left: 12,
                    games_id: null
                },
                {
                    id: 4,
                    world_name: 'beatles',
                    world_order: null,
                    world_econ: null,
                    houses_left: 32,
                    hotels_left: 12,
                    games_id: null
                },
            ]);
        });
};