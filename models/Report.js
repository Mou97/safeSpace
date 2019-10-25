const Sequelize = require("sequelize");
const db = require("../config/database");

const Categories = db.define("Categories", {
    report: {
        type: Sequelize.STRING,
        allowNull: false
    },

});

db.sync({ forced: true });

module.exports = Categories;
