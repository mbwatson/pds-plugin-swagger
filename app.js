'use strict';

var SwaggerExpress = require('swagger-express-mw');
var app = require('express')();
module.exports = app; // for testing

var config = {
  appRoot: __dirname // required config
};

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  // install middleware
  swaggerExpress.register(app);

  var port = process.env.PORT || 10010;
  app.listen(port);

  const greeting = `
  Try one of the following routes:\n
  [Hello, World] ....... curl http://localhost:${ port }/hello?name=Kimberly
  [Config] ............. curl http://localhost:${ port }/config
  [Guidance] ........... curl http://localhost:${ port }/guidance
  [Endpoint Details] ... curl http://localhost:${ port }/swagger
`

  if (swaggerExpress.runner.swagger.paths['/hello']) {
    console.log(greeting);
  }
});
