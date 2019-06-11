const sequelize = require('sequelize');
const conSequelize = require('../config/banco');
const Venda = conSequelize.define('venda',{
    id: {type: sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    quantidade: {type: sequelize.INTEGER, allowNull: false, },
    valor: {type: sequelize.DOUBLE, allowNull: false},

},{tableName: 'venda'});

Venda.hasMany(require("./ItemVenda"));

module.exports = Venda;