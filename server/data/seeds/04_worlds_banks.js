exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('worlds_banks').truncate()
        .then(function () {
        // Inserts seed entries
            return knex('worlds_banks').insert([
                {
                    id: 1,
                    houses: 32,
                    hotels: 12,
                    worlds_id: 1
                },
                {
                    id: 2,
                    houses: 32,
                    hotels: 12,
                    worlds_id: 2
                },
                {
                    id: 3,
                    houses: 32,
                    hotels: 12,
                    worlds_id: 3
                },
                {
                    id: 4,
                    houses: 32,
                    hotels: 12,
                    worlds_id: 4
                }
            ]); 
        });
};