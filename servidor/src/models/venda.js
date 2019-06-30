const sequelize = require('sequelize');
const conSequelize = require('../config/banco');
const Venda = conSequelize.define('venda',{
    id: {type: sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    cod: { type: Sequelize.INTEGER, allowNull: false},
    data: { type: Sequelize.INTEGER, allowNull: false},
    cliente: { type: Sequelize.STRING(255), allowNull: false, validate: {
        len: [2, 255]
    }},
    vendedor: { type: Sequelize.STRING(255), allowNull: false, validate: {
        len: [2, 255]
    }},
    total_pago: { type: Sequelize.FLOAT, allowNull: false},
    cod_interno: { type: Sequelize.INTEGER, allowNull: false},
    estoque: { type: Sequelize.INTEGER, allowNull: false},
    item: { type: Sequelize.INTEGER, allowNull: false},
    valor_unitario: { type: Sequelize.FLOAT, allowNull: false},
    sub_total: { type: Sequelize.FLOAT, allowNull: false},
    desconto: { type: Sequelize.FLOAT, allowNull: false},
    total: { type: Sequelize.FLOAT, allowNull: false},
    descricao: { type: Sequelize.STRING(255), allowNull: false, validate: {
        len: [2, 255]
    }},                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 

},{tableName: 'venda'});

Venda.hasMany(require("./ItemVenda"));

module.exports = Venda;
"id", "cod","data","cliente","vendedor","total_pago",
    "cod_interno","estoque","item","unid","valor_unit","sub_total","desconto","total",
    "descricao"