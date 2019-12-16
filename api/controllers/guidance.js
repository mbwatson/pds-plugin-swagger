'use strict';

var util = require('util');

module.exports = {
  getGuidance: getGuidance
};

function getGuidance(req, res) {
  var response = util.format('Guidance!');

  // this sends back a JSON response which is a single string
  res.json(response);
}
