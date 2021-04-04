const express = require('express')
const routes = express.Router()
const recipes = require('./controllers/recipes')
const admin = require('./controllers/admin')

routes.get('/', (req, res)=>{
  res.redirect('/home')
})
routes.get('/home', recipes.home)
routes.get('/sobre', recipes.sobre)
routes.get('/receitas', recipes.receitas)
routes.get('/receitas/:index', recipes.listreceita)

routes.get("/admin/recipes", admin.index);
routes.get("/admin/recipes/create", admin.create);
routes.get("/admin/recipes/:index", admin.show);
routes.get("/admin/recipes/:id/edit", admin.edit);

routes.post("/admin/recipes", admin.post);
routes.put("/admin/recipes", admin.put); 
routes.delete("/admin/recipes", admin.delete); 

module.exports = routes