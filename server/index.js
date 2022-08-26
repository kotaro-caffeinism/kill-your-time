require("dotenv").config();
const app = require("./app");
const db = require("./knex");
const Migrate = require("../migrations/001_users_table");

const PORT = process.env.PORT || 9000;

(async () => {
  try {
    console.log("Running migrations...");

    await Migrate.setTable();

    console.log("Starting express...");
    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}!`);
    });
  } catch (err) {
    console.error("Error starting app!", err);
    process.exit(-1);
  }
})();
