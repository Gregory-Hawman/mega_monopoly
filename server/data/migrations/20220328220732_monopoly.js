exports.up = function(knex) {
    return knex.schema
        .createTable('games', tbl => {
            tbl.increments('id'); // World ID
            tbl.integer('players_turn');
            tbl.timestamp('created_at').defaultTo(knex.fn.now());
            tbl.timestamp('updated_at').defaultTo(knex.fn.now());
        })

        .createTable('games_economies', tbl => {
            tbl.increments('id');
            tbl.integer('world_1_ratio');
            tbl.integer('world_2_ratio');
            tbl.integer('world_3_ratio');
            tbl.integer('world_4_ratio');
            tbl
                .integer("games_id")
                .references("id")
                .inTable("games")
                .unsigned()
                .unique()
                .notNullable()
                .onUpdate("CASCADE")
                .onDelete("RESTRICT");
            tbl.timestamp('created_at').defaultTo(knex.fn.now());
            tbl.timestamp('updated_at').defaultTo(knex.fn.now());
        })

        .createTable('worlds', tbl => {
            tbl.increments('id');
            tbl.string('worlds_name').unique();
            tbl.integer('worlds_order_number')
            tbl
                .integer("games_id")
                .references("id")
                .inTable("games")
                .unsigned()
                .notNullable()
                .onUpdate("CASCADE")
                .onDelete("RESTRICT");
            tbl.timestamp('created_at').defaultTo(knex.fn.now());
            tbl.timestamp('updated_at').defaultTo(knex.fn.now());
        })

        .createTable('worlds_banks', tbl => {
            tbl.increments('id');
            tbl.integer('houses');
            tbl.integer('hotels');
            tbl
                .integer("worlds_id")
                .references("id")
                .inTable("worlds")
                .unsigned()
                .notNullable()
                .onUpdate("CASCADE")
                .onDelete("RESTRICT");
            tbl.timestamp('created_at').defaultTo(knex.fn.now());
            tbl.timestamp('updated_at').defaultTo(knex.fn.now());
        })

        .createTable('players', tbl => {
            tbl.increments('id'); // User ID
            tbl.string('username', 255).notNullable().unique();
            tbl.string('email', 255).notNullable().unique();
            tbl.string('password', 255).notNullable();
            tbl.integer('players_order_number');
            tbl.integer('location', 160)
            tbl.timestamp('created_at').defaultTo(knex.fn.now());
            tbl.timestamp('updated_at').defaultTo(knex.fn.now());
        })

        .createTable('players_worlds_inventory', tbl => {
            tbl.increments('id');
            tbl.integer('worlds_money');
            tbl.integer('worlds_cards');
            tbl.boolean('worlds_in_jail');
            tbl
                .integer('players_id')
                .references('id')
                .inTable('players')
                .unsigned()
                .notNullable()
                .onUpdate('CASCADE')
                .onDelete('RESTRICT');
            tbl
                .integer('worlds_id')
                .references('id')
                .inTable('worlds')
                .unsigned()
                .notNullable()
                .onUpdate('CASCADE')
                .onDelete('RESTRICT');
            tbl.timestamp('created_at').defaultTo(knex.fn.now());
            tbl.timestamp('updated_at').defaultTo(knex.fn.now());
        })

        .createTable('players_worlds_properties', tbl => {
            tbl.increments('id');
            tbl.string('set');
            tbl.string('name');
            tbl.integer('houses');
            tbl.boolean('hotel');
            tbl.boolean('mortgaged');
            tbl
                .integer('players_id')
                .references('id')
                .inTable('players')
                .unsigned()
                .notNullable()
                .onUpdate('CASCADE')
                .onDelete('RESTRICT');
            tbl
                .integer('worlds_id')
                .references('id')
                .inTable('worlds')
                .unsigned()
                .notNullable()
                .onUpdate('CASCADE')
                .onDelete('RESTRICT');
        })
    };

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists("games")
        .dropTableIfExists("games_economies")
        .dropTableIfExists("worlds")
        .dropTableIfExists("worlds_banks")
        .dropTableIfExists('players')
        .dropTableIfExists('players_worlds_inventory')
        .dropTableIfExists('players_worlds_properties');
};
