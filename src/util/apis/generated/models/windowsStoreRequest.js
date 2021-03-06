/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Class representing a WindowsStoreRequest.
 */
class WindowsStoreRequest {
  /**
   * Create a WindowsStoreRequest.
   * @member {object} [secretJson]
   * @member {string} [secretJson.idToken] the id token of user
   * @member {string} [secretJson.refreshToken] the refresh token for user
   * @member {string} [secretJson.refreshTokenExpiry] the expiry of refresh
   * token
   * @member {string} [tenantId] tenant id the user account belongs to
   */
  constructor() {
  }

  /**
   * Defines the metadata of WindowsStoreRequest
   *
   * @returns {object} metadata of WindowsStoreRequest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'WindowsStoreRequest',
      type: {
        name: 'Composite',
        className: 'WindowsStoreRequest',
        modelProperties: {
          secretJson: {
            required: false,
            serializedName: 'secret_json',
            type: {
              name: 'Composite',
              className: 'WindowsSecretDetails'
            }
          },
          tenantId: {
            required: false,
            serializedName: 'tenant_id',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = WindowsStoreRequest;
