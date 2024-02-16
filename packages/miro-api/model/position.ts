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

/**
 * @internal
 * Contains location information about the item, such as its x coordinate, y coordinate, and the origin of the x and y coordinates.
 */
export class Position {
  /**
   * Area of the item that is referenced by its x and y coordinates. For example, an item with a center origin will have its x and y coordinates point to its center. The center point of the board has x: 0 and y: 0 coordinates. Currently, only one option is supported (center).
   */
  'origin'?: string | (typeof Position.OriginEnum)[keyof typeof Position.OriginEnum] = Position.OriginEnum.Center
  'relativeTo'?: string | (typeof Position.RelativeToEnum)[keyof typeof Position.RelativeToEnum]
  /**
   * X-axis coordinate of the location of the item on the board. By default, all items have absolute positioning to the board, not the current viewport. Default: 0. The center point of the board has `x: 0` and `y: 0` coordinates.
   */
  'x'?: number
  /**
   * Y-axis coordinate of the location of the item on the board. By default, all items have absolute positioning to the board, not the current viewport. Default: 0. The center point of the board has `x: 0` and `y: 0` coordinates.
   */
  'y'?: number

  /** @ignore */
  static discriminator: string | undefined = undefined

  /** @ignore */
  static attributeTypeMap: Array<{name: string; baseName: string; type: string}> = [
    {
      name: 'origin',
      baseName: 'origin',
      type: 'Position.OriginEnum',
    },
    {
      name: 'relativeTo',
      baseName: 'relativeTo',
      type: 'Position.RelativeToEnum',
    },
    {
      name: 'x',
      baseName: 'x',
      type: 'number',
    },
    {
      name: 'y',
      baseName: 'y',
      type: 'number',
    },
  ]

  /** @ignore */
  static getAttributeTypeMap() {
    return Position.attributeTypeMap
  }
}

export namespace Position {
  export const OriginEnum = {
    Center: 'center',
  } as const
  export const RelativeToEnum = {
    CanvasCenter: 'canvas_center',
    ParentTopLeft: 'parent_top_left',
  } as const
}
