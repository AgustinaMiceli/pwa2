//const knex = require('../db/conexion');
//const { default: knex } = require("knex");

const knex = require('knex')({
    client: 'mysql',
    connection: {
    host : '127.0.0.1',
    port : 3306,
    user : 'root',
    password : '01251519',
    database : 'fullstack'
    }
});

module.exports= knex;

knex.schema.hasTable('productos').then(function(exists) {
    if (!exists) {
    return knex.schema.createTable('users', function(t) {
        t.increments('id').primary();
        t.string('nombre', 100);
        t.string('descripción', 100);
        t.integer('stock', 20);
        t.integer('precio', 20);
    });
    }
});




