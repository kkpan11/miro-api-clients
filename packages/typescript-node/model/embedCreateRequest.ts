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

import { EmbedUrlData } from './embedUrlData';
import { FixedRatioNoRotationGeometry } from './fixedRatioNoRotationGeometry';
import { Parent } from './parent';
import { PositionChange } from './positionChange';

export class EmbedCreateRequest {
    'data': EmbedUrlData;
    'position'?: PositionChange;
    'geometry'?: FixedRatioNoRotationGeometry;
    'parent'?: Parent;

    /** @ignore */
    static discriminator: string | undefined = undefined;

    /** @ignore */
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "EmbedUrlData"
        },
        {
            "name": "position",
            "baseName": "position",
            "type": "PositionChange"
        },
        {
            "name": "geometry",
            "baseName": "geometry",
            "type": "FixedRatioNoRotationGeometry"
        },
        {
            "name": "parent",
            "baseName": "parent",
            "type": "Parent"
        }    ];

    /** @ignore */
    static getAttributeTypeMap() {
        return EmbedCreateRequest.attributeTypeMap;
    }
}
