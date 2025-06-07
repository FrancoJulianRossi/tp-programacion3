const {DataTypes} = require('sequelize');
const sequelize = require('./../config/db.js');

const Turno = sequelize.define('Turno', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    fecha: {
        type: DataTypes.STRING,
        allowNull: false
    },
    estado: {
        type: DataTypes.ENUM('disponible', 'reservado'),
        allowNull: false,
    }
});

module.exports = Turno;