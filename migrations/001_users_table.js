/*
exports.up = function (knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments("id", { primaryKey: true });
    table.string("name").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("users");
};
*/

const db = require("../knex");

class Migrate {
  setTable() {
    if (!db("users")) {
      return db.schema.createTable("users", (table) => {
        table.increments("id", { primaryKey: true });
        table.string("name").notNullable();
      });
    }
  }

  dropTable() {
    return db.schema.dropTable("users");
  }
}

module.exports = new Migrate();