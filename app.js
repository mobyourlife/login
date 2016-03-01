'use strict'

const koa = require('koa')
const logger = require('koa-logger')
const serve = require('koa-static')
const handlebars = require('koa-hbs')
// const stylus = require('koa-stylus')
const stylus = require('stylus')

var app = koa()

app.use(logger())

app.use(handlebars.middleware({
  viewPath: __dirname + '/views'
}))

// app.use(stylus('./public'))

app.use(require('koa-stylus')({
  src: './styles',
  dest: './public/styles',
  compile: function (str, path) {
    return stylus(str)
      .set('filename', path)
      .set('compress', true)
      .set('include css', true)
  }
}))

app.use(serve('./public'))

app.use(function *() {
  yield this.render('index')
})

app.listen(process.env.PORT || 3000)
