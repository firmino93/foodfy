const express = require('express')
const routes = express.Router()

const user = require('./controllers/user')

routes.get('/', user.home) 
routes.get('/about', user.about)
routes.get('/recipes', user.recipes)
routes.get('/recipes/:index', user.recipesIndex)

module.exports = routes