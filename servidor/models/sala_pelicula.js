const Sequelize = require("sequelize");

const db = require("../config/db");

const pelicula = require("./pelicula")
const horario = require("./horario")
const sala = require("./sala")

module.exports = db.sequelize.define("sala_pelicula", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idpelicula: {
        type: Sequelize.INTEGER,
        references: {
            model: pelicula,
            key: 'id'
        }
    },
    idhorario: {
        type: Sequelize.INTEGER,
        references: {
            model: horario,
            key: 'id'
        }
    },
    idsala: {
        type: Sequelize.INTEGER,
        references: {
            model: sala,
            key: 'id'
        }
    }
});