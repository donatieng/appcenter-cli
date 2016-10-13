/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the Place class.
 * @constructor
 * The place code and the count
 *
 * @member {string} [code] the place code
 * 
 * @member {number} [count] the count of the this place
 * 
 * @member {number} [previousCount] the count of previous time range of the
 * place
 * 
 */
function Place() {
}

/**
 * Defines the metadata of Place
 *
 * @returns {object} metadata of Place
 *
 */
Place.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'Place',
    type: {
      name: 'Composite',
      className: 'Place',
      modelProperties: {
        code: {
          required: false,
          serializedName: 'code',
          type: {
            name: 'String'
          }
        },
        count: {
          required: false,
          serializedName: 'count',
          type: {
            name: 'Number'
          }
        },
        previousCount: {
          required: false,
          serializedName: 'previousCount',
          type: {
            name: 'Number'
          }
        }
      }
    }
  };
};

module.exports = Place;