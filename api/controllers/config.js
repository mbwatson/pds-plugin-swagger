'use strict';

const util = require('util');

module.exports = {
  getConfig: getConfig
};

function getConfig(req, res) {
  const response = [
    {
      aggregator_plugin_id: '',
      data_provider_plugin_id: '',
      phenotype_mapping_plugin_id: '',
      default_units: [],
      model: [],
    }
  ]

  res.json(response);
}
