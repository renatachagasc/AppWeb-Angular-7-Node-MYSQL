const sequelize = require('sequelize');
const conSequelize = require('../config/banco');


const Empresa = conSequelize.define('empresa',{
    id: {type: sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    nome: {type: sequelize.STRING(255), allowNull: false, validate:{
        len: [2,255]
    }},
    razao: {type: sequelize.STRING(255), validate:{
        len: [2,255]
    }},
    webSite: {type: sequelize.STRING(255), validate:{
        len:[2,255]
    }},
    docs: {type: sequelize.STRING(255), validate:{
        len:[2,255]
    }},
},{tableName: 'empresa'});

Empresa.hasMany(require("./produto")); 

const Fornecedor = require("./fornecedor");
Empresa.belongsToMany(Fornecedor, {through: 'EmpresaFornecedor'});
Fornecedor.belongsToMany(Empresa, {through: 'EmpresaFornecedor'});


module.exports = Empresa;