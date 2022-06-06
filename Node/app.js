const http = require('http')
const express = require('express')
const app = express()
const db = require('./src/db/dbConnect')
require('dotenv/config') 

    /**
     * Forma de ler JSON
     * middlewares
     */
    app.use(
        express.urlencoded({
            extended:true,
        }),
    ) 
    app.use(express.json())



app.get('/', async (req, res) => {
  let query = await db.query('Select * from clients')  
})


app.listen(9090, async (req, res) => {
  try {
    
    console.log('Rodando em http://localhost:9090')
  } catch (error) {
    console.log(error)
  }
  
})

/* http.createServer((req, res) => {

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello World!');
    res.end();

  }).listen(9000);

 */
