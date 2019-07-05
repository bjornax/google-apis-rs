initSidebarItems({"enum":[["Error",""],["Scope","Identifies the an OAuth2 authorization scope. A scope is needed when requesting an authorization token."]],"fn":[["remove_json_null_values",""]],"struct":[["Chunk",""],["CloudIdentity","Central instance to access all CloudIdentity related resource activities"],["ContentRange","Implements the Content-Range header, for serialization only"],["DefaultDelegate","A delegate with a conservative default implementation, which is used if no other delegate is set."],["DummyNetworkStream",""],["EntityKey","An EntityKey uniquely identifies an Entity. Namespaces are used to provide isolation for IDs. A single ID can be reused across namespaces but the combination of a namespace and an ID must be unique."],["ErrorResponse","A utility to represent detailed errors we might see in case there are BadRequests. The latter happen if the sent parameters or request structures are unsound"],["Group","Resource representing a Group."],["GroupCreateCall","Creates a Group."],["GroupDeleteCall","Deletes a Group."],["GroupGetCall","Retrieves a Group."],["GroupListCall","List groups within a customer or a domain."],["GroupLookupCall","Looks up resource name of a Group by its EntityKey."],["GroupMembershipCreateCall","Creates a Membership."],["GroupMembershipDeleteCall","Deletes a Membership."],["GroupMembershipGetCall","Retrieves a Membership."],["GroupMembershipListCall","List Memberships within a Group."],["GroupMembershipLookupCall","Looks up resource name of a Membership within a Group by member's EntityKey."],["GroupMethods","A builder providing access to all methods supported on group resources. It is not used directly, but through the `CloudIdentity` hub."],["GroupPatchCall","Updates a Group."],["GroupSearchCall","Searches for Groups."],["JsonServerError","A utility type which can decode a server response that indicates error"],["ListGroupsResponse","Response message for ListGroups operation."],["ListMembershipsResponse","There is no detailed description."],["LookupGroupNameResponse","There is no detailed description."],["LookupMembershipNameResponse","There is no detailed description."],["Membership","Resource representing a Membership within a Group"],["MembershipRole","Resource representing a role within a Membership."],["MethodInfo","Contains information about an API request."],["MultiPartReader","Provides a `Read` interface that converts multiple parts into the protocol identified by RFC2387. Note: This implementation is just as rich as it needs to be to perform uploads to google APIs, and might not be a fully-featured implementation."],["Operation","This resource represents a long-running operation that is the result of a network API call."],["RangeResponseHeader",""],["ResumableUploadHelper","A utility type to perform a resumable upload from start to end."],["SearchGroupsResponse","There is no detailed description."],["ServerError",""],["ServerMessage",""],["Status","The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by gRPC. Each `Status` message contains three pieces of data: error code, error message, and error details."],["XUploadContentType","The `X-Upload-Content-Type` header."]],"trait":[["CallBuilder","Identifies types which represent builders for a particular resource method"],["Delegate","A trait specifying functionality to help controlling any request performed by the API. The trait has a conservative default implementation."],["Hub","Identifies the Hub. There is only one per library, this trait is supposed to make intended use more explicit. The hub allows to access all resource methods more easily."],["MethodsBuilder","Identifies types for building methods of a particular resource type"],["NestedType","Identifies types which are only used by other types internally. They have no special meaning, this trait just marks them for completeness."],["Part","Identifies types which are only used as part of other types, which usually are carrying the `Resource` trait."],["ReadSeek","A utility to specify reader types which provide seeking capabilities too"],["RequestValue","Identifies types which are used in API requests."],["Resource","Identifies types which can be inserted and deleted. Types with this trait are most commonly used by clients of this API."],["ResponseResult","Identifies types which are used in API responses."],["ToParts","A trait for all types that can convert themselves into a parts string"],["UnusedType","Identifies types which are not actually used by the API This might be a bug within the google API schema."]],"type":[["Result","A universal result type used as return for all calls."]]});