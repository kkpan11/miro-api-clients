/**
 * Miro API
 * Miro API
 *
 * The version of the OpenAPI document: 0.1
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
   * Area of the item that is referenced by its x and y coordinates. For example, an item with a center origin will have its x and y coordinates point to its center. The center point of the board has x: 0 and y: 0 coordinates. Currently, only one option is supported.
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
