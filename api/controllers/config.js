'use strict';

var util = require('util');

module.exports = {
  getConfig: getConfig
};

function getConfig(req, res) {
  var response = util.format({ message :'Config!' });

  // this sends back a JSON response which is a single string
  res.json(response);
}
