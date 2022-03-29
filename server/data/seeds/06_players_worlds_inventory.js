exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('players_worlds_inventory').truncate()
        .then(function () {
        // Inserts seed entries
            return knex('players_worlds_inventory').insert([
                {
                    id: 1,
                    worlds_money: 1500,
                    worlds_cards: 0,
                    worlds_in_jail: false,
                    players_id: 1,
                    worlds_id: 1
                },
                {
                    id: 2,
                    worlds_money: 1500,
                    worlds_cards: 0,
                    worlds_in_jail: false,
                    players_id: 1,
                    worlds_id: 2
                },
                {
                    id: 3,
                    worlds_money: 1500,
                    worlds_cards: 0,
                    worlds_in_jail: false,
                    players_id: 1,
                    worlds_id: 3
                },
                {
                    id: 4,
                    worlds_money: 1500,
                    worlds_cards: 0,
                    worlds_in_jail: false,
                    players_id: 1,
                    worlds_id: 4
                },

                {
                    id: 5,
                    worlds_money: 1500,
                    worlds_cards: 0,
                    worlds_in_jail: false,
                    players_id: 2,
                    worlds_id: 1
                },
                {
                    id: 6,
                    worlds_money: 1500,
                    worlds_cards: 0,
                    worlds_in_jail: false,
                    players_id: 2,
                    worlds_id: 2
                },
                {
                    id: 7,
                    worlds_money: 1500,
                    worlds_cards: 0,
                    worlds_in_jail: false,
                    players_id: 2,
                    worlds_id: 3
                },
                {
                    id: 8,
                    worlds_money: 1500,
                    worlds_cards: 0,
                    worlds_in_jail: false,
                    players_id: 2,
                    worlds_id: 4
                },

                {
                    id: 9,
                    worlds_money: 1500,
                    worlds_cards: 0,
                    worlds_in_jail: false,
                    players_id: 3,
                    worlds_id: 1
                },
                {
                    id: 10,
                    worlds_money: 1500,
                    worlds_cards: 0,
                    worlds_in_jail: false,
                    players_id: 3,
                    worlds_id: 2
                },
                {
                    id: 11,
                    worlds_money: 1500,
                    worlds_cards: 0,
                    worlds_in_jail: false,
                    players_id: 3,
                    worlds_id: 3
                },
                {
                    id: 12,
                    worlds_money: 1500,
                    worlds_cards: 0,
                    worlds_in_jail: false,
                    players_id: 3,
                    worlds_id: 4
                },

                {
                    id: 13,
                    worlds_money: 1500,
                    worlds_cards: 0,
                    worlds_in_jail: false,
                    players_id: 4,
                    worlds_id: 1
                },
                {
                    id: 14,
                    worlds_money: 1500,
                    worlds_cards: 0,
                    worlds_in_jail: false,
                    players_id: 4,
                    worlds_id: 2
                },
                {
                    id: 15,
                    worlds_money: 1500,
                    worlds_cards: 0,
                    worlds_in_jail: false,
                    players_id: 4,
                    worlds_id: 3
                },
                {
                    id: 16,
                    worlds_money: 1500,
                    worlds_cards: 0,
                    worlds_in_jail: false,
                    players_id: 4,
                    worlds_id: 4
                },
            ]);
        });
};