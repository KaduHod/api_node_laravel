const express = require('express');
const routes = express.Router();
const clientsController = require('./controllers/clientsController')

routes.get('clients/fill-db', clientsController.createRandomClientsAndInsertIntoDb)

routes.get('clients/clear-clients', clientsController.clearTableClients)

//routes.get('/healthcheck', (_req, res) => res.status(204).send());

module.exports = routes;