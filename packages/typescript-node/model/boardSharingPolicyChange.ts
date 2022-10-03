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
 * Defines the public-level, organization-level, and team-level access for the board. The access level that a user gets depends on the highest level of access that results from considering the public-level, team-level, organization-level, and direct sharing access. For more information, see [Sharing policy](https://developers.miro.com/reference/rest-api-policy-data-model#sharing-policy).
 */
export class BoardSharingPolicyChange {
  /**
   * Defines the public-level access to the board. Possible values: `private`, `view`, `edit`, `comment`
   */
  'access'?: string | typeof BoardSharingPolicyChange.AccessEnum[keyof typeof BoardSharingPolicyChange.AccessEnum] =
    BoardSharingPolicyChange.AccessEnum.Private
  /**
   * Defines the user role when inviting a user via the invite to team and board link. For Enterprise users, the `inviteToAccountAndBoardLinkAccess` parameter is always set to `no_access` regardless of the value that you assign for this parameter. Possible values: `viewer`, `commenter`, `editor`, `no_access`
   */
  'inviteToAccountAndBoardLinkAccess'?:
    | string
    | typeof BoardSharingPolicyChange.InviteToAccountAndBoardLinkAccessEnum[keyof typeof BoardSharingPolicyChange.InviteToAccountAndBoardLinkAccessEnum] =
    BoardSharingPolicyChange.InviteToAccountAndBoardLinkAccessEnum.NoAccess
  /**
   * Defines the organization-level access to the board. If the board is created for a team that does not belong to an organization, the `organizationAccess` parameter is always set to the default value. Possible values: `private`, `view`, `comment`, `edit`
   */
  'organizationAccess'?:
    | string
    | typeof BoardSharingPolicyChange.OrganizationAccessEnum[keyof typeof BoardSharingPolicyChange.OrganizationAccessEnum] =
    BoardSharingPolicyChange.OrganizationAccessEnum.Private
  /**
   * Defines the team-level access to the board. Possible values: `private`, `view`, `comment`, `edit`
   */
  'teamAccess'?:
    | string
    | typeof BoardSharingPolicyChange.TeamAccessEnum[keyof typeof BoardSharingPolicyChange.TeamAccessEnum] =
    BoardSharingPolicyChange.TeamAccessEnum.Private

  /** @ignore */
  static discriminator: string | undefined = undefined

  /** @ignore */
  static attributeTypeMap: Array<{name: string; baseName: string; type: string}> = [
    {
      name: 'access',
      baseName: 'access',
      type: 'BoardSharingPolicyChange.AccessEnum',
    },
    {
      name: 'inviteToAccountAndBoardLinkAccess',
      baseName: 'inviteToAccountAndBoardLinkAccess',
      type: 'BoardSharingPolicyChange.InviteToAccountAndBoardLinkAccessEnum',
    },
    {
      name: 'organizationAccess',
      baseName: 'organizationAccess',
      type: 'BoardSharingPolicyChange.OrganizationAccessEnum',
    },
    {
      name: 'teamAccess',
      baseName: 'teamAccess',
      type: 'BoardSharingPolicyChange.TeamAccessEnum',
    },
  ]

  /** @ignore */
  static getAttributeTypeMap() {
    return BoardSharingPolicyChange.attributeTypeMap
  }
}

export namespace BoardSharingPolicyChange {
  export const AccessEnum = {
    Private: 'private',
    View: 'view',
    Edit: 'edit',
    Comment: 'comment',
  } as const
  export const InviteToAccountAndBoardLinkAccessEnum = {
    Viewer: 'viewer',
    Commenter: 'commenter',
    Editor: 'editor',
    NoAccess: 'no_access',
  } as const
  export const OrganizationAccessEnum = {
    Private: 'private',
    View: 'view',
    Comment: 'comment',
    Edit: 'edit',
  } as const
  export const TeamAccessEnum = {
    Private: 'private',
    View: 'view',
    Comment: 'comment',
    Edit: 'edit',
  } as const
}
