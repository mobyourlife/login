'use strict'

const glob = require('glob')
const path = require('path')

const express = require('express')
var router = express.Router()

router.use('/', require('./login'))

module.exports = router
