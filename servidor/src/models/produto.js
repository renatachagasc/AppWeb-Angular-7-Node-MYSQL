const sequelize = require('sequelize');
const conSequelize = require('../config/banco');


const Produto = conSequelize.define('produto',{
    id: {type: sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    nome: {type: sequelize.STRING(255), allowNull: false,validate:{
        len: [2, 255]
    }},
    status: {type: sequelize.BOOLEAN, allowNull: false},
    codigo: {type: sequelize.INTEGER, allowNull: false},
    preco: {type: sequelize.FLOAT, allowNull: false},
    qtdEstoque: {type: sequelize.INTEGER, allowNull: false},
    categoria: {type: sequelize.STRING, allowNull: false, validate:{
        len:[2,255]
    }},
},{tableName: 'produto'});

Produto.hasMany(require("./ItemVenda"));

module.exports = Produto;
