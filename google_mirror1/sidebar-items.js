initSidebarItems({"enum":[["Error",""],["Scope","Identifies the an OAuth2 authorization scope. A scope is needed when requesting an authorization token."]],"fn":[["remove_json_null_values",""]],"struct":[["Account","Represents an account passed into the Account Manager on Glass."],["AccountInsertCall","Inserts a new account for a user"],["AccountMethods","A builder providing access to all methods supported on account resources. It is not used directly, but through the `Mirror` hub."],["Attachment","Represents media content, such as a photo, that can be attached to a timeline item."],["AttachmentsListResponse","A list of Attachments. This is the response from the server to GET requests on the attachments collection."],["AuthToken","There is no detailed description."],["Chunk",""],["Command","A single menu command that is part of a Contact."],["Contact","A person or group that can be used as a creator or a contact."],["ContactDeleteCall","Deletes a contact."],["ContactGetCall","Gets a single contact by ID."],["ContactInsertCall","Inserts a new contact."],["ContactListCall","Retrieves a list of contacts for the authenticated user."],["ContactMethods","A builder providing access to all methods supported on contact resources. It is not used directly, but through the `Mirror` hub."],["ContactPatchCall","Updates a contact in place. This method supports patch semantics."],["ContactUpdateCall","Updates a contact in place."],["ContactsListResponse","A list of Contacts representing contacts. This is the response from the server to GET requests on the contacts collection."],["ContentRange","Implements the Content-Range header, for serialization only"],["DefaultDelegate","A delegate with a conservative default implementation, which is used if no other delegate is set."],["DummyNetworkStream",""],["ErrorResponse","A utility to represent detailed errors we might see in case there are BadRequests. The latter happen if the sent parameters or request structures are unsound"],["JsonServerError","A utility type which can decode a server response that indicates error"],["Location","A geographic location that can be associated with a timeline item."],["LocationGetCall","Gets a single location by ID."],["LocationListCall","Retrieves a list of locations for the user."],["LocationMethods","A builder providing access to all methods supported on location resources. It is not used directly, but through the `Mirror` hub."],["LocationsListResponse","A list of Locations. This is the response from the server to GET requests on the locations collection."],["MenuItem","A custom menu item that can be presented to the user by a timeline item."],["MenuValue","A single value that is part of a MenuItem."],["MethodInfo","Contains information about an API request."],["Mirror","Central instance to access all Mirror related resource activities"],["MultiPartReader","Provides a `Read` interface that converts multiple parts into the protocol identified by RFC2387. Note: This implementation is just as rich as it needs to be to perform uploads to google APIs, and might not be a fully-featured implementation."],["Notification","A notification delivered by the API."],["NotificationConfig","Controls how notifications for a timeline item are presented to the user."],["RangeResponseHeader",""],["ResumableUploadHelper","A utility type to perform a resumable upload from start to end."],["ServerError",""],["ServerMessage",""],["Setting","A setting for Glass."],["SettingGetCall","Gets a single setting by ID."],["SettingMethods","A builder providing access to all methods supported on setting resources. It is not used directly, but through the `Mirror` hub."],["Subscription","A subscription to events on a collection."],["SubscriptionDeleteCall","Deletes a subscription."],["SubscriptionInsertCall","Creates a new subscription."],["SubscriptionListCall","Retrieves a list of subscriptions for the authenticated user and service."],["SubscriptionMethods","A builder providing access to all methods supported on subscription resources. It is not used directly, but through the `Mirror` hub."],["SubscriptionUpdateCall","Updates an existing subscription in place."],["SubscriptionsListResponse","A list of Subscriptions. This is the response from the server to GET requests on the subscription collection."],["TimelineAttachmentDeleteCall","Deletes an attachment from a timeline item."],["TimelineAttachmentGetCall","Retrieves an attachment on a timeline item by item ID and attachment ID."],["TimelineAttachmentInsertCall","Adds a new attachment to a timeline item."],["TimelineAttachmentListCall","Returns a list of attachments for a timeline item."],["TimelineDeleteCall","Deletes a timeline item."],["TimelineGetCall","Gets a single timeline item by ID."],["TimelineInsertCall","Inserts a new item into the timeline."],["TimelineItem","Each item in the user's timeline is represented as a TimelineItem JSON structure, described below."],["TimelineListCall","Retrieves a list of timeline items for the authenticated user."],["TimelineListResponse","A list of timeline items. This is the response from the server to GET requests on the timeline collection."],["TimelineMethods","A builder providing access to all methods supported on timeline resources. It is not used directly, but through the `Mirror` hub."],["TimelinePatchCall","Updates a timeline item in place. This method supports patch semantics."],["TimelineUpdateCall","Updates a timeline item in place."],["UserAction","Represents an action taken by the user that triggered a notification."],["UserData","There is no detailed description."],["XUploadContentType","The `X-Upload-Content-Type` header."]],"trait":[["CallBuilder","Identifies types which represent builders for a particular resource method"],["Delegate","A trait specifying functionality to help controlling any request performed by the API. The trait has a conservative default implementation."],["Hub","Identifies the Hub. There is only one per library, this trait is supposed to make intended use more explicit. The hub allows to access all resource methods more easily."],["MethodsBuilder","Identifies types for building methods of a particular resource type"],["NestedType","Identifies types which are only used by other types internally. They have no special meaning, this trait just marks them for completeness."],["Part","Identifies types which are only used as part of other types, which usually are carrying the `Resource` trait."],["ReadSeek","A utility to specify reader types which provide seeking capabilities too"],["RequestValue","Identifies types which are used in API requests."],["Resource","Identifies types which can be inserted and deleted. Types with this trait are most commonly used by clients of this API."],["ResponseResult","Identifies types which are used in API responses."],["ToParts","A trait for all types that can convert themselves into a parts string"],["UnusedType","Identifies types which are not actually used by the API This might be a bug within the google API schema."]],"type":[["Result","A universal result type used as return for all calls."]]});