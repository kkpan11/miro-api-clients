/**
 * Miro Developer Platform
 * <img src=\"https://content.pstmn.io/47449ea6-0ef7-4af2-bac1-e58a70e61c58/aW1hZ2UucG5n\" width=\"1685\" height=\"593\">  ### Miro Developer Platform concepts  - New to the Miro Developer Platform? Interested in learning more about platform concepts?? [Read our introduction page](https://beta.developers.miro.com/docs/introduction) and familiarize yourself with the Miro Developer Platform capabilities in a few minutes.   ### Getting started with the Miro REST API  - [Quickstart (video):](https://beta.developers.miro.com/docs/try-out-the-rest-api-in-less-than-3-minutes) try the REST API in less than 3 minutes. - [Quickstart (article):](https://beta.developers.miro.com/docs/build-your-first-hello-world-app-1) get started and try the REST API in less than 3 minutes.   ### Miro REST API tutorials  Check out our how-to articles with step-by-step instructions and code examples so you can:  - [Get started with OAuth 2.0 and Miro](https://beta.developers.miro.com/docs/getting-started-with-oauth)   ### Miro App Examples  Clone our [Miro App Examples repository](https://github.com/miroapp/app-examples) to get inspiration, customize, and explore apps built on top of Miro\'s Developer Platform 2.0.
 *
 * The version of the OpenAPI document: v2.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {Caption} from './caption'
import {ItemConnectionChangesData} from './itemConnectionChangesData'
import {UpdateConnectorStyle} from './updateConnectorStyle'

/**
 * @internal
 * If both are provided, startItem.id must be different from endItem.id
 */
export class ConnectorChangesData {
  'startItem'?: ItemConnectionChangesData
  'endItem'?: ItemConnectionChangesData
  /**
   * The path type of the connector line, defines curvature. Default: curved.
   */
  'shape'?: string | (typeof ConnectorChangesData.ShapeEnum)[keyof typeof ConnectorChangesData.ShapeEnum]
  /**
   * Blocks of text you want to display on the connector.
   */
  'captions'?: Array<Caption>
  'style'?: UpdateConnectorStyle

  /** @ignore */
  static discriminator: string | undefined = undefined

  /** @ignore */
  static attributeTypeMap: Array<{name: string; baseName: string; type: string}> = [
    {
      name: 'startItem',
      baseName: 'startItem',
      type: 'ItemConnectionChangesData',
    },
    {
      name: 'endItem',
      baseName: 'endItem',
      type: 'ItemConnectionChangesData',
    },
    {
      name: 'shape',
      baseName: 'shape',
      type: 'ConnectorChangesData.ShapeEnum',
    },
    {
      name: 'captions',
      baseName: 'captions',
      type: 'Array<Caption>',
    },
    {
      name: 'style',
      baseName: 'style',
      type: 'UpdateConnectorStyle',
    },
  ]

  /** @ignore */
  static getAttributeTypeMap() {
    return ConnectorChangesData.attributeTypeMap
  }
}

export namespace ConnectorChangesData {
  export const ShapeEnum = {
    Straight: 'straight',
    Elbowed: 'elbowed',
    Curved: 'curved',
  } as const
}
