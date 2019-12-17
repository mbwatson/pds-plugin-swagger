'use strict'

const SwaggerExpress = require('swagger-express-mw')
const app = require('express')()

module.exports = app

var config = {
  appRoot: __dirname, // required
  port: 10010,
}

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err }

  // install middleware
  swaggerExpress.register(app)

  app.listen(config.port)

  const greeting = `
  Try one of the following routes:\n
  [Hello, World] ....... curl http://localhost:${ config.port }/hello?name=Kimberly
  [Config] ............. curl http://localhost:${ config.port }/config
  [Guidance] ........... curl http://localhost:${ config.port }/guidance
  [Endpoint Details] ... curl http://localhost:${ config.port }/swagger
`

  if (swaggerExpress.runner.swagger.paths['/hello']) {
    console.log(greeting)
  }
})
