exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('games-players').truncate()
        .then(function () {
        // Inserts seed entries
            return knex('games-players').insert([
                {
                    id: 1,
                    games_id: 1,
                    players_id: 1
                },
                {
                    id: 2,
                    games_id: 1,
                    players_id: 2
                },
                {
                    id: 3,
                    games_id: 1,
                    players_id: 3
                },
                {
                    id: 4,
                    games_id: 1,
                    players_id: 4
                },
            ]);
        });
};