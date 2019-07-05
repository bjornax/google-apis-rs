initSidebarItems({"enum":[["Error",""],["Scope","Identifies the an OAuth2 authorization scope. A scope is needed when requesting an authorization token."]],"fn":[["remove_json_null_values",""]],"struct":[["AcceleratorType","A accelerator type that a Node can be configured with."],["Chunk",""],["ContentRange","Implements the Content-Range header, for serialization only"],["DefaultDelegate","A delegate with a conservative default implementation, which is used if no other delegate is set."],["DummyNetworkStream",""],["Empty","A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance:"],["ErrorResponse","A utility to represent detailed errors we might see in case there are BadRequests. The latter happen if the sent parameters or request structures are unsound"],["JsonServerError","A utility type which can decode a server response that indicates error"],["ListAcceleratorTypesResponse","Response for ListAcceleratorTypes."],["ListLocationsResponse","The response message for Locations.ListLocations."],["ListNodesResponse","Response for ListNodes."],["ListOperationsResponse","The response message for Operations.ListOperations."],["ListTensorFlowVersionsResponse","Response for ListTensorFlowVersions."],["Location","A resource that represents Google Cloud Platform location."],["MethodInfo","Contains information about an API request."],["MultiPartReader","Provides a `Read` interface that converts multiple parts into the protocol identified by RFC2387. Note: This implementation is just as rich as it needs to be to perform uploads to google APIs, and might not be a fully-featured implementation."],["NetworkEndpoint","A network endpoint over which a TPU worker can be reached."],["Node","A TPU instance."],["Operation","This resource represents a long-running operation that is the result of a network API call."],["ProjectLocationAcceleratorTypeGetCall","Gets AcceleratorType."],["ProjectLocationAcceleratorTypeListCall","Lists accelerator types supported by this API."],["ProjectLocationGetCall","Gets information about a location."],["ProjectLocationListCall","Lists information about the supported locations for this service."],["ProjectLocationNodeCreateCall","Creates a node."],["ProjectLocationNodeDeleteCall","Deletes a node."],["ProjectLocationNodeGetCall","Gets the details of a node."],["ProjectLocationNodeListCall","Lists nodes."],["ProjectLocationNodeReimageCall","Reimages a node's OS."],["ProjectLocationNodeStartCall","Starts a node."],["ProjectLocationNodeStopCall","Stops a node."],["ProjectLocationOperationCancelCall","Starts asynchronous cancellation on a long-running operation.  The server makes a best effort to cancel the operation, but success is not guaranteed.  If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.  Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`."],["ProjectLocationOperationDeleteCall","Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`."],["ProjectLocationOperationGetCall","Gets the latest state of a long-running operation.  Clients can use this method to poll the operation result at intervals as recommended by the API service."],["ProjectLocationOperationListCall","Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`."],["ProjectLocationTensorflowVersionGetCall","Gets TensorFlow Version."],["ProjectLocationTensorflowVersionListCall","List TensorFlow versions supported by this API."],["ProjectMethods","A builder providing access to all methods supported on project resources. It is not used directly, but through the `TPU` hub."],["RangeResponseHeader",""],["ReimageNodeRequest","Request for ReimageNode."],["ResumableUploadHelper","A utility type to perform a resumable upload from start to end."],["SchedulingConfig","There is no detailed description."],["ServerError",""],["ServerMessage",""],["StartNodeRequest","Request for StartNode."],["Status","The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by gRPC. Each `Status` message contains three pieces of data: error code, error message, and error details."],["StopNodeRequest","Request for StopNode."],["TPU","Central instance to access all TPU related resource activities"],["TensorFlowVersion","A tensorflow version that a Node can be configured with."],["XUploadContentType","The `X-Upload-Content-Type` header."]],"trait":[["CallBuilder","Identifies types which represent builders for a particular resource method"],["Delegate","A trait specifying functionality to help controlling any request performed by the API. The trait has a conservative default implementation."],["Hub","Identifies the Hub. There is only one per library, this trait is supposed to make intended use more explicit. The hub allows to access all resource methods more easily."],["MethodsBuilder","Identifies types for building methods of a particular resource type"],["NestedType","Identifies types which are only used by other types internally. They have no special meaning, this trait just marks them for completeness."],["Part","Identifies types which are only used as part of other types, which usually are carrying the `Resource` trait."],["ReadSeek","A utility to specify reader types which provide seeking capabilities too"],["RequestValue","Identifies types which are used in API requests."],["Resource","Identifies types which can be inserted and deleted. Types with this trait are most commonly used by clients of this API."],["ResponseResult","Identifies types which are used in API responses."],["ToParts","A trait for all types that can convert themselves into a parts string"],["UnusedType","Identifies types which are not actually used by the API This might be a bug within the google API schema."]],"type":[["Result","A universal result type used as return for all calls."]]});