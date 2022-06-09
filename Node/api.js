const express = require('express')
const app = express()
const clientRoutes = require('./src/routes/clientRoutes')
const apiRoutes = require('./src/routes/apiRoutes')
require('dotenv/config')

app.use(
  express.urlencoded({
    extended: true,
  })
)
app.use(express.json())

app.use('/', apiRoutes);
app.use('/clients', clientRoutes);

try {
  app.listen(9090, () => console.log('Rodando em http://localhost:9090'))
} catch (err) {
  console.log(err)
}
