const path = require("path");
const express = require("express");
const app = express();
const db = require("./knex");

app.use(express.static(path.resolve(__dirname, "/build")));
app.use(express.json());

module.exports = app;

app.get("/api/favorites/:user", async (req, res) => {
  try {
    const userName = req.params.user;
    const phrase = await db(`${userName}_items`).select();
    res.send(phrase);
  } catch (err) {
    console.error("Error loading locations!", err);
    res.sendStatus(500);
  }
});

app.post("/api/users", async (req, res) => {
  try {
    console.log("body", req.body);

    db("users")
      .where({ name: req.body.nickname })
      .then(async (res) => {
        console.log({ res });
        if (res.length === 0) {
          await db("users").insert({
            name: req.body.nickname,
          });

          const userName = req.body.nickname;
          return db.schema.createTable(`${userName}_items`, (table) => {
            table.increments("id", { primaryKey: true });
            table.text("phrase");
          });
        }
      });
  } catch (err) {
    console.error("Error loading locations!", err);
    res.sendStatus(500);
  }
});

app.post("/api/phrase", async (req, res) => {
  try {
    const userName = req.body.name;
    console.log({ userName });
    await db(`${userName}_items`).insert({
      phrase: req.body.phrase,
    });
  } catch (err) {
    console.error("Error loading locations!", err);
    res.sendStatus(500);
  }
});

app.delete("/api/delphrase", async (req, res) => {
  try {
    const phraseId = req.body.id;
    const userName = req.body.name;
    console.log("delete", { phraseId, userName });
    await db(`${userName}_items`).where({ id: phraseId }).del();
  } catch (err) {
    console.error("Error loading locations!", err);
    res.sendStatus(500);
  }
});
