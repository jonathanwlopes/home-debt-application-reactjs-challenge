const express = require("express");
const route = express.Router();
const homeController = require('./src/controllers/homeController')
const contactController = require('./src/controllers/contactController')

// Rotas da home
route.get("/users", homeController.userList);


// Rotas de contato
route.get('/contact', contactController.contact)


module.exports = route