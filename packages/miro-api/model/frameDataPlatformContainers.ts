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
 * Contains frame item data, such as the title, frame type, or frame format.
 */
export class FrameDataPlatformContainers {
  /**
   * Only custom frames are supported at the moment.
   */
  'format'?:
    | string
    | (typeof FrameDataPlatformContainers.FormatEnum)[keyof typeof FrameDataPlatformContainers.FormatEnum] =
    FrameDataPlatformContainers.FormatEnum.Custom
  /**
   * Title of the frame. This title appears at the top of the frame.
   */
  'title'?: string
  /**
   * Only free form frames are supported at the moment.
   */
  'type'?: string | (typeof FrameDataPlatformContainers.TypeEnum)[keyof typeof FrameDataPlatformContainers.TypeEnum] =
    FrameDataPlatformContainers.TypeEnum.Freeform
  /**
   * Hide or reveal the content inside a frame (Enterprise plan only).
   */
  'showContent'?: boolean = true

  /** @ignore */
  static discriminator: string | undefined = undefined

  /** @ignore */
  static attributeTypeMap: Array<{name: string; baseName: string; type: string}> = [
    {
      name: 'format',
      baseName: 'format',
      type: 'FrameDataPlatformContainers.FormatEnum',
    },
    {
      name: 'title',
      baseName: 'title',
      type: 'string',
    },
    {
      name: 'type',
      baseName: 'type',
      type: 'FrameDataPlatformContainers.TypeEnum',
    },
    {
      name: 'showContent',
      baseName: 'showContent',
      type: 'boolean',
    },
  ]

  /** @ignore */
  static getAttributeTypeMap() {
    return FrameDataPlatformContainers.attributeTypeMap
  }
}

export namespace FrameDataPlatformContainers {
  export const FormatEnum = {
    Custom: 'custom',
    Desktop: 'desktop',
    Phone: 'phone',
    Tablet: 'tablet',
    A4: 'a4',
    Letter: 'letter',
    Ratio1x1: 'ratio_1x1',
    Ratio4x3: 'ratio_4x3',
    Ratio16x9: 'ratio_16x9',
  } as const
  export const TypeEnum = {
    Freeform: 'freeform',
    Heap: 'heap',
    Grid: 'grid',
    Rows: 'rows',
    Columns: 'columns',
    Unknown: 'unknown',
  } as const
}
