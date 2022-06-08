const express = require('express')
const app = express()
const clientRoutes = require('./src/clientRoutes')
require('dotenv/config')

app.use(
  express.urlencoded({
    extended: true,
  }),
)
app.use(express.json())

app.use('/clients', clientRoutes);

try {
  app.listen(9090, async () => console.log('Rodando em http://localhost:9090'))
} catch (err) {
  console.log(err)
}
