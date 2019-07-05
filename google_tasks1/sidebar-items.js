initSidebarItems({"enum":[["Error",""],["Scope","Identifies the an OAuth2 authorization scope. A scope is needed when requesting an authorization token."]],"fn":[["remove_json_null_values",""]],"struct":[["Chunk",""],["ContentRange","Implements the Content-Range header, for serialization only"],["DefaultDelegate","A delegate with a conservative default implementation, which is used if no other delegate is set."],["DummyNetworkStream",""],["ErrorResponse","A utility to represent detailed errors we might see in case there are BadRequests. The latter happen if the sent parameters or request structures are unsound"],["JsonServerError","A utility type which can decode a server response that indicates error"],["MethodInfo","Contains information about an API request."],["MultiPartReader","Provides a `Read` interface that converts multiple parts into the protocol identified by RFC2387. Note: This implementation is just as rich as it needs to be to perform uploads to google APIs, and might not be a fully-featured implementation."],["RangeResponseHeader",""],["ResumableUploadHelper","A utility type to perform a resumable upload from start to end."],["ServerError",""],["ServerMessage",""],["Task","There is no detailed description."],["TaskClearCall","Clears all completed tasks from the specified task list. The affected tasks will be marked as 'hidden' and no longer be returned by default when retrieving all tasks for a task list."],["TaskDeleteCall","Deletes the specified task from the task list."],["TaskGetCall","Returns the specified task."],["TaskInsertCall","Creates a new task on the specified task list."],["TaskLinks","Collection of links. This collection is read-only."],["TaskList","There is no detailed description."],["TaskListCall","Returns all tasks in the specified task list."],["TaskLists","There is no detailed description."],["TaskMethods","A builder providing access to all methods supported on task resources. It is not used directly, but through the `TasksHub` hub."],["TaskMoveCall","Moves the specified task to another position in the task list. This can include putting it as a child task under a new parent and/or move it to a different position among its sibling tasks."],["TaskPatchCall","Updates the specified task. This method supports patch semantics."],["TaskUpdateCall","Updates the specified task."],["TasklistDeleteCall","Deletes the authenticated user's specified task list."],["TasklistGetCall","Returns the authenticated user's specified task list."],["TasklistInsertCall","Creates a new task list and adds it to the authenticated user's task lists."],["TasklistListCall","Returns all the authenticated user's task lists."],["TasklistMethods","A builder providing access to all methods supported on tasklist resources. It is not used directly, but through the `TasksHub` hub."],["TasklistPatchCall","Updates the authenticated user's specified task list. This method supports patch semantics."],["TasklistUpdateCall","Updates the authenticated user's specified task list."],["Tasks","There is no detailed description."],["TasksHub","Central instance to access all TasksHub related resource activities"],["XUploadContentType","The `X-Upload-Content-Type` header."]],"trait":[["CallBuilder","Identifies types which represent builders for a particular resource method"],["Delegate","A trait specifying functionality to help controlling any request performed by the API. The trait has a conservative default implementation."],["Hub","Identifies the Hub. There is only one per library, this trait is supposed to make intended use more explicit. The hub allows to access all resource methods more easily."],["MethodsBuilder","Identifies types for building methods of a particular resource type"],["NestedType","Identifies types which are only used by other types internally. They have no special meaning, this trait just marks them for completeness."],["Part","Identifies types which are only used as part of other types, which usually are carrying the `Resource` trait."],["ReadSeek","A utility to specify reader types which provide seeking capabilities too"],["RequestValue","Identifies types which are used in API requests."],["Resource","Identifies types which can be inserted and deleted. Types with this trait are most commonly used by clients of this API."],["ResponseResult","Identifies types which are used in API responses."],["ToParts","A trait for all types that can convert themselves into a parts string"],["UnusedType","Identifies types which are not actually used by the API This might be a bug within the google API schema."]],"type":[["Result","A universal result type used as return for all calls."]]});