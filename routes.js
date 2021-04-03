const express = require('express')
const routes = express.Router()

const user = require('./controllers/user')
const recipes = require('./controllers/recipes')

routes.get('/', user.home) 
routes.get('/about', user.about)
routes.get('/recipes', user.recipes)
routes.get('/recipes/:index', user.recipesIndex)

routes.get('/admin/recipes', recipes.index)
routes.get('/admin/recipes/create', recipes.create)

module.exports = routes