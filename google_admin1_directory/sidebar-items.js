initSidebarItems({"enum":[["Error",""],["Scope","Identifies the an OAuth2 authorization scope. A scope is needed when requesting an authorization token."]],"fn":[["remove_json_null_values",""]],"struct":[["Alias","JSON template for Alias object in Directory API."],["Aliases","JSON response template to list aliases in Directory API."],["AppAccessCollections","JSON template for App Access Collections Resource object in Directory API."],["Asp","The template that returns individual ASP (Access Code) data."],["AspDeleteCall","Delete an ASP issued by a user."],["AspGetCall","Get information about an ASP issued by a user."],["AspListCall","List the ASPs issued by a user."],["AspMethods","A builder providing access to all methods supported on asp resources. It is not used directly, but through the `Directory` hub."],["Asps","There is no detailed description."],["Building","JSON template for Building object in Directory API."],["BuildingAddress","JSON template for the postal address of a building in Directory API."],["BuildingCoordinates","JSON template for coordinates of a building in Directory API."],["Buildings","JSON template for Building List Response object in Directory API."],["CalendarResource","JSON template for Calendar Resource object in Directory API."],["CalendarResources","JSON template for Calendar Resource List Response object in Directory API."],["Channel","An notification channel used to watch for resource changes."],["ChannelMethods","A builder providing access to all methods supported on channel resources. It is not used directly, but through the `Directory` hub."],["ChannelStopCall","Stop watching resources through this channel"],["ChromeOsDevice","JSON template for Chrome Os Device resource in Directory API."],["ChromeOsDeviceAction","JSON request template for firing actions on ChromeOs Device in Directory Devices API."],["ChromeOsDeviceActiveTimeRanges","List of active time ranges (Read-only)"],["ChromeOsDeviceCpuStatusReports","Reports of CPU utilization and temperature (Read-only)"],["ChromeOsDeviceCpuStatusReportsCpuTemperatureInfo","List of CPU temperature samples."],["ChromeOsDeviceDeviceFiles","List of device files to download (Read-only)"],["ChromeOsDeviceDiskVolumeReports","Reports of disk space and other info about mounted/connected volumes."],["ChromeOsDeviceDiskVolumeReportsVolumeInfo","Disk volumes"],["ChromeOsDeviceRecentUsers","List of recent device users, in descending order by last login time (Read-only)"],["ChromeOsDeviceSystemRamFreeReports","Reports of amounts of available RAM memory (Read-only)"],["ChromeOsDeviceTpmVersionInfo","Trusted Platform Module (TPM) (Read-only)"],["ChromeOsDevices","JSON response template for List Chrome OS Devices operation in Directory API."],["ChromeOsMoveDevicesToOu","JSON request template for moving ChromeOs Device to given OU in Directory Devices API."],["ChromeosdeviceActionCall","Take action on Chrome OS Device"],["ChromeosdeviceGetCall","Retrieve Chrome OS Device"],["ChromeosdeviceListCall","Retrieve all Chrome OS Devices of a customer (paginated)"],["ChromeosdeviceMethods","A builder providing access to all methods supported on chromeosdevice resources. It is not used directly, but through the `Directory` hub."],["ChromeosdeviceMoveDevicesToOuCall","Move or insert multiple Chrome OS Devices to organizational unit"],["ChromeosdevicePatchCall","Update Chrome OS Device. This method supports patch semantics."],["ChromeosdeviceUpdateCall","Update Chrome OS Device"],["Chunk",""],["ContentRange","Implements the Content-Range header, for serialization only"],["Customer","JSON template for Customer Resource object in Directory API."],["CustomerGetCall","Retrieves a customer."],["CustomerMethods","A builder providing access to all methods supported on customer resources. It is not used directly, but through the `Directory` hub."],["CustomerPatchCall","Updates a customer. This method supports patch semantics."],["CustomerPostalAddress","JSON template for postal address of a customer."],["CustomerUpdateCall","Updates a customer."],["DefaultDelegate","A delegate with a conservative default implementation, which is used if no other delegate is set."],["Directory","Central instance to access all Directory related resource activities"],["DomainAlias","JSON template for Domain Alias object in Directory API."],["DomainAliaseDeleteCall","Deletes a Domain Alias of the customer."],["DomainAliaseGetCall","Retrieves a domain alias of the customer."],["DomainAliaseInsertCall","Inserts a Domain alias of the customer."],["DomainAliaseListCall","Lists the domain aliases of the customer."],["DomainAliaseMethods","A builder providing access to all methods supported on domainAliase resources. It is not used directly, but through the `Directory` hub."],["DomainAliases","JSON response template to list domain aliases in Directory API."],["DomainDeleteCall","Deletes a domain of the customer."],["DomainGetCall","Retrieves a domain of the customer."],["DomainInsertCall","Inserts a domain of the customer."],["DomainListCall","Lists the domains of the customer."],["DomainMethods","A builder providing access to all methods supported on domain resources. It is not used directly, but through the `Directory` hub."],["Domains","JSON template for Domain object in Directory API."],["Domains2","JSON response template to list Domains in Directory API."],["DummyNetworkStream",""],["ErrorResponse","A utility to represent detailed errors we might see in case there are BadRequests. The latter happen if the sent parameters or request structures are unsound"],["Feature","JSON template for Feature object in Directory API."],["FeatureRename","JSON request template for renaming a feature."],["Features","JSON template for Feature List Response object in Directory API."],["Group","JSON template for Group resource in Directory API."],["GroupAliaseDeleteCall","Remove a alias for the group"],["GroupAliaseInsertCall","Add a alias for the group"],["GroupAliaseListCall","List all aliases for a group"],["GroupDeleteCall","Delete Group"],["GroupGetCall","Retrieve Group"],["GroupInsertCall","Create Group"],["GroupListCall","Retrieve all groups of a domain or of a user given a userKey (paginated)"],["GroupMethods","A builder providing access to all methods supported on group resources. It is not used directly, but through the `Directory` hub."],["GroupPatchCall","Update Group. This method supports patch semantics."],["GroupUpdateCall","Update Group"],["Groups","JSON response template for List Groups operation in Directory API."],["JsonServerError","A utility type which can decode a server response that indicates error"],["Member","JSON template for Member resource in Directory API."],["MemberDeleteCall","Remove membership."],["MemberGetCall","Retrieve Group Member"],["MemberHasMemberCall","Checks whether the given user is a member of the group. Membership can be direct or nested."],["MemberInsertCall","Add user to the specified group."],["MemberListCall","Retrieve all members in a group (paginated)"],["MemberMethods","A builder providing access to all methods supported on member resources. It is not used directly, but through the `Directory` hub."],["MemberPatchCall","Update membership of a user in the specified group. This method supports patch semantics."],["MemberUpdateCall","Update membership of a user in the specified group."],["Members","JSON response template for List Members operation in Directory API."],["MembersHasMember","JSON template for Has Member response in Directory API."],["MethodInfo","Contains information about an API request."],["MobileDevice","JSON template for Mobile Device resource in Directory API."],["MobileDeviceAction","JSON request template for firing commands on Mobile Device in Directory Devices API."],["MobileDeviceApplications","List of applications installed on Mobile Device"],["MobileDevices","JSON response template for List Mobile Devices operation in Directory API."],["MobiledeviceActionCall","Take action on Mobile Device"],["MobiledeviceDeleteCall","Delete Mobile Device"],["MobiledeviceGetCall","Retrieve Mobile Device"],["MobiledeviceListCall","Retrieve all Mobile Devices of a customer (paginated)"],["MobiledeviceMethods","A builder providing access to all methods supported on mobiledevice resources. It is not used directly, but through the `Directory` hub."],["MultiPartReader","Provides a `Read` interface that converts multiple parts into the protocol identified by RFC2387. Note: This implementation is just as rich as it needs to be to perform uploads to google APIs, and might not be a fully-featured implementation."],["Notification","Template for a notification resource."],["NotificationDeleteCall","Deletes a notification"],["NotificationGetCall","Retrieves a notification."],["NotificationListCall","Retrieves a list of notifications."],["NotificationMethods","A builder providing access to all methods supported on notification resources. It is not used directly, but through the `Directory` hub."],["NotificationPatchCall","Updates a notification. This method supports patch semantics."],["NotificationUpdateCall","Updates a notification."],["Notifications","Template for notifications list response."],["OrgUnit","JSON template for Org Unit resource in Directory API."],["OrgUnits","JSON response template for List Organization Units operation in Directory API."],["OrgunitDeleteCall","Remove organizational unit"],["OrgunitGetCall","Retrieve organizational unit"],["OrgunitInsertCall","Add organizational unit"],["OrgunitListCall","Retrieve all organizational units"],["OrgunitMethods","A builder providing access to all methods supported on orgunit resources. It is not used directly, but through the `Directory` hub."],["OrgunitPatchCall","Update organizational unit. This method supports patch semantics."],["OrgunitUpdateCall","Update organizational unit"],["Privilege","JSON template for privilege resource in Directory API."],["PrivilegeListCall","Retrieves a paginated list of all privileges for a customer."],["PrivilegeMethods","A builder providing access to all methods supported on privilege resources. It is not used directly, but through the `Directory` hub."],["Privileges","JSON response template for List privileges operation in Directory API."],["RangeResponseHeader",""],["ResolvedAppAccessSettingGetSettingCall","Retrieves resolved app access settings of the logged in user."],["ResolvedAppAccessSettingListTrustedAppCall","Retrieves the list of apps trusted by the admin of the logged in user."],["ResolvedAppAccessSettingMethods","A builder providing access to all methods supported on resolvedAppAccessSetting resources. It is not used directly, but through the `Directory` hub."],["ResourceBuildingDeleteCall","Deletes a building."],["ResourceBuildingGetCall","Retrieves a building."],["ResourceBuildingInsertCall","Inserts a building."],["ResourceBuildingListCall","Retrieves a list of buildings for an account."],["ResourceBuildingPatchCall","Updates a building. This method supports patch semantics."],["ResourceBuildingUpdateCall","Updates a building."],["ResourceCalendarDeleteCall","Deletes a calendar resource."],["ResourceCalendarGetCall","Retrieves a calendar resource."],["ResourceCalendarInsertCall","Inserts a calendar resource."],["ResourceCalendarListCall","Retrieves a list of calendar resources for an account."],["ResourceCalendarPatchCall","Updates a calendar resource."],["ResourceCalendarUpdateCall","Updates a calendar resource."],["ResourceFeatureDeleteCall","Deletes a feature."],["ResourceFeatureGetCall","Retrieves a feature."],["ResourceFeatureInsertCall","Inserts a feature."],["ResourceFeatureListCall","Retrieves a list of features for an account."],["ResourceFeaturePatchCall","Updates a feature. This method supports patch semantics."],["ResourceFeatureRenameCall","Renames a feature."],["ResourceFeatureUpdateCall","Updates a feature."],["ResourceMethods","A builder providing access to all methods supported on resource resources. It is not used directly, but through the `Directory` hub."],["ResumableUploadHelper","A utility type to perform a resumable upload from start to end."],["Role","JSON template for role resource in Directory API."],["RoleAssignment","JSON template for roleAssignment resource in Directory API."],["RoleAssignmentDeleteCall","Deletes a role assignment."],["RoleAssignmentGetCall","Retrieve a role assignment."],["RoleAssignmentInsertCall","Creates a role assignment."],["RoleAssignmentListCall","Retrieves a paginated list of all roleAssignments."],["RoleAssignmentMethods","A builder providing access to all methods supported on roleAssignment resources. It is not used directly, but through the `Directory` hub."],["RoleAssignments","JSON response template for List roleAssignments operation in Directory API."],["RoleDeleteCall","Deletes a role."],["RoleGetCall","Retrieves a role."],["RoleInsertCall","Creates a role."],["RoleListCall","Retrieves a paginated list of all the roles in a domain."],["RoleMethods","A builder providing access to all methods supported on role resources. It is not used directly, but through the `Directory` hub."],["RolePatchCall","Updates a role. This method supports patch semantics."],["RoleRolePrivileges","The set of privileges that are granted to this role."],["RoleUpdateCall","Updates a role."],["Roles","JSON response template for List roles operation in Directory API."],["Schema","JSON template for Schema resource in Directory API."],["SchemaDeleteCall","Delete schema"],["SchemaFieldSpec","JSON template for FieldSpec resource for Schemas in Directory API."],["SchemaFieldSpecNumericIndexingSpec","Indexing spec for a numeric field. By default, only exact match queries will be supported for numeric fields. Setting the numericIndexingSpec allows range queries to be supported."],["SchemaGetCall","Retrieve schema"],["SchemaInsertCall","Create schema."],["SchemaListCall","Retrieve all schemas for a customer"],["SchemaMethods","A builder providing access to all methods supported on schema resources. It is not used directly, but through the `Directory` hub."],["SchemaPatchCall","Update schema. This method supports patch semantics."],["SchemaUpdateCall","Update schema"],["Schemas","JSON response template for List Schema operation in Directory API."],["ServerError",""],["ServerMessage",""],["Token","JSON template for token resource in Directory API."],["TokenDeleteCall","Delete all access tokens issued by a user for an application."],["TokenGetCall","Get information about an access token issued by a user."],["TokenListCall","Returns the set of tokens specified user has issued to 3rd party applications."],["TokenMethods","A builder providing access to all methods supported on token resources. It is not used directly, but through the `Directory` hub."],["Tokens","JSON response template for List tokens operation in Directory API."],["TrustedAppId","JSON template for Trusted App Ids Resource object in Directory API."],["TrustedApps","JSON template for Trusted Apps response object of a user in Directory API."],["User","JSON template for User object in Directory API."],["UserAliaseDeleteCall","Remove a alias for the user"],["UserAliaseInsertCall","Add a alias for the user"],["UserAliaseListCall","List all aliases for a user"],["UserAliaseWatchCall","Watch for changes in user aliases list"],["UserCustomProperties","JSON template for a set of custom properties (i.e. all fields in a particular schema)"],["UserDeleteCall","Delete user"],["UserGetCall","retrieve user"],["UserInsertCall","create user."],["UserListCall","Retrieve either deleted users or all users in a domain (paginated)"],["UserMakeAdmin","JSON request template for setting/revoking admin status of a user in Directory API."],["UserMakeAdminCall","change admin status of a user"],["UserMethods","A builder providing access to all methods supported on user resources. It is not used directly, but through the `Directory` hub."],["UserName","JSON template for name of a user in Directory API."],["UserPatchCall","update user. This method supports patch semantics."],["UserPhoto","JSON template for Photo object in Directory API."],["UserPhotoDeleteCall","Remove photos for the user"],["UserPhotoGetCall","Retrieve photo of a user"],["UserPhotoPatchCall","Add a photo for the user. This method supports patch semantics."],["UserPhotoUpdateCall","Add a photo for the user"],["UserUndelete","JSON request template to undelete a user in Directory API."],["UserUndeleteCall","Undelete a deleted user"],["UserUpdateCall","update user"],["UserWatchCall","Watch for changes in users list"],["Users","JSON response template for List Users operation in Apps Directory API."],["VerificationCode","JSON template for verification codes in Directory API."],["VerificationCodeGenerateCall","Generate new backup verification codes for the user."],["VerificationCodeInvalidateCall","Invalidate the current backup verification codes for the user."],["VerificationCodeListCall","Returns the current set of valid backup verification codes for the specified user."],["VerificationCodeMethods","A builder providing access to all methods supported on verificationCode resources. It is not used directly, but through the `Directory` hub."],["VerificationCodes","JSON response template for List verification codes operation in Directory API."],["XUploadContentType","The `X-Upload-Content-Type` header."]],"trait":[["CallBuilder","Identifies types which represent builders for a particular resource method"],["Delegate","A trait specifying functionality to help controlling any request performed by the API. The trait has a conservative default implementation."],["Hub","Identifies the Hub. There is only one per library, this trait is supposed to make intended use more explicit. The hub allows to access all resource methods more easily."],["MethodsBuilder","Identifies types for building methods of a particular resource type"],["NestedType","Identifies types which are only used by other types internally. They have no special meaning, this trait just marks them for completeness."],["Part","Identifies types which are only used as part of other types, which usually are carrying the `Resource` trait."],["ReadSeek","A utility to specify reader types which provide seeking capabilities too"],["RequestValue","Identifies types which are used in API requests."],["Resource","Identifies types which can be inserted and deleted. Types with this trait are most commonly used by clients of this API."],["ResponseResult","Identifies types which are used in API responses."],["ToParts","A trait for all types that can convert themselves into a parts string"],["UnusedType","Identifies types which are not actually used by the API This might be a bug within the google API schema."]],"type":[["Result","A universal result type used as return for all calls."]]});