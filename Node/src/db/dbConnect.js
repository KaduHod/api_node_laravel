const mysql = require('mysql2/promise')

async function connect(){
    if(global.connection && global.connection.state !== 'disconnect') return global.connection

    const connection = await mysql.createConnection(`mysql://root:123456@localhost:3306/api`)

    global.connection = connection

    return connection
}


const query = async sql => {
    let conn = await connect()

    const [rows] = await conn.query(sql)
  
    return rows
}

const insert = async sql => {
    let conn = await connect()

    await conn.query(sql)
}
  
  
module.exports = { query, insert }