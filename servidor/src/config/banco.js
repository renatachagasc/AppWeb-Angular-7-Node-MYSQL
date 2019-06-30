const sequilize = require('sequelize');

const sequelizeconexion = new sequilize("dbpdv", "renata","renatachagasc_123", {
    host : "localhost",
    dialect : "mysql",
    port : 3306,
    operatorsAliases: false
});

module.exports = sequelizeconexion;