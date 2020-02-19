const Sequelize = require("sequelize");

const db = require("../config/db");

module.exports = db.sequelize.define("pelicula", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: {
        type: Sequelize.STRING
    },
    resumen: {
        type: Sequelize.STRING
    },
    categoria: {
        type: Sequelize.STRING
    },
    valorBoleto: {
        type: Sequelize.STRING
    },
    imagen: {
        type: Sequelize.STRING
    },
    estado: {
        type: Sequelize.BOOLEAN
    }
});