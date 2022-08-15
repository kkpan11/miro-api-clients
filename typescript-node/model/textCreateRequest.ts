/**
 * Platform Tags
 * SCIM V1 API implemented by Miro
 *
 * The version of the OpenAPI document: v2.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Parent } from './parent';
import { PositionChange } from './positionChange';
import { TextData } from './textData';
import { TextStyle } from './textStyle';
import { WidthOnlyAdjustableGeometry } from './widthOnlyAdjustableGeometry';

export class TextCreateRequest {
    'data': TextData;
    'style'?: TextStyle;
    'position'?: PositionChange;
    'geometry'?: WidthOnlyAdjustableGeometry;
    'parent'?: Parent;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "TextData"
        },
        {
            "name": "style",
            "baseName": "style",
            "type": "TextStyle"
        },
        {
            "name": "position",
            "baseName": "position",
            "type": "PositionChange"
        },
        {
            "name": "geometry",
            "baseName": "geometry",
            "type": "WidthOnlyAdjustableGeometry"
        },
        {
            "name": "parent",
            "baseName": "parent",
            "type": "Parent"
        }    ];

    static getAttributeTypeMap() {
        return TextCreateRequest.attributeTypeMap;
    }
}
