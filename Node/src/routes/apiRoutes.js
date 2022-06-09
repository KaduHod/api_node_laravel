const express = require('express');
const routes = express.Router();
const apiController = require('../controllers/apiController')

routes.get('/', apiController.index)

module.exports = routes;