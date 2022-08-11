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


import fetch, {Response} from 'node-fetch';
import * as http from 'http';

/* tslint:disable:no-unused-locals */
import { FrameCreateRequest } from '../model/frameCreateRequest';
import { FrameItem } from '../model/frameItem';
import { FrameUpdateRequest } from '../model/frameUpdateRequest';
import { GetBoards400Response } from '../model/getBoards400Response';

import { ObjectSerializer } from '../model/models';

import { HttpError } from './apis';

let defaultBasePath = 'https://api.miro.com';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================


export interface FramesApiMethods {
    createFrameItem(boardId: string, frameCreateRequest: FrameCreateRequest, ): Promise<{ response: Response; body: FrameItem;  }>
    deleteFrameItem(boardId: string, itemId: string, ): Promise<{ response: Response; body: object;  }>
    getFrameItem(boardId: string, itemId: string, ): Promise<{ response: Response; body: FrameItem;  }>
    updateFrameItem(boardId: string, itemId: string, frameUpdateRequest: FrameUpdateRequest, ): Promise<{ response: Response; body: FrameItem;  }>
}

export function FramesApi (accessToken: string|(() => Promise<string>), basePath: string = defaultBasePath, logger?: (...thing: any) => void): FramesApiMethods {
    return {
        /**
         * Adds a frame to a board.<br/><h3>Required scope</h3> <a target=\"blank\" href=\"/reference/scopes\">boards:write</a> <br/><h3>Rate limiting</h3> <a target=\"blank\" href=\"/reference/ratelimiting\">Level 2</a><br/>
         * @summary Create frame
         * @param boardId [Unique identifier (ID) of the board](https://developers.miro.com/reference/board-model) where you want to create a frame.
         * @param frameCreateRequest 
         */
        createFrameItem: async function (boardId: string, frameCreateRequest: FrameCreateRequest, ) : Promise<{ response: Response; body: FrameItem;  }> {
            const localVarPath = '/v2/boards/{board_id}/frames'
                .replace('{' + 'board_id' + '}', encodeURIComponent(String(boardId)));
            let localVarQueryParameters = new URLSearchParams();
            let localVarHeaderParams: Record<string, string> = {}
            const produces = ['*/*', 'application/json'];
            // give precedence to 'application/json'
            if (produces.indexOf('application/json') >= 0) {
                localVarHeaderParams.Accept = 'application/json';
            } else {
                localVarHeaderParams.Accept = produces.join(',');
            }

            // verify required parameter 'boardId' is not null or undefined
            if (boardId === null || boardId === undefined) {
                throw new Error('Required parameter boardId was null or undefined when calling createFrameItem.');
            }

            // verify required parameter 'frameCreateRequest' is not null or undefined
            if (frameCreateRequest === null || frameCreateRequest === undefined) {
                throw new Error('Required parameter frameCreateRequest was null or undefined when calling createFrameItem.');
            }


            const resource = new URL(localVarPath, basePath)
            resource.search = localVarQueryParameters.toString()


const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${typeof accessToken === 'function' ? await accessToken() : accessToken}`
                },
                body: JSON.stringify(ObjectSerializer.serialize(frameCreateRequest, "FrameCreateRequest"))
            }

            if (typeof logger === 'function') logger('FETCH', resource.toString(), options)

            const response = await fetch(resource, options)

            if (typeof logger === 'function') logger('RESPONSE', response)

            let bodyAsJson: unknown
            try {
                bodyAsJson = await response.json()
            } catch (err) {
                // Body doesn't have valid json
            }

            if (!response.ok) {
                throw new HttpError(response, bodyAsJson, response.status)
            }

            const body = ObjectSerializer.deserialize(bodyAsJson, "FrameItem");

            return({response, body})
        },
        /**
         * Deletes a frame from a board.<br/><h3>Required scope</h3> <a target=\"blank\" href=\"/reference/scopes\">boards:write</a> <br/><h3>Rate limiting</h3> <a target=\"blank\" href=\"/reference/ratelimiting\">Level 3</a><br/>
         * @summary Delete frame
         * @param boardId [Unique identifier (ID) of the board](https://developers.miro.com/reference/board-model) from which you want to delete the frame.
         * @param itemId [Unique identifier (ID) of the frame](https://developers.miro.com/reference/rest-api-item-model) that you want to delete.
         */
        deleteFrameItem: async function (boardId: string, itemId: string, ) : Promise<{ response: Response; body: object;  }> {
            const localVarPath = '/v2/boards/{board_id}/frames/{item_id}'
                .replace('{' + 'board_id' + '}', encodeURIComponent(String(boardId)))
                .replace('{' + 'item_id' + '}', encodeURIComponent(String(itemId)));
            let localVarQueryParameters = new URLSearchParams();
            let localVarHeaderParams: Record<string, string> = {}
            const produces = ['*/*', 'application/json'];
            // give precedence to 'application/json'
            if (produces.indexOf('application/json') >= 0) {
                localVarHeaderParams.Accept = 'application/json';
            } else {
                localVarHeaderParams.Accept = produces.join(',');
            }

            // verify required parameter 'boardId' is not null or undefined
            if (boardId === null || boardId === undefined) {
                throw new Error('Required parameter boardId was null or undefined when calling deleteFrameItem.');
            }

            // verify required parameter 'itemId' is not null or undefined
            if (itemId === null || itemId === undefined) {
                throw new Error('Required parameter itemId was null or undefined when calling deleteFrameItem.');
            }


            const resource = new URL(localVarPath, basePath)
            resource.search = localVarQueryParameters.toString()


const options = {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${typeof accessToken === 'function' ? await accessToken() : accessToken}`
                },
            }

            if (typeof logger === 'function') logger('FETCH', resource.toString(), options)

            const response = await fetch(resource, options)

            if (typeof logger === 'function') logger('RESPONSE', response)

            let bodyAsJson: unknown
            try {
                bodyAsJson = await response.json()
            } catch (err) {
                // Body doesn't have valid json
            }

            if (!response.ok) {
                throw new HttpError(response, bodyAsJson, response.status)
            }

            const body = ObjectSerializer.deserialize(bodyAsJson, "object");

            return({response, body})
        },
        /**
         * Retrieves information for a specific frame on a board.<br/><h3>Required scope</h3> <a target=\"blank\" href=\"/reference/scopes\">boards:read</a> <br/><h3>Rate limiting</h3> <a target=\"blank\" href=\"/reference/ratelimiting\">Level 1</a><br/>
         * @summary Get frame
         * @param boardId [Unique identifier (ID) of the board](https://developers.miro.com/reference/board-model) that contains the frame that you want to retrieve
         * @param itemId [Unique identifier (ID) of the frame](https://developers.miro.com/reference/rest-api-item-model) that you want to retrieve.
         */
        getFrameItem: async function (boardId: string, itemId: string, ) : Promise<{ response: Response; body: FrameItem;  }> {
            const localVarPath = '/v2/boards/{board_id}/frames/{item_id}'
                .replace('{' + 'board_id' + '}', encodeURIComponent(String(boardId)))
                .replace('{' + 'item_id' + '}', encodeURIComponent(String(itemId)));
            let localVarQueryParameters = new URLSearchParams();
            let localVarHeaderParams: Record<string, string> = {}
            const produces = ['*/*', 'application/json'];
            // give precedence to 'application/json'
            if (produces.indexOf('application/json') >= 0) {
                localVarHeaderParams.Accept = 'application/json';
            } else {
                localVarHeaderParams.Accept = produces.join(',');
            }

            // verify required parameter 'boardId' is not null or undefined
            if (boardId === null || boardId === undefined) {
                throw new Error('Required parameter boardId was null or undefined when calling getFrameItem.');
            }

            // verify required parameter 'itemId' is not null or undefined
            if (itemId === null || itemId === undefined) {
                throw new Error('Required parameter itemId was null or undefined when calling getFrameItem.');
            }


            const resource = new URL(localVarPath, basePath)
            resource.search = localVarQueryParameters.toString()


const options = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${typeof accessToken === 'function' ? await accessToken() : accessToken}`
                },
            }

            if (typeof logger === 'function') logger('FETCH', resource.toString(), options)

            const response = await fetch(resource, options)

            if (typeof logger === 'function') logger('RESPONSE', response)

            let bodyAsJson: unknown
            try {
                bodyAsJson = await response.json()
            } catch (err) {
                // Body doesn't have valid json
            }

            if (!response.ok) {
                throw new HttpError(response, bodyAsJson, response.status)
            }

            const body = ObjectSerializer.deserialize(bodyAsJson, "FrameItem");

            return({response, body})
        },
        /**
         * Updates a frame on a board based on the data, style, or geometry properties provided in the request body.<br/><h3>Required scope</h3> <a target=\"blank\" href=\"/reference/scopes\">boards:write</a> <br/><h3>Rate limiting</h3> <a target=\"blank\" href=\"/reference/ratelimiting\">Level 2</a><br/>
         * @summary Update frame
         * @param boardId [Unique identifier (ID) of the board](https://developers.miro.com/reference/board-model) where you want to update the frame.
         * @param itemId [Unique identifier (ID) of the frame](https://developers.miro.com/reference/rest-api-item-model) that you want to update.
         * @param frameUpdateRequest 
         */
        updateFrameItem: async function (boardId: string, itemId: string, frameUpdateRequest: FrameUpdateRequest, ) : Promise<{ response: Response; body: FrameItem;  }> {
            const localVarPath = '/v2/boards/{board_id}/frames/{item_id}'
                .replace('{' + 'board_id' + '}', encodeURIComponent(String(boardId)))
                .replace('{' + 'item_id' + '}', encodeURIComponent(String(itemId)));
            let localVarQueryParameters = new URLSearchParams();
            let localVarHeaderParams: Record<string, string> = {}
            const produces = ['*/*', 'application/json'];
            // give precedence to 'application/json'
            if (produces.indexOf('application/json') >= 0) {
                localVarHeaderParams.Accept = 'application/json';
            } else {
                localVarHeaderParams.Accept = produces.join(',');
            }

            // verify required parameter 'boardId' is not null or undefined
            if (boardId === null || boardId === undefined) {
                throw new Error('Required parameter boardId was null or undefined when calling updateFrameItem.');
            }

            // verify required parameter 'itemId' is not null or undefined
            if (itemId === null || itemId === undefined) {
                throw new Error('Required parameter itemId was null or undefined when calling updateFrameItem.');
            }

            // verify required parameter 'frameUpdateRequest' is not null or undefined
            if (frameUpdateRequest === null || frameUpdateRequest === undefined) {
                throw new Error('Required parameter frameUpdateRequest was null or undefined when calling updateFrameItem.');
            }


            const resource = new URL(localVarPath, basePath)
            resource.search = localVarQueryParameters.toString()


const options = {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${typeof accessToken === 'function' ? await accessToken() : accessToken}`
                },
                body: JSON.stringify(ObjectSerializer.serialize(frameUpdateRequest, "FrameUpdateRequest"))
            }

            if (typeof logger === 'function') logger('FETCH', resource.toString(), options)

            const response = await fetch(resource, options)

            if (typeof logger === 'function') logger('RESPONSE', response)

            let bodyAsJson: unknown
            try {
                bodyAsJson = await response.json()
            } catch (err) {
                // Body doesn't have valid json
            }

            if (!response.ok) {
                throw new HttpError(response, bodyAsJson, response.status)
            }

            const body = ObjectSerializer.deserialize(bodyAsJson, "FrameItem");

            return({response, body})
        },
    }
}
