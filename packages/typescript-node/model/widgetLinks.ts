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
 * Contains applicable links for the item.
 */
export class WidgetLinks {
  /**
   * Link to obtain information about the child items related to the frame.
   */
  'related'?: string
  /**
   * Link to obtain information about the current item.
   */
  'self'?: string

  /** @ignore */
  static discriminator: string | undefined = undefined

  /** @ignore */
  static attributeTypeMap: Array<{name: string; baseName: string; type: string}> = [
    {
      name: 'related',
      baseName: 'related',
      type: 'string',
    },
    {
      name: 'self',
      baseName: 'self',
      type: 'string',
    },
  ]

  /** @ignore */
  static getAttributeTypeMap() {
    return WidgetLinks.attributeTypeMap
  }
}
