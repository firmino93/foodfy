const express = require('express')
const nunjucks = require('nunjucks')
const data = require('./data') 

const server = express() 
 
server.use(express.static("public"))  
  
server.set("view engine", "njk")  

nunjucks.configure("views", {     
    express: server,  
    noCache: true,
    autoescape: false
})

server.get("/", function (req, res) {
    return res.render("index", {recipes: data})
})
 
server.get("/about", function (req, res) {  
    return res.render("about")
}) 

server.get("/recipes", function (req, res) {
    return res.render("recipes", {recipes: data})
})
 
server.get("/recipes/:index", function (req, res) {
    const recipes = data
    const recipeIndex = req.params.index

    return res.render("recipe", {recipe: recipes[recipeIndex]})
})

server.listen(3333, function () {
    console.log("server is running")
})