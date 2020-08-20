;
module.exports = {
    development: {
        username: process.env.USER_DB || 'admin',
        password: process.env.PASS_DB || '12345678',
        database: process.env.NAME_DB || 'Huerto',
        host: process.env.HOST_DB || 'localhost',
        dialect: 'postgres',
        operatorsAliases: 0,
        define: { freezeTableName: true }
    },
    test: {
        username: 'root',
        password: null,
        database: 'database_test',
        host: '127.0.0.1',
        dialect: 'mysql',
        operatorsAliases: 0
    },
    production: {
        username: 'root',
        password: null,
        database: 'database_production',
        host: '127.0.0.1',
        dialect: 'mysql',
        operatorsAliases: 0
    }
}