const express = require('express')
const debug = require('debug')
const app = express()
const serveStatic = require('serve-static')
const path = require('path')
const apiRouter = require('./routes.js')
const cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv').config()

const pino = require('express-pino-logger')

// APIs are on path /api/
app.use(cors())
app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(pino())
app.use('/api/', apiRouter)


module.exports = app;
