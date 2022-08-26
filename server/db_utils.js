const path = require("path");
const express = require("express");
const app = express();
const db = require("./knex");

class dbUtils {
  async addUser(nickname) {
    await db("users").insert({
      name: nickname,
    });
  }

  async deleteUser(nickname) {
    await db("users").where({ name: nickname }).del();
  }
}

module.exports = new dbUtils();
