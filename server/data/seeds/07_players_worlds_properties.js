exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('players_worlds_properties').truncate()
        .then(function () {
        // Inserts seed entries
            return knex('players_worlds_properties').insert([
                {
                    id: 1,
                    set: 'brown',
                    name: 'mediterranean ave',
                    houses: 0,
                    hotel: false,
                    mortgaged: false,
                    players_id: 1,
                    worlds_id: 1
                },
                {
                    id: 2,
                    set: 'red',
                    name: 'illinois ave',
                    houses: 0,
                    hotel: false,
                    mortgaged: false,
                    players_id: 2,
                    worlds_id: 1
                },
                {
                    id: 3,
                    set: 'railroad',
                    name: 'reading',
                    houses: 0,
                    hotel: false,
                    mortgaged: false,
                    players_id: 3,
                    worlds_id: 1
                },
                {
                    id: 4,
                    set: 'blue',
                    name: 'boardwalk',
                    houses: 0,
                    hotel: false,
                    mortgaged: false,
                    players_id: 4,
                    worlds_id: 1
                },
            ]);
        });
};