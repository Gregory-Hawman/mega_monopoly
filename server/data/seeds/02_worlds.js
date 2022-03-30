exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('worlds').truncate()
        .then(function () {
        // Inserts seed entries
            return knex('worlds').insert([
                {
                    id: 1,
                    worlds_name: 'original',
                    worlds_order_number: 1,
                    games_id: 1
                },
                {
                    id: 2,
                    worlds_name: 'lotr',
                    worlds_order_number: 2,
                    games_id: 1
                },
                {
                    id: 3,
                    worlds_name: 'star_wars',
                    worlds_order_number: 3,
                    games_id: 1
                },
                {
                    id: 4,
                    worlds_name: 'beatles',
                    worlds_order_number: 4,
                    games_id: 1
                },
            ]);
        });
};