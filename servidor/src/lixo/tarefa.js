/*const sequelize = require('sequelize');
//const conSequelize = require('../../config/banco');


const Tarefa = conSequelize.define('tarefa',{
    id: {type: sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    descricao: {type: sequelize.STRING(255), allowNull: false,validate:{
        len: [2, 255]
    }},
    status: {type: sequelize.BOOLEAN, allowNull: false},
    tipoTarefa: {type: sequelize.STRING(255), allowNull: false, validate:{
        len:[2,255]
    }},
    vinculo: {type: sequelize.STRING(255), allowNull: false, validate:{
        len:[2,255]
    }},
    data: {type: sequelize.DATE, allowNull: false},
    
},{tableName: 'tarefa'});

module.exports = Tarefa;*/
