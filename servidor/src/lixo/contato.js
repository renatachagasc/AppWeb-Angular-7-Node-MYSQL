/*const sequelize = require('sequelize');
//const conSequelize = require('../../config/banco');


const Contato = conSequelize.define('contato',{
    id: {type: sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    nome: {type: sequelize.STRING(255), allowNull: false, validate:{
        len: [2,255]
    }},
    posicao: {type: sequelize.STRING(255), allowNull: false, validate:{
        len: [2,255]
    }},
    empresa: {type: sequelize.STRING(255), allowNull: false, validate:{
        len:[2,255]
    }},
    email: {type: sequelize.STRING(255), validate:{
        len:[2,255]
    }},
    telefone: {type: sequelize.INTEGER, allowNull: false},
    categoria: {type: sequelize.STRING(255), validate:{
        len:[2,255]
    }},
},{tableName: 'contato'});
module.exports = Contato;*/