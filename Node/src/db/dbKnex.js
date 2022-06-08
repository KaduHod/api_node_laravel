module.exports = require('knex')({
    client: 'mysql2',
    connection: {
        server: 'localhost',
        user: 'root',
        password: 'mysqlpw',
        database: 'api',
        options:{
            port: 49153
        },
        port: 49153
    },
    pool: {
        min: 2,
        max: 10
      }
    
})