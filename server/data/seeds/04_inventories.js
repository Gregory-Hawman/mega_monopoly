exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('inventories').truncate()
        .then(function () {
        // Inserts seed entries
            return knex('inventories').insert([
                {
                    id: 1,
                    money: 1500,
                    cards: 0,
                    in_jail: false,
                    players_id: 1,
                    worlds_id: 1
                },
                {
                    id: 2,
                    money: 1500,
                    cards: 0,
                    in_jail: false,
                    players_id: 1,
                    worlds_id: 2
                },
                {
                    id: 3,
                    money: 1500,
                    cards: 0,
                    in_jail: false,
                    players_id: 1,
                    worlds_id: 3
                },
                {
                    id: 4,
                    money: 1500,
                    cards: 0,
                    in_jail: false,
                    players_id: 1,
                    worlds_id: 4
                },

                {
                    id: 5,
                    money: 1500,
                    cards: 0,
                    in_jail: false,
                    players_id: 2,
                    worlds_id: 1
                },
                {
                    id: 6,
                    money: 1500,
                    cards: 0,
                    in_jail: false,
                    players_id: 2,
                    worlds_id: 2
                },
                {
                    id: 7,
                    money: 1500,
                    cards: 0,
                    in_jail: false,
                    players_id: 2,
                    worlds_id: 3
                },
                {
                    id: 8,
                    money: 1500,
                    cards: 0,
                    in_jail: false,
                    players_id: 2,
                    worlds_id: 4
                },

                {
                    id: 9,
                    money: 1500,
                    cards: 0,
                    in_jail: false,
                    players_id: 3,
                    worlds_id: 1
                },
                {
                    id: 10,
                    money: 1500,
                    cards: 0,
                    in_jail: false,
                    players_id: 3,
                    worlds_id: 2
                },
                {
                    id: 11,
                    money: 1500,
                    cards: 0,
                    in_jail: false,
                    players_id: 3,
                    worlds_id: 3
                },
                {
                    id: 12,
                    money: 1500,
                    cards: 0,
                    in_jail: false,
                    players_id: 3,
                    worlds_id: 4
                },

                {
                    id: 13,
                    money: 1500,
                    cards: 0,
                    in_jail: false,
                    players_id: 4,
                    worlds_id: 1
                },
                {
                    id: 14,
                    money: 1500,
                    cards: 0,
                    in_jail: false,
                    players_id: 4,
                    worlds_id: 2
                },
                {
                    id: 15,
                    money: 1500,
                    cards: 0,
                    in_jail: false,
                    players_id: 4,
                    worlds_id: 3
                },
                {
                    id: 16,
                    money: 1500,
                    cards: 0,
                    in_jail: false,
                    players_id: 4,
                    worlds_id: 4
                },
            ]);
        });
};