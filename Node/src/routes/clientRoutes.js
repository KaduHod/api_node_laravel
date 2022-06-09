const express = require('express');
const routes = express.Router();
const clientsController = require('../controllers/clientsController')

routes.get('/fill-database', clientsController.createRandomClientsAndInsertIntoDatabase)
routes.get('/clear-clients', clientsController.clearTableClients)
routes.get('/get-clients'  , clientsController.getClients)

module.exports = routes;