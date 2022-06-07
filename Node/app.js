const http = require('http')
const express = require('express')
const app = express()
const { getNomes } = require('./src/apis/getNomes.js')
const { arrDates, formataDataParaInsertNaDb } = require('./src/helpers/dates') 
const { testConn } = require('./src/db/dbConnect')
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

app.get('/fillDB', async (req, res) => {
  
  /* let insert = await db('clients')
                     .insert({
                      nome:'Carlos Alberto Ribas Junior',
                      nascimento : '1998-10-12'
                     })

  console.log(insert)  */ 

 
  let nomes = await getNomes()
  let datas = arrDates(nomes.length)


  datas.forEach( data => {
    let dataFormatadaParaInsert = formataDataParaInsertNaDb(data)
    console.log(dataFormatadaParaInsert)
  })

  let clients = nomes.reduce((acc, curr, index) => {
    let client = {
      nome : curr.nome,
      nascimento : formataDataParaInsertNaDb(datas[index])
    }
    acc.push(client)

    return acc
  }, [])


  try {
    
    await db('clients').insert(clients)

    res.send (
      await db('clients')
    )
  } catch (error) {
    console.log(error)
  }

})

app.get('/testeApiNomes', async (req, res) => {
    
})

app.get('/teste-connection', async (req, res) => {
  let teste = testConn()
  res.send(teste)
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
