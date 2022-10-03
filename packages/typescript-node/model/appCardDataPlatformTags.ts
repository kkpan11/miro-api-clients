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

import {CustomField} from './customField'

/**
 * @internal
 * Contains app card item data, such as the title, description, or fields. For information about the JSON properties, see [Data](https://developers.miro.com/reference/data).
 */
export class AppCardDataPlatformTags {
  /**
   * A short text description to add context about the app card.
   */
  'description'?: string
  /**
   * Array where each object represents a custom preview field. Preview fields are displayed on the bottom half of the app card in the compact view.
   */
  'fields'?: Array<CustomField>
  /**
   * Defines whether the card is owned by the application making the call.
   */
  'owned'?: boolean
  /**
   * Status indicating whether an app card is connected and in sync with the source. When the source for the app card is deleted, the status returns `disabled`. Possible values: `disconnected`, `connected`, `disabled`
   */
  'status'?: string | typeof AppCardDataPlatformTags.StatusEnum[keyof typeof AppCardDataPlatformTags.StatusEnum]
  /**
   * A short text header to identify the app card.
   */
  'title'?: string

  /** @ignore */
  static discriminator: string | undefined = undefined

  /** @ignore */
  static attributeTypeMap: Array<{name: string; baseName: string; type: string}> = [
    {
      name: 'description',
      baseName: 'description',
      type: 'string',
    },
    {
      name: 'fields',
      baseName: 'fields',
      type: 'Array<CustomField>',
    },
    {
      name: 'owned',
      baseName: 'owned',
      type: 'boolean',
    },
    {
      name: 'status',
      baseName: 'status',
      type: 'AppCardDataPlatformTags.StatusEnum',
    },
    {
      name: 'title',
      baseName: 'title',
      type: 'string',
    },
  ]

  /** @ignore */
  static getAttributeTypeMap() {
    return AppCardDataPlatformTags.attributeTypeMap
  }
}

export namespace AppCardDataPlatformTags {
  export const StatusEnum = {
    Disconnected: 'disconnected',
    Connected: 'connected',
    Disabled: 'disabled',
  } as const
}
