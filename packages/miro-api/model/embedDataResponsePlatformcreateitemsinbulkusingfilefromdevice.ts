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

export class EmbedDataResponsePlatformcreateitemsinbulkusingfilefromdevice {
  /**
   * Type of the embedded item\'s content.
   */
  'contentType'?: string
  /**
   * Short description of the embedded item.
   */
  'description'?: string
  /**
   * HTML code of the embedded item.
   */
  'html'?: string
  /**
   * Defines how the content in the embed item is displayed on the board. `inline`: The embedded content is displayed directly on the board. `modal`: The embedded content is displayed inside a modal overlay on the board.
   */
  'mode'?:
    | string
    | (typeof EmbedDataResponsePlatformcreateitemsinbulkusingfilefromdevice.ModeEnum)[keyof typeof EmbedDataResponsePlatformcreateitemsinbulkusingfilefromdevice.ModeEnum]
  /**
   * The URL to download the resource. You must use your access token to access the URL. The URL contains the `redirect` parameter and the `format` parameter to control the request execution as described in the following parameters: `format` parameter: By default, the image format is set to the preview image. If you want to download the original image, set the `format` parameter in the URL to `original`. `redirect`: By default, the `redirect` parameter is set to `false` and the resource object containing the URL and the resource type is returned with a 200 OK HTTP code. This URL is valid for 60 seconds. You can use this URL to retrieve the resource file. If the `redirect` parameter is set to `true`, a 307 TEMPORARY_REDIRECT HTTP response is returned. If you follow HTTP 3xx responses as redirects, you will automatically be redirected to the resource file and the content type returned can be `image/png`, \'image/svg\', or \'image/jpg\', depending on the original image type.
   */
  'previewUrl'?: string
  /**
   * Name of the content\'s provider.
   */
  'providerName'?: string
  /**
   * Url of the content\'s provider.
   */
  'providerUrl'?: string
  /**
   * Title of the embedded item.
   */
  'title'?: string
  /**
   * A [valid URL](https://developers.miro.com/reference/data#embeddata) pointing to the content resource that you want to embed in the board. Possible transport protocols: HTTP, HTTPS.
   */
  'url'?: string

  /** @ignore */
  static discriminator: string | undefined = undefined

  /** @ignore */
  static attributeTypeMap: Array<{name: string; baseName: string; type: string}> = [
    {
      name: 'contentType',
      baseName: 'contentType',
      type: 'string',
    },
    {
      name: 'description',
      baseName: 'description',
      type: 'string',
    },
    {
      name: 'html',
      baseName: 'html',
      type: 'string',
    },
    {
      name: 'mode',
      baseName: 'mode',
      type: 'EmbedDataResponsePlatformcreateitemsinbulkusingfilefromdevice.ModeEnum',
    },
    {
      name: 'previewUrl',
      baseName: 'previewUrl',
      type: 'string',
    },
    {
      name: 'providerName',
      baseName: 'providerName',
      type: 'string',
    },
    {
      name: 'providerUrl',
      baseName: 'providerUrl',
      type: 'string',
    },
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
    return EmbedDataResponsePlatformcreateitemsinbulkusingfilefromdevice.attributeTypeMap
  }
}

export namespace EmbedDataResponsePlatformcreateitemsinbulkusingfilefromdevice {
  export const ModeEnum = {
    Inline: 'inline',
    Modal: 'modal',
  } as const
}
