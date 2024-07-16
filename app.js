const express = require('express')
const http = require('http')
const app = express()
const path = require('path')
const routes = require('./src/routes')
const cookieParser = require('cookie-parser')
const cors = require('cors');

app.set('port', process.env.PORT || 3000)

app.use(cookieParser())
   .use(cors())
   .use(express.json())
   .use(express.urlencoded({ extended: false }))
   .use(express.static('public'))
   .use(setHeaders.bind(this))
   .use(optionsMiddleware.bind(this))
   .use('/' ,routes)
   

   



async function setHeaders(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Methods", "POST, PUT, GET, DELETE, OPTIONS")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization, client_id"
  )

  next()
}

async function optionsMiddleware(req, res, next) {
  if (req.method !== "OPTIONS") {
    next()
    return
  }

  res.statusCode = 200
  res.end("OK")
}

async  function midleware404(req, res, next) {
  const err = new ServerError(
    404,
    "Not Found",
    "route_not_exists",
    `No router for Requested URL ${req.url} `
  )
  next(err)
}

async function finalMiddleware(err, req, res, next) {
  if (!err.status) {
    err.status = 500
  }

  if (!err.code) {
    err.code = "unexpected_error"
  }

  if (err.status === 500) {
    console.log(err)
  }

  res.status(err.status)

  const response = {
    success: false,
    message: err.message,
    code: err.code,
    data: err.data
  }

  res.json(response)
}


module.exports = app
app.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'))
})
