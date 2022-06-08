const http = require('http')

const express = require('express')
const app = express()
const { testConn } = require('./src/db/dbConnect')
const { getNames, getSortedMixedNames } = require('./src/helpers/getNomes')
const { arrDates, formataDataParaInsertNaDb } = require('./src/helpers/dates')
const { shuffle } = require('./src/helpers/util')
const db = require('./src/db/dbKnex')
const routes = require('./src/routes')
require('dotenv/config')

/**
 * Forma de ler JSON
 * middlewares
 */
app.use(
  express.urlencoded({
    extended: true,
  }),
)
app.use(express.json())
//app.use(routes);

/**
 * Exemplo a se seguir
 */
app.get('/fill-db', clientsController.createRandomClientsAndInsertIntoDb)

app.get('/fillDB', async (req, res) => {

  let namesList = await getNames()
  let nomes = getSortedMixedNames(namesList)
  let datas = arrDates(nomes.length)

  let clients = nomes.reduce((acc, curr, index) => {
    let client = {
      nome: curr,
      nascimento: formataDataParaInsertNaDb(datas[index])
    }
    acc.push(client)

    return acc
  }, [])


  try {

    await db('clients').insert(shuffle(clients))

    res.send(
      await db('clients')
    )
  } catch (error) {
    console.log(error)
  }

})

app.get('/clear-clients', async (req, res) => {
  try {
    let query = await db('clients').del()
    res.send({ message: 'Clientes deletados!', query })
  } catch (error) {
    res.send({ message: 'Erro ao deletar clientes!', error })
  }
})

app.get('/getNomes', async (req, res) => {
  let nomes = await getNames()

  res.send(nomes)
})

app.get('/lista-grande-de-nomes', async (req, res) => {
  let nomes = await getNames()
  let listaGrande = getSortedMixedNames(nomes)

  console.log(listaGrande)
  res.send(listaGrande)
})

app.get('/teste-connection', async (req, res) => {
  let teste = testConn()
  res.send(teste)
})

app.get('/get-clientes', async (req, res) => {
  let clientes = await db('clients')
  console.log(clientes)
  res.send(clientes)
  return
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
