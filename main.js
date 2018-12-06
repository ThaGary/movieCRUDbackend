const express = require('express')
const app = express()
const port = process.env.PORT || 3002
const queries = require('./queries')
const config = require('./knexfile')
const bodyParser = require('body-parser')
var cors = require('cors')
 
app.use(cors())

app.use(bodyParser.json())

app.listen(port)
