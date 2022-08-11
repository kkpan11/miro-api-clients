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
import { AppCardCreateRequest } from '../model/appCardCreateRequest';
import { AppCardItem } from '../model/appCardItem';
import { AppCardUpdateRequest } from '../model/appCardUpdateRequest';
import { GetBoards400Response } from '../model/getBoards400Response';

import { ObjectSerializer } from '../model/models';

import { HttpError } from './apis';

let defaultBasePath = 'https://api.miro.com';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================


export interface AppCardsApiMethods {
    createAppCardItem(boardId: string, appCardCreateRequest: AppCardCreateRequest, ): Promise<{ response: Response; body: AppCardItem;  }>
    deleteAppCardItem(boardId: string, itemId: string, ): Promise<{ response: Response; body: object;  }>
    getAppCardItem(boardId: string, itemId: string, ): Promise<{ response: Response; body: AppCardItem;  }>
    updateAppCardItem(boardId: string, itemId: string, appCardUpdateRequest: AppCardUpdateRequest, ): Promise<{ response: Response; body: AppCardItem;  }>
}

export function AppCardsApi (accessToken: string|(() => Promise<string>), basePath: string = defaultBasePath, logger?: (...thing: any) => void): AppCardsApiMethods {
    return {
        /**
         * Adds an app card item to a board.<br/><h3>Required scope</h3> <a target=\"blank\" href=\"/reference/scopes\">boards:write</a> <br/><h3>Rate limiting</h3> <a target=\"blank\" href=\"/reference/ratelimiting\">Level 2</a><br/>
         * @summary Create app card item
         * @param boardId [Unique identifier (ID) of the board](https://developers.miro.com/reference/board-model) where you want to create the item.
         * @param appCardCreateRequest 
         */
        createAppCardItem: async function (boardId: string, appCardCreateRequest: AppCardCreateRequest, ) : Promise<{ response: Response; body: AppCardItem;  }> {
            const localVarPath = '/v2/boards/{board_id}/app_cards'
                .replace('{' + 'board_id' + '}', encodeURIComponent(String(boardId)));
            let localVarQueryParameters = new URLSearchParams();
            let localVarHeaderParams: Record<string, string> = {}
            const produces = ['application/json'];
            // give precedence to 'application/json'
            if (produces.indexOf('application/json') >= 0) {
                localVarHeaderParams.Accept = 'application/json';
            } else {
                localVarHeaderParams.Accept = produces.join(',');
            }

            // verify required parameter 'boardId' is not null or undefined
            if (boardId === null || boardId === undefined) {
                throw new Error('Required parameter boardId was null or undefined when calling createAppCardItem.');
            }

            // verify required parameter 'appCardCreateRequest' is not null or undefined
            if (appCardCreateRequest === null || appCardCreateRequest === undefined) {
                throw new Error('Required parameter appCardCreateRequest was null or undefined when calling createAppCardItem.');
            }


            const resource = new URL(localVarPath, basePath)
            resource.search = localVarQueryParameters.toString()


const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${typeof accessToken === 'function' ? await accessToken() : accessToken}`
                },
                body: JSON.stringify(ObjectSerializer.serialize(appCardCreateRequest, "AppCardCreateRequest"))
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

            const body = ObjectSerializer.deserialize(bodyAsJson, "AppCardItem");

            return({response, body})
        },
        /**
         * Deletes an app card item from a board.<br/><h3>Required scope</h3> <a target=\"blank\" href=\"/reference/scopes\">boards:write</a> <br/><h3>Rate limiting</h3> <a target=\"blank\" href=\"/reference/ratelimiting\">Level 3</a><br/>
         * @summary Delete app card item
         * @param boardId [Unique identifier (ID) of the board](https://developers.miro.com/reference/board-model) from which you want to delete an item.
         * @param itemId [Unique identifier (ID) of the item](https://developers.miro.com/reference/rest-api-item-model) that you want to delete.
         */
        deleteAppCardItem: async function (boardId: string, itemId: string, ) : Promise<{ response: Response; body: object;  }> {
            const localVarPath = '/v2/boards/{board_id}/app_cards/{item_id}'
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
                throw new Error('Required parameter boardId was null or undefined when calling deleteAppCardItem.');
            }

            // verify required parameter 'itemId' is not null or undefined
            if (itemId === null || itemId === undefined) {
                throw new Error('Required parameter itemId was null or undefined when calling deleteAppCardItem.');
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
         * Retrieves information for a specific app card item on a board.<br/><h3>Required scope</h3> <a target=\"blank\" href=\"/reference/scopes\">boards:read</a> <br/><h3>Rate limiting</h3> <a target=\"blank\" href=\"/reference/ratelimiting\">Level 1</a><br/>
         * @summary Get app card item
         * @param boardId [Unique identifier (ID) of the board](https://developers.miro.com/reference/board-model) from which you want to retrieve a specific item.
         * @param itemId [Unique identifier (ID) of the item](https://developers.miro.com/reference/rest-api-item-model) that you want to retrieve.
         */
        getAppCardItem: async function (boardId: string, itemId: string, ) : Promise<{ response: Response; body: AppCardItem;  }> {
            const localVarPath = '/v2/boards/{board_id}/app_cards/{item_id}'
                .replace('{' + 'board_id' + '}', encodeURIComponent(String(boardId)))
                .replace('{' + 'item_id' + '}', encodeURIComponent(String(itemId)));
            let localVarQueryParameters = new URLSearchParams();
            let localVarHeaderParams: Record<string, string> = {}
            const produces = ['application/json'];
            // give precedence to 'application/json'
            if (produces.indexOf('application/json') >= 0) {
                localVarHeaderParams.Accept = 'application/json';
            } else {
                localVarHeaderParams.Accept = produces.join(',');
            }

            // verify required parameter 'boardId' is not null or undefined
            if (boardId === null || boardId === undefined) {
                throw new Error('Required parameter boardId was null or undefined when calling getAppCardItem.');
            }

            // verify required parameter 'itemId' is not null or undefined
            if (itemId === null || itemId === undefined) {
                throw new Error('Required parameter itemId was null or undefined when calling getAppCardItem.');
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

            const body = ObjectSerializer.deserialize(bodyAsJson, "AppCardItem");

            return({response, body})
        },
        /**
         * Updates an app card item on a board based on the data and style properties provided in the request body.<br/><h3>Required scope</h3> <a target=\"blank\" href=\"/reference/scopes\">boards:write</a> <br/><h3>Rate limiting</h3> <a target=\"blank\" href=\"/reference/ratelimiting\">Level 2</a><br/>
         * @summary Update app card item
         * @param boardId [Unique identifier (ID) of the board](https://developers.miro.com/reference/board-model) where you want to update the item.
         * @param itemId [Unique identifier (ID) of the item](https://developers.miro.com/reference/rest-api-item-model) that you want to update.
         * @param appCardUpdateRequest 
         */
        updateAppCardItem: async function (boardId: string, itemId: string, appCardUpdateRequest: AppCardUpdateRequest, ) : Promise<{ response: Response; body: AppCardItem;  }> {
            const localVarPath = '/v2/boards/{board_id}/app_cards/{item_id}'
                .replace('{' + 'board_id' + '}', encodeURIComponent(String(boardId)))
                .replace('{' + 'item_id' + '}', encodeURIComponent(String(itemId)));
            let localVarQueryParameters = new URLSearchParams();
            let localVarHeaderParams: Record<string, string> = {}
            const produces = ['application/json'];
            // give precedence to 'application/json'
            if (produces.indexOf('application/json') >= 0) {
                localVarHeaderParams.Accept = 'application/json';
            } else {
                localVarHeaderParams.Accept = produces.join(',');
            }

            // verify required parameter 'boardId' is not null or undefined
            if (boardId === null || boardId === undefined) {
                throw new Error('Required parameter boardId was null or undefined when calling updateAppCardItem.');
            }

            // verify required parameter 'itemId' is not null or undefined
            if (itemId === null || itemId === undefined) {
                throw new Error('Required parameter itemId was null or undefined when calling updateAppCardItem.');
            }

            // verify required parameter 'appCardUpdateRequest' is not null or undefined
            if (appCardUpdateRequest === null || appCardUpdateRequest === undefined) {
                throw new Error('Required parameter appCardUpdateRequest was null or undefined when calling updateAppCardItem.');
            }


            const resource = new URL(localVarPath, basePath)
            resource.search = localVarQueryParameters.toString()


const options = {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${typeof accessToken === 'function' ? await accessToken() : accessToken}`
                },
                body: JSON.stringify(ObjectSerializer.serialize(appCardUpdateRequest, "AppCardUpdateRequest"))
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

            const body = ObjectSerializer.deserialize(bodyAsJson, "AppCardItem");

            return({response, body})
        },
    }
}
