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
 * Contains information about the image URL.
 */
export class ImageUrlDataPlatformBulkCreateOperationExperimentalRelease {
  /**
   * A short text header to identify the image.
   */
  'title'?: string
  /**
   * URL of the image.
   */
  'url': string = 'https://miro.com/static/images/page/mr-index/localization/en/slider/ideation_brainstorming.png'

  /** @ignore */
  static discriminator: string | undefined = undefined

  /** @ignore */
  static attributeTypeMap: Array<{name: string; baseName: string; type: string}> = [
    {
      name: 'title',
      baseName: 'title',
      type: 'string',
    },
    {
      name: 'url',
      baseName: 'url',
      type: 'string',
    },
  ]

  /** @ignore */
  static getAttributeTypeMap() {
    return ImageUrlDataPlatformBulkCreateOperationExperimentalRelease.attributeTypeMap
  }
}
