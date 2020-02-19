const Sequelize = require("sequelize");

const db = require("../config/db");

module.exports = db.sequelize.define("horario", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    hora: {
        type: Sequelize.STRING
    }
});