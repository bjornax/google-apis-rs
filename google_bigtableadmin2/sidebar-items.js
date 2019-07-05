initSidebarItems({"enum":[["Error",""],["Scope","Identifies the an OAuth2 authorization scope. A scope is needed when requesting an authorization token."]],"fn":[["remove_json_null_values",""]],"struct":[["AppProfile","A configuration object describing how Cloud Bigtable should treat traffic from a particular end user application."],["AuditConfig","Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs."],["AuditLogConfig","Provides the configuration for logging a type of permissions. Example:"],["BigtableAdmin","Central instance to access all BigtableAdmin related resource activities"],["Binding","Associates `members` with a `role`."],["CheckConsistencyRequest","Request message for google.bigtable.admin.v2.BigtableTableAdmin.CheckConsistency"],["CheckConsistencyResponse","Response message for google.bigtable.admin.v2.BigtableTableAdmin.CheckConsistency"],["Chunk",""],["Cluster","A resizable group of nodes in a particular cloud location, capable of serving all Tables in the parent Instance."],["ClusterState","The state of a table's data in a particular cluster."],["ColumnFamily","A set of columns within a table which share a common configuration."],["ContentRange","Implements the Content-Range header, for serialization only"],["CreateInstanceRequest","Request message for BigtableInstanceAdmin.CreateInstance."],["CreateTableRequest","Request message for google.bigtable.admin.v2.BigtableTableAdmin.CreateTable"],["DefaultDelegate","A delegate with a conservative default implementation, which is used if no other delegate is set."],["DropRowRangeRequest","Request message for google.bigtable.admin.v2.BigtableTableAdmin.DropRowRange"],["DummyNetworkStream",""],["Empty","A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance:"],["ErrorResponse","A utility to represent detailed errors we might see in case there are BadRequests. The latter happen if the sent parameters or request structures are unsound"],["Expr","Represents an expression text. Example:"],["GcRule","Rule for determining which cells to delete during garbage collection."],["GenerateConsistencyTokenRequest","Request message for google.bigtable.admin.v2.BigtableTableAdmin.GenerateConsistencyToken"],["GenerateConsistencyTokenResponse","Response message for google.bigtable.admin.v2.BigtableTableAdmin.GenerateConsistencyToken"],["GetIamPolicyRequest","Request message for `GetIamPolicy` method."],["Instance","A collection of Bigtable Tables and the resources that serve them. All tables in an instance are served from all Clusters in the instance."],["Intersection","A GcRule which deletes cells matching all of the given rules."],["JsonServerError","A utility type which can decode a server response that indicates error"],["ListAppProfilesResponse","Response message for BigtableInstanceAdmin.ListAppProfiles."],["ListClustersResponse","Response message for BigtableInstanceAdmin.ListClusters."],["ListInstancesResponse","Response message for BigtableInstanceAdmin.ListInstances."],["ListLocationsResponse","The response message for Locations.ListLocations."],["ListOperationsResponse","The response message for Operations.ListOperations."],["ListTablesResponse","Response message for google.bigtable.admin.v2.BigtableTableAdmin.ListTables"],["Location","A resource that represents Google Cloud Platform location."],["MethodInfo","Contains information about an API request."],["Modification","A create, update, or delete of a particular column family."],["ModifyColumnFamiliesRequest","Request message for google.bigtable.admin.v2.BigtableTableAdmin.ModifyColumnFamilies"],["MultiClusterRoutingUseAny","Read/write requests may be routed to any cluster in the instance, and will fail over to another cluster in the event of transient errors or delays. Choosing this option sacrifices read-your-writes consistency to improve availability."],["MultiPartReader","Provides a `Read` interface that converts multiple parts into the protocol identified by RFC2387. Note: This implementation is just as rich as it needs to be to perform uploads to google APIs, and might not be a fully-featured implementation."],["Operation","This resource represents a long-running operation that is the result of a network API call."],["OperationCancelCall","Starts asynchronous cancellation on a long-running operation.  The server makes a best effort to cancel the operation, but success is not guaranteed.  If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.  Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`."],["OperationDeleteCall","Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`."],["OperationGetCall","Gets the latest state of a long-running operation.  Clients can use this method to poll the operation result at intervals as recommended by the API service."],["OperationMethods","A builder providing access to all methods supported on operation resources. It is not used directly, but through the `BigtableAdmin` hub."],["OperationProjectOperationListCall","Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`."],["Policy","Defines an Identity and Access Management (IAM) policy. It is used to specify access control policies for Cloud Platform resources."],["ProjectInstanceAppProfileCreateCall","Creates an app profile within an instance."],["ProjectInstanceAppProfileDeleteCall","Deletes an app profile from an instance."],["ProjectInstanceAppProfileGetCall","Gets information about an app profile."],["ProjectInstanceAppProfileListCall","Lists information about app profiles in an instance."],["ProjectInstanceAppProfilePatchCall","Updates an app profile within an instance."],["ProjectInstanceClusterCreateCall","Creates a cluster within an instance."],["ProjectInstanceClusterDeleteCall","Deletes a cluster from an instance."],["ProjectInstanceClusterGetCall","Gets information about a cluster."],["ProjectInstanceClusterListCall","Lists information about clusters in an instance."],["ProjectInstanceClusterUpdateCall","Updates a cluster within an instance."],["ProjectInstanceCreateCall","Create an instance within a project."],["ProjectInstanceDeleteCall","Delete an instance from a project."],["ProjectInstanceGetCall","Gets information about an instance."],["ProjectInstanceGetIamPolicyCall","Gets the access control policy for an instance resource. Returns an empty policy if an instance exists but does not have a policy set."],["ProjectInstanceListCall","Lists information about instances in a project."],["ProjectInstancePartialUpdateInstanceCall","Partially updates an instance within a project. This method can modify all fields of an Instance and is the preferred way to update an Instance."],["ProjectInstanceSetIamPolicyCall","Sets the access control policy on an instance resource. Replaces any existing policy."],["ProjectInstanceTableCheckConsistencyCall","Checks replication consistency based on a consistency token, that is, if replication has caught up based on the conditions specified in the token and the check request."],["ProjectInstanceTableCreateCall","Creates a new table in the specified instance. The table can be created with a full set of initial column families, specified in the request."],["ProjectInstanceTableDeleteCall","Permanently deletes a specified table and all of its data."],["ProjectInstanceTableDropRowRangeCall","Permanently drop/delete a row range from a specified table. The request can specify whether to delete all rows in a table, or only those that match a particular prefix."],["ProjectInstanceTableGenerateConsistencyTokenCall","Generates a consistency token for a Table, which can be used in CheckConsistency to check whether mutations to the table that finished before this call started have been replicated. The tokens will be available for 90 days."],["ProjectInstanceTableGetCall","Gets metadata information about the specified table."],["ProjectInstanceTableGetIamPolicyCall","Gets the access control policy for an instance resource. Returns an empty policy if an table exists but does not have a policy set."],["ProjectInstanceTableListCall","Lists all tables served from a specified instance."],["ProjectInstanceTableModifyColumnFamilyCall","Performs a series of column family modifications on the specified table. Either all or none of the modifications will occur before this method returns, but data requests received prior to that point may see a table where only some modifications have taken effect."],["ProjectInstanceTableSetIamPolicyCall","Sets the access control policy on a table resource. Replaces any existing policy."],["ProjectInstanceTableTestIamPermissionCall","Returns permissions that the caller has on the specified table resource."],["ProjectInstanceTestIamPermissionCall","Returns permissions that the caller has on the specified instance resource."],["ProjectInstanceUpdateCall","Updates an instance within a project. This method updates only the display name and type for an Instance. To update other Instance properties, such as labels, use PartialUpdateInstance."],["ProjectLocationGetCall","Gets information about a location."],["ProjectLocationListCall","Lists information about the supported locations for this service."],["ProjectMethods","A builder providing access to all methods supported on project resources. It is not used directly, but through the `BigtableAdmin` hub."],["RangeResponseHeader",""],["ResumableUploadHelper","A utility type to perform a resumable upload from start to end."],["ServerError",""],["ServerMessage",""],["SetIamPolicyRequest","Request message for `SetIamPolicy` method."],["SingleClusterRouting","Unconditionally routes all read/write requests to a specific cluster. This option preserves read-your-writes consistency, but does not improve availability."],["Split","An initial split point for a newly created table."],["Status","The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by gRPC. The error model is designed to be:"],["Table","A collection of user data indexed by row, column, and timestamp. Each table is served using the resources of its parent cluster."],["TestIamPermissionsRequest","Request message for `TestIamPermissions` method."],["TestIamPermissionsResponse","Response message for `TestIamPermissions` method."],["Union","A GcRule which deletes cells matching any of the given rules."],["XUploadContentType","The `X-Upload-Content-Type` header."]],"trait":[["CallBuilder","Identifies types which represent builders for a particular resource method"],["Delegate","A trait specifying functionality to help controlling any request performed by the API. The trait has a conservative default implementation."],["Hub","Identifies the Hub. There is only one per library, this trait is supposed to make intended use more explicit. The hub allows to access all resource methods more easily."],["MethodsBuilder","Identifies types for building methods of a particular resource type"],["NestedType","Identifies types which are only used by other types internally. They have no special meaning, this trait just marks them for completeness."],["Part","Identifies types which are only used as part of other types, which usually are carrying the `Resource` trait."],["ReadSeek","A utility to specify reader types which provide seeking capabilities too"],["RequestValue","Identifies types which are used in API requests."],["Resource","Identifies types which can be inserted and deleted. Types with this trait are most commonly used by clients of this API."],["ResponseResult","Identifies types which are used in API responses."],["ToParts","A trait for all types that can convert themselves into a parts string"],["UnusedType","Identifies types which are not actually used by the API This might be a bug within the google API schema."]],"type":[["Result","A universal result type used as return for all calls."]]});