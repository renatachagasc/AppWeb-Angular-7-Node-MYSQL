const Sequelize = require('sequelize');
const sequelize = require('../config/banco');

const Vendedor = sequelize.define('vendedor',{
    id: { type : Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    nome: { type: Sequelize.STRING(255), allowNull: false, validate: {
        len: [2, 255]
    }},
},{tableName: 'vendedor'});

Vendedor.hasMany(require("./venda")); 

module.exports = Vendedor;