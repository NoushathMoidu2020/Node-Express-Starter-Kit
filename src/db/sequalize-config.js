const Sequelize = require("sequelize");
const path = require("path");
const appDbPath = process.env.DB || path.resolve("","DB.sqlite");
const appDb = new Sequelize({
    dialect: "sqlite",
    storage: appDbPath,
});
module.exports = appDb;
