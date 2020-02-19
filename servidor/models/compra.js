const Sequelize = require("sequelize");

const db = require("../config/db");
const persona = require("./persona")
const sala = require("./sala")

module.exports = db.sequelize.define('compra', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    numero_boletos: {
        type: Sequelize.INTEGER
    },
    idpersona: {
        type: Sequelize.INTEGER,
        references: {
            model: persona,
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
})