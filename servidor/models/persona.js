const Sequelize = require("sequelize");

const db = require("../config/db");

module.exports = db.sequelize.define("persona", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: Sequelize.STRING
    },
    correo: {
        type: Sequelize.STRING
    },
    clave: {
        type: Sequelize.STRING
    }
});