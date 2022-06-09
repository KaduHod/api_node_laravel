const mysql = require('mysql2/promise')

const connect = async () => {
    if(global.connection && global.connection.state !== 'disconnect') return global.connection

    const connection = await mysql.createConnection(`mysql://root:mysqlpw@localhost:49153/api`)

    global.connection = connection

    return connection
}
 

const testConn = async () => {
    try {
        await connect()
        
        return true
    } catch (err) {
        console.log('Problema na conexão', err)
        return {message : 'Problema na conexão', err}
    }
}
  
module.exports = { testConn }