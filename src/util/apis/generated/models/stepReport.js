/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Class representing a StepReport.
 */
class StepReport {
  /**
   * Create a StepReport.
   * @member {array} finishedSnapshots
   * @member {array} deviceScreenshots
   */
  constructor() {
  }

  /**
   * Defines the metadata of StepReport
   *
   * @returns {object} metadata of StepReport
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'StepReport',
      type: {
        name: 'Composite',
        className: 'StepReport',
        modelProperties: {
          finishedSnapshots: {
            required: true,
            serializedName: 'finishedSnapshots',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          deviceScreenshots: {
            required: true,
            serializedName: 'deviceScreenshots',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StepReportDeviceScreenshotsItemElementType',
                  type: {
                    name: 'Composite',
                    className: 'StepReportDeviceScreenshotsItem'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = StepReport;
