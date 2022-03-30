exports.up = function(knex) {
    return knex.schema
        .createTable('games', tbl => {
            tbl.increments('id');
            tbl.integer('players_turn');
            tbl.integer('econ_turns_left');
            tbl.timestamp('created_at').defaultTo(knex.fn.now());
            tbl.timestamp('updated_at').defaultTo(knex.fn.now());
        })

        .createTable('worlds', tbl => {
            tbl.increments('id');
            tbl.string('world_name').notNullable();
            tbl.integer('world_order');
            tbl.integer('world_econ');
            tbl.integer('houses_left').defaultTo(32);
            tbl.integer('hotels_left').defaultTo(12);
            tbl
                .integer("games_id")
                .references("id")
                .inTable("games")
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
            tbl.integer('players_order');
            tbl.integer('location', 160);
            tbl
                .integer('games_id')
                .references('id')
                .inTable('games')
                .onUpdate('CASCADE')
                .onDelete('RESTRICT');
            tbl.timestamp('created_at').defaultTo(knex.fn.now());
            tbl.timestamp('updated_at').defaultTo(knex.fn.now());
        })

        .createTable('inventories', tbl => {
            tbl.increments('id');
            tbl.integer('money').defaultTo(1500);
            tbl.integer('cards').defaultTo(0);
            tbl.boolean('in_jail').defaultTo(false);
            tbl
                .integer('players_id')
                .references('id')
                .inTable('players')
                .unsigned()
                .notNullable()
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            tbl
                .integer('worlds_id')
                .references('id')
                .inTable('worlds')
                .unsigned()
                .notNullable() // Should this be if worlds not yet decided
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            tbl.timestamp('created_at').defaultTo(knex.fn.now());
            tbl.timestamp('updated_at').defaultTo(knex.fn.now());
        })

        .createTable('properties', tbl => {
            tbl.increments('id');
            tbl.string('set').notNullable();
            tbl.string('name').notNullable();
            tbl.integer('houses').defaultTo(0);
            tbl.boolean('hotel').defaultTo(0);
            tbl.boolean('mortgaged').defaultTo(false);
            tbl
                .integer('players_id')
                .references('id')
                .inTable('players')
                .unsigned()
                .onUpdate('CASCADE')
                .onDelete('RESTRICT');
            tbl
                .integer('worlds_id')
                .references('id')
                .inTable('worlds')
                .unsigned()
                .notNullable()
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
        })
    };

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists("games")
        .dropTableIfExists("worlds")
        .dropTableIfExists('players')
        .dropTableIfExists('inventory')
        .dropTableIfExists('properties');
};
