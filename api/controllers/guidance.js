'use strict';

const util = require('util');

module.exports = {
  getGuidance: getGuidance
};

function getGuidance(req, res) {
  const response = [
    {
      features: [
        {
          calculation: 'Description of how this feature is calculated',
          certitude: 0,
          clinical_feature_variable: 'LOINC:C0D3',
          description: 'Details how this feature is used',
          title: 'short-name',
          unit: 'units used, e.g., year, kg, cm',
          value: 0,
          warning: 'Note about model limitations',
        }
      ],
      guidance: [
        {
          description: 'Some property',
          title: 'Property A',
          unit: 'g',
          value: 'NaN',
        },
        {
          description: 'Some property',
          title: 'Property B',
          unit: 'm',
          value: 'NaN',
        },
      ]
    }
  ]

  res.json(response);
}
