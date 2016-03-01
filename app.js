'use strict'

const express = require('express')
const handlebars = require('express-handlebars')

var app = express()
var routes = require('./controllers')

app.engine('hbs', handlebars({
  defaultLayout: 'master',
  extname: '.hbs'
}))
app.set('view engine', 'hbs')

app.use(express.static(`${__dirname}/public`))
app.use(routes)

app.listen(process.env.PORT || 3000)
