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

import { BoardPolicyChange } from './boardPolicyChange';

export class BoardChanges {
    /**
    * Description of the board.
    */
    'description'?: string;
    /**
    * Name for the board.
    */
    'name'?: string = 'Untitled';
    'policy'?: BoardPolicyChange;
    /**
    * Unique identifier (ID) of the team where the board must be placed.
    */
    'teamId'?: string;

    /** @ignore */
    static discriminator: string | undefined = undefined;

    /** @ignore */
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "policy",
            "baseName": "policy",
            "type": "BoardPolicyChange"
        },
        {
            "name": "teamId",
            "baseName": "teamId",
            "type": "string"
        }    ];

    /** @ignore */
    static getAttributeTypeMap() {
        return BoardChanges.attributeTypeMap;
    }
}
