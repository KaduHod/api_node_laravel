const http = require('http')
const express = require('express')
const app = express()
const { getNomes } = require('./src/apis/axios')
const { arrDates } = require('./src/helpers/dates') 
const { query, insert, testConn } = require('./src/db/dbConnect')
const db = require('./src/config/db.js')
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
  console.log('aquii')
  let data = await db('clients')
  return res.send(data)
})

app.get('/teste-connection', async (req, res) => {
  let teste = testConn()
  res.send(teste)
})



app.get('/insertRandomClients', async(req, res) => {
  let nomes = await getNomes()
  let arrDatas = arrDates(nomes.length)

  let objQuery = nomes.reduce( (acc, curr, index) => {
    let data = arrDatas[index]
    let dia = data.getDate() < 10 ? '0' + data.getDate() : data.getDate()
    let mes = data.getMonth() < 10 ? '0' + data.getMonth() : data.getMonth()
    acc.push({
      nome : curr,
      nascimento : `${data.getFullYear()}/${mes}/${dia}`
    })
    return acc
  }, [])
  //res.send(objQuery)
  
  objQuery.forEach( async pessoa => {
    await insert(`Insert into api.clients (nome, nascimento) values ( '${pessoa.nome}', '${pessoa.nascimento}')`)
  });

  let allClients = await query('Select * from api.clients;') 

  res.send(objQuery)
})

try {
  app.listen(9090, async (req, res) => console.log('Rodando em http://localhost:9090'))
} catch (err) {
  console.log(err)
}

 
  

/* http.createServer((req, res) => {

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello World!');
    res.end();

  }).listen(9000);

 */
