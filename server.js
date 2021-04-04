const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes')
const methodoverride = require('method-override')

const app = express()
app.use(express.urlencoded({extended: true }))
app.use(express.static('public'))
app.use(methodoverride('_method'))
app.use(routes)

app.set('view engine', "njk")

nunjucks.configure('views', {
  express: app,
  noCache: true,
  autoescape: false
})

app.listen(3000, ()=>{
  console.log('running')
})