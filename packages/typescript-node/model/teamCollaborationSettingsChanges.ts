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
* Team collaboration settings
*/
export class TeamCollaborationSettingsChanges {
    /**
    *  * \"enabled\": Enable Co-owner role on boards and projects * \"disabled\": Disabled Co-owner role on boards and projects 
    */
    'coOwnerRole'?: TeamCollaborationSettingsChanges.CoOwnerRoleEnum;

    /** @ignore */
    static discriminator: string | undefined = undefined;

    /** @ignore */
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "coOwnerRole",
            "baseName": "coOwnerRole",
            "type": "TeamCollaborationSettingsChanges.CoOwnerRoleEnum"
        }    ];

    /** @ignore */
    static getAttributeTypeMap() {
        return TeamCollaborationSettingsChanges.attributeTypeMap;
    }
}

export namespace TeamCollaborationSettingsChanges {
    export enum CoOwnerRoleEnum {
        Enabled = <any> 'enabled',
        Disabled = <any> 'disabled'
    }
}