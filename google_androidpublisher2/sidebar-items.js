initSidebarItems({"enum":[["Error",""],["Scope","Identifies the an OAuth2 authorization scope. A scope is needed when requesting an authorization token."]],"fn":[["remove_json_null_values",""]],"struct":[["AndroidPublisher","Central instance to access all AndroidPublisher related resource activities"],["Apk","There is no detailed description."],["ApkBinary","Represents the binary payload of an APK."],["ApkListing","There is no detailed description."],["ApkListingsListResponse","There is no detailed description."],["ApksAddExternallyHostedRequest","There is no detailed description."],["ApksAddExternallyHostedResponse","There is no detailed description."],["ApksListResponse","There is no detailed description."],["AppDetails","There is no detailed description."],["AppEdit","Represents an edit of an app. An edit allows clients to make multiple changes before committing them in one operation."],["Bundle","There is no detailed description."],["BundlesListResponse","There is no detailed description."],["Chunk",""],["Comment","There is no detailed description."],["ContentRange","Implements the Content-Range header, for serialization only"],["DefaultDelegate","A delegate with a conservative default implementation, which is used if no other delegate is set."],["DeobfuscationFile","Represents a deobfuscation file."],["DeobfuscationFilesUploadResponse","There is no detailed description."],["DeveloperComment","There is no detailed description."],["DeviceMetadata","There is no detailed description."],["DummyNetworkStream",""],["EditApkAddexternallyhostedCall","Creates a new APK without uploading the APK itself to Google Play, instead hosting the APK at a specified URL. This function is only available to enterprises using Google Play for Work whose application is configured to restrict distribution to the enterprise domain."],["EditApkListCall","A builder for the apks.list method supported by a edit resource. It is not used directly, but through a `EditMethods` instance."],["EditApkUploadCall","A builder for the apks.upload method supported by a edit resource. It is not used directly, but through a `EditMethods` instance."],["EditApklistingDeleteCall","Deletes the APK-specific localized listing for a specified APK and language code."],["EditApklistingDeleteallCall","Deletes all the APK-specific localized listings for a specified APK."],["EditApklistingGetCall","Fetches the APK-specific localized listing for a specified APK and language code."],["EditApklistingListCall","Lists all the APK-specific localized listings for a specified APK."],["EditApklistingPatchCall","Updates or creates the APK-specific localized listing for a specified APK and language code. This method supports patch semantics."],["EditApklistingUpdateCall","Updates or creates the APK-specific localized listing for a specified APK and language code."],["EditBundleListCall","A builder for the bundles.list method supported by a edit resource. It is not used directly, but through a `EditMethods` instance."],["EditBundleUploadCall","Uploads a new Android App Bundle to this edit. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See: https://developers.google.com/api-client-library/java/google-api-java-client/errors for an example in java."],["EditCommitCall","Commits/applies the changes made in this edit back to the app."],["EditDeleteCall","Deletes an edit for an app. Creating a new edit will automatically delete any of your previous edits so this method need only be called if you want to preemptively abandon an edit."],["EditDeobfuscationfileUploadCall","Uploads the deobfuscation file of the specified APK. If a deobfuscation file already exists, it will be replaced."],["EditDetailGetCall","Fetches app details for this edit. This includes the default language and developer support contact information."],["EditDetailPatchCall","Updates app details for this edit. This method supports patch semantics."],["EditDetailUpdateCall","Updates app details for this edit."],["EditExpansionfileGetCall","Fetches the Expansion File configuration for the APK specified."],["EditExpansionfilePatchCall","Updates the APK's Expansion File configuration to reference another APK's Expansion Files. To add a new Expansion File use the Upload method. This method supports patch semantics."],["EditExpansionfileUpdateCall","Updates the APK's Expansion File configuration to reference another APK's Expansion Files. To add a new Expansion File use the Upload method."],["EditExpansionfileUploadCall","Uploads and attaches a new Expansion File to the APK specified."],["EditGetCall","Returns information about the edit specified. Calls will fail if the edit is no long active (e.g. has been deleted, superseded or expired)."],["EditImageDeleteCall","Deletes the image (specified by id) from the edit."],["EditImageDeleteallCall","Deletes all images for the specified language and image type."],["EditImageListCall","Lists all images for the specified language and image type."],["EditImageUploadCall","Uploads a new image and adds it to the list of images for the specified language and image type."],["EditInsertCall","Creates a new edit for an app, populated with the app's current state."],["EditListingDeleteCall","Deletes the specified localized store listing from an edit."],["EditListingDeleteallCall","Deletes all localized listings from an edit."],["EditListingGetCall","Fetches information about a localized store listing."],["EditListingListCall","Returns all of the localized store listings attached to this edit."],["EditListingPatchCall","Creates or updates a localized store listing. This method supports patch semantics."],["EditListingUpdateCall","Creates or updates a localized store listing."],["EditMethods","A builder providing access to all methods supported on edit resources. It is not used directly, but through the `AndroidPublisher` hub."],["EditTesterGetCall","A builder for the testers.get method supported by a edit resource. It is not used directly, but through a `EditMethods` instance."],["EditTesterPatchCall","A builder for the testers.patch method supported by a edit resource. It is not used directly, but through a `EditMethods` instance."],["EditTesterUpdateCall","A builder for the testers.update method supported by a edit resource. It is not used directly, but through a `EditMethods` instance."],["EditTrackGetCall","Fetches the track configuration for the specified track type. Includes the APK version codes that are in this track."],["EditTrackListCall","Lists all the track configurations for this edit."],["EditTrackPatchCall","Updates the track configuration for the specified track type. This method supports patch semantics."],["EditTrackUpdateCall","Updates the track configuration for the specified track type."],["EditValidateCall","Checks that the edit can be successfully committed. The edit's changes are not applied to the live app."],["ErrorResponse","A utility to represent detailed errors we might see in case there are BadRequests. The latter happen if the sent parameters or request structures are unsound"],["ExpansionFile","There is no detailed description."],["ExpansionFilesUploadResponse","There is no detailed description."],["ExternallyHostedApk","Defines an APK available for this application that is hosted externally and not uploaded to Google Play. This function is only available to enterprises who are using Google Play for Work, and whos application is restricted to the enterprise private channel"],["ExternallyHostedApkUsesPermission","A permission used by this APK."],["Image","There is no detailed description."],["ImagesDeleteAllResponse","There is no detailed description."],["ImagesListResponse","There is no detailed description."],["ImagesUploadResponse","There is no detailed description."],["InAppProduct","There is no detailed description."],["InAppProductListing","There is no detailed description."],["InappproductDeleteCall","Delete an in-app product for an app."],["InappproductGetCall","Returns information about the in-app product specified."],["InappproductInsertCall","Creates a new in-app product for an app."],["InappproductListCall","List all the in-app products for an Android app, both subscriptions and managed in-app products.."],["InappproductMethods","A builder providing access to all methods supported on inappproduct resources. It is not used directly, but through the `AndroidPublisher` hub."],["InappproductPatchCall","Updates the details of an in-app product. This method supports patch semantics."],["InappproductUpdateCall","Updates the details of an in-app product."],["InappproductsListResponse","There is no detailed description."],["JsonServerError","A utility type which can decode a server response that indicates error"],["Listing","There is no detailed description."],["ListingsListResponse","There is no detailed description."],["MethodInfo","Contains information about an API request."],["MonthDay","There is no detailed description."],["MultiPartReader","Provides a `Read` interface that converts multiple parts into the protocol identified by RFC2387. Note: This implementation is just as rich as it needs to be to perform uploads to google APIs, and might not be a fully-featured implementation."],["OrderMethods","A builder providing access to all methods supported on order resources. It is not used directly, but through the `AndroidPublisher` hub."],["OrderRefundCall","Refund a user's subscription or in-app purchase order."],["PageInfo","There is no detailed description."],["Price","There is no detailed description."],["ProductPurchase","A ProductPurchase resource indicates the status of a user's inapp product purchase."],["Prorate","There is no detailed description."],["PurchaseMethods","A builder providing access to all methods supported on purchase resources. It is not used directly, but through the `AndroidPublisher` hub."],["PurchaseProductGetCall","Checks the purchase and consumption status of an inapp item."],["PurchaseSubscriptionCancelCall","Cancels a user's subscription purchase. The subscription remains valid until its expiration time."],["PurchaseSubscriptionDeferCall","Defers a user's subscription purchase until a specified future expiration time."],["PurchaseSubscriptionGetCall","Checks whether a user's subscription purchase is valid and returns its expiry time."],["PurchaseSubscriptionRefundCall","Refunds a user's subscription purchase, but the subscription remains valid until its expiration time and it will continue to recur."],["PurchaseSubscriptionRevokeCall","Refunds and immediately revokes a user's subscription purchase. Access to the subscription will be terminated immediately and it will stop recurring."],["PurchaseVoidedpurchaseListCall","Lists the purchases that were canceled, refunded or charged-back."],["RangeResponseHeader",""],["ResumableUploadHelper","A utility type to perform a resumable upload from start to end."],["Review","There is no detailed description."],["ReviewGetCall","Returns a single review."],["ReviewListCall","Returns a list of reviews. Only reviews from last week will be returned."],["ReviewMethods","A builder providing access to all methods supported on review resources. It is not used directly, but through the `AndroidPublisher` hub."],["ReviewReplyCall","Reply to a single review, or update an existing reply."],["ReviewReplyResult","There is no detailed description."],["ReviewsListResponse","There is no detailed description."],["ReviewsReplyRequest","There is no detailed description."],["ReviewsReplyResponse","There is no detailed description."],["Season","There is no detailed description."],["ServerError",""],["ServerMessage",""],["SubscriptionCancelSurveyResult","Information provided by the user when they complete the subscription cancellation flow (cancellation reason survey)."],["SubscriptionDeferralInfo","A SubscriptionDeferralInfo contains the data needed to defer a subscription purchase to a future expiry time."],["SubscriptionPriceChange","Contains the price change information for a subscription that can be used to control the user journey for the price change in the app. This can be in the form of seeking confirmation from the user or tailoring the experience for a successful conversion."],["SubscriptionPurchase","A SubscriptionPurchase resource indicates the status of a user's subscription purchase."],["SubscriptionPurchasesDeferRequest","There is no detailed description."],["SubscriptionPurchasesDeferResponse","There is no detailed description."],["Testers","There is no detailed description."],["Timestamp","There is no detailed description."],["TokenPagination","There is no detailed description."],["Track","There is no detailed description."],["TracksListResponse","There is no detailed description."],["UserComment","There is no detailed description."],["VoidedPurchase","A VoidedPurchase resource indicates a purchase that was either canceled/refunded/charged-back."],["VoidedPurchasesListResponse","There is no detailed description."],["XUploadContentType","The `X-Upload-Content-Type` header."]],"trait":[["CallBuilder","Identifies types which represent builders for a particular resource method"],["Delegate","A trait specifying functionality to help controlling any request performed by the API. The trait has a conservative default implementation."],["Hub","Identifies the Hub. There is only one per library, this trait is supposed to make intended use more explicit. The hub allows to access all resource methods more easily."],["MethodsBuilder","Identifies types for building methods of a particular resource type"],["NestedType","Identifies types which are only used by other types internally. They have no special meaning, this trait just marks them for completeness."],["Part","Identifies types which are only used as part of other types, which usually are carrying the `Resource` trait."],["ReadSeek","A utility to specify reader types which provide seeking capabilities too"],["RequestValue","Identifies types which are used in API requests."],["Resource","Identifies types which can be inserted and deleted. Types with this trait are most commonly used by clients of this API."],["ResponseResult","Identifies types which are used in API responses."],["ToParts","A trait for all types that can convert themselves into a parts string"],["UnusedType","Identifies types which are not actually used by the API This might be a bug within the google API schema."]],"type":[["Result","A universal result type used as return for all calls."]]});