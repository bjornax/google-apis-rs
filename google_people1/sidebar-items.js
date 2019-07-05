initSidebarItems({"enum":[["Error",""],["Scope","Identifies the an OAuth2 authorization scope. A scope is needed when requesting an authorization token."]],"fn":[["remove_json_null_values",""]],"struct":[["Address","A person's physical address. May be a P.O. box or street address. All fields are optional."],["AgeRangeType","A person's age range."],["BatchGetContactGroupsResponse","The response to a batch get contact groups request."],["Biography","A person's short biography."],["Birthday","A person's birthday. At least one of the `date` and `text` fields are specified. The `date` and `text` fields typically represent the same date, but are not guaranteed to."],["BraggingRights","A person's bragging rights."],["Chunk",""],["ContactGroup","A contact group."],["ContactGroupBatchGetCall","Get a list of contact groups owned by the authenticated user by specifying a list of contact group resource names."],["ContactGroupCreateCall","Create a new contact group owned by the authenticated user."],["ContactGroupDeleteCall","Delete an existing contact group owned by the authenticated user by specifying a contact group resource name."],["ContactGroupGetCall","Get a specific contact group owned by the authenticated user by specifying a contact group resource name."],["ContactGroupListCall","List all contact groups owned by the authenticated user. Members of the contact groups are not populated."],["ContactGroupMemberModifyCall","Modify the members of a contact group owned by the authenticated user.  The only system contact groups that can have members added are `contactGroups/myContacts` and `contactGroups/starred`. Other system contact groups are deprecated and can only have contacts removed."],["ContactGroupMembership","A Google contact group membership."],["ContactGroupMetadata","The read-only metadata about a contact group."],["ContactGroupMethods","A builder providing access to all methods supported on contactGroup resources. It is not used directly, but through the `PeopleService` hub."],["ContactGroupResponse","The response for a specific contact group."],["ContactGroupUpdateCall","Update the name of an existing contact group owned by the authenticated user."],["ContentRange","Implements the Content-Range header, for serialization only"],["CoverPhoto","A person's read-only cover photo. A large image shown on the person's profile page that represents who they are or what they care about."],["CreateContactGroupRequest","A request to create a new contact group."],["Date","Represents a whole calendar date, for example a date of birth. The time of day and time zone are either specified elsewhere or are not significant. The date is relative to the Proleptic Gregorian Calendar. The day may be 0 to represent a year and month where the day is not significant. The year may be 0 to represent a month and day independent of year; for example, anniversary date."],["DefaultDelegate","A delegate with a conservative default implementation, which is used if no other delegate is set."],["DomainMembership","A read-only G Suite Domain membership."],["DummyNetworkStream",""],["EmailAddress","A person's email address."],["Empty","A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance:"],["ErrorResponse","A utility to represent detailed errors we might see in case there are BadRequests. The latter happen if the sent parameters or request structures are unsound"],["Event","An event related to the person."],["FieldMetadata","Metadata about a field."],["Gender","A person's gender."],["GetPeopleResponse","There is no detailed description."],["ImClient","A person's instant messaging client."],["Interest","One of the person's interests."],["JsonServerError","A utility type which can decode a server response that indicates error"],["ListConnectionsResponse","There is no detailed description."],["ListContactGroupsResponse","The response to a list contact groups request."],["Locale","A person's locale preference."],["Membership","A person's membership in a group. Only contact group memberships can be modified."],["MethodInfo","Contains information about an API request."],["ModifyContactGroupMembersRequest","A request to modify an existing contact group's members. Contacts can be removed from any group but they can only be added to a user group or \"myContacts\" or \"starred\" system groups."],["ModifyContactGroupMembersResponse","The response to a modify contact group members request."],["MultiPartReader","Provides a `Read` interface that converts multiple parts into the protocol identified by RFC2387. Note: This implementation is just as rich as it needs to be to perform uploads to google APIs, and might not be a fully-featured implementation."],["Name","A person's name. If the name is a mononym, the family name is empty."],["Nickname","A person's nickname."],["Occupation","A person's occupation."],["Organization","A person's past or current organization. Overlapping date ranges are permitted."],["PeopleConnectionListCall","Provides a list of the authenticated user's contacts merged with any connected profiles.  The request throws a 400 error if 'personFields' is not specified."],["PeopleCreateContactCall","Create a new contact and return the person resource for that contact."],["PeopleDeleteContactCall","Delete a contact person. Any non-contact data will not be deleted."],["PeopleGetBatchGetCall","Provides information about a list of specific people by specifying a list of requested resource names. Use `people/me` to indicate the authenticated user.  The request throws a 400 error if 'personFields' is not specified."],["PeopleGetCall","Provides information about a person by specifying a resource name. Use `people/me` to indicate the authenticated user.  The request throws a 400 error if 'personFields' is not specified."],["PeopleMethods","A builder providing access to all methods supported on people resources. It is not used directly, but through the `PeopleService` hub."],["PeopleService","Central instance to access all PeopleService related resource activities"],["PeopleUpdateContactCall","Update contact data for an existing contact person. Any non-contact data will not be modified."],["Person","Information about a person merged from various data sources such as the authenticated user's contacts and profile data."],["PersonMetadata","The read-only metadata about a person."],["PersonResponse","The response for a single person"],["PhoneNumber","A person's phone number."],["Photo","A person's read-only photo. A picture shown next to the person's name to help others recognize the person."],["ProfileMetadata","The read-only metadata about a profile."],["RangeResponseHeader",""],["Relation","A person's relation to another person."],["RelationshipInterest","A person's read-only relationship interest ."],["RelationshipStatus","A person's read-only relationship status."],["Residence","A person's past or current residence."],["ResumableUploadHelper","A utility type to perform a resumable upload from start to end."],["ServerError",""],["ServerMessage",""],["SipAddress","A person's SIP address. Session Initial Protocol addresses are used for VoIP communications to make voice or video calls over the internet."],["Skill","A skill that the person has."],["Source","The source of a field."],["Status","The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by gRPC. Each `Status` message contains three pieces of data: error code, error message, and error details."],["Tagline","A read-only brief one-line description of the person."],["UpdateContactGroupRequest","A request to update an existing user contact group. All updated fields will be replaced."],["Url","A person's associated URLs."],["UserDefined","Arbitrary user data that is populated by the end users."],["XUploadContentType","The `X-Upload-Content-Type` header."]],"trait":[["CallBuilder","Identifies types which represent builders for a particular resource method"],["Delegate","A trait specifying functionality to help controlling any request performed by the API. The trait has a conservative default implementation."],["Hub","Identifies the Hub. There is only one per library, this trait is supposed to make intended use more explicit. The hub allows to access all resource methods more easily."],["MethodsBuilder","Identifies types for building methods of a particular resource type"],["NestedType","Identifies types which are only used by other types internally. They have no special meaning, this trait just marks them for completeness."],["Part","Identifies types which are only used as part of other types, which usually are carrying the `Resource` trait."],["ReadSeek","A utility to specify reader types which provide seeking capabilities too"],["RequestValue","Identifies types which are used in API requests."],["Resource","Identifies types which can be inserted and deleted. Types with this trait are most commonly used by clients of this API."],["ResponseResult","Identifies types which are used in API responses."],["ToParts","A trait for all types that can convert themselves into a parts string"],["UnusedType","Identifies types which are not actually used by the API This might be a bug within the google API schema."]],"type":[["Result","A universal result type used as return for all calls."]]});