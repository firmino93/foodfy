const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
 
server.use(express.static("public"))  
 
server.set("view engine", "njk")  

nunjucks.configure("views", {     
    express: server,  
    noCache: true,
    autoescape: false
})

server.get("/", function (req, res) {
    return res.render("index")
})

server.get("/about", function (req, res) {
    return res.render("about")
})

server.get("/recipes", function (req, res) {
    return res.render("recipes")
})

server.listen(3333, function () {
    console.log("server is running")
})