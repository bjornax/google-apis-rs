initSidebarItems({"enum":[["Error",""],["Scope","Identifies the an OAuth2 authorization scope. A scope is needed when requesting an authorization token."]],"fn":[["remove_json_null_values",""]],"struct":[["AbsoluteDateRange","An absolute date range, specified by its start date and end date. The supported range of dates begins 30 days before today and ends today. Validity checked upon filter set creation. If a filter set with an absolute date range is run at a later date more than 30 days after start_date, it will fail."],["AcceptProposalRequest","Request to accept a proposal."],["AccountClientCreateCall","Creates a new client buyer."],["AccountClientGetCall","Gets a client buyer with a given client account ID."],["AccountClientInvitationCreateCall","Creates and sends out an email invitation to access an Ad Exchange client buyer account."],["AccountClientInvitationGetCall","Retrieves an existing client user invitation."],["AccountClientInvitationListCall","Lists all the client users invitations for a client with a given account ID."],["AccountClientListCall","Lists all the clients for the current sponsor buyer."],["AccountClientUpdateCall","Updates an existing client buyer."],["AccountClientUserGetCall","Retrieves an existing client user."],["AccountClientUserListCall","Lists all the known client users for a specified sponsor buyer account ID."],["AccountClientUserUpdateCall","Updates an existing client user. Only the user status can be changed on update."],["AccountCreativeCreateCall","Creates a creative."],["AccountCreativeDealAssociationAddCall","Associate an existing deal with a creative."],["AccountCreativeDealAssociationListCall","List all creative-deal associations."],["AccountCreativeDealAssociationRemoveCall","Remove the association between a deal and a creative."],["AccountCreativeGetCall","Gets a creative."],["AccountCreativeListCall","Lists creatives."],["AccountCreativeStopWatchingCall","Stops watching a creative. Will stop push notifications being sent to the topics when the creative changes status."],["AccountCreativeUpdateCall","Updates a creative."],["AccountCreativeWatchCall","Watches a creative. Will result in push notifications being sent to the topic when the creative changes status."],["AccountFinalizedProposalListCall","List finalized proposals, regardless if a proposal is being renegotiated. A filter expression (PQL query) may be specified to filter the results. The notes will not be returned."],["AccountMethods","A builder providing access to all methods supported on account resources. It is not used directly, but through the `AdExchangeBuyerII` hub."],["AccountProductGetCall","Gets the requested product by ID."],["AccountProductListCall","List all products visible to the buyer (optionally filtered by the specified PQL query)."],["AccountProposalAcceptCall","Mark the proposal as accepted at the given revision number. If the number does not match the server's revision number an `ABORTED` error message will be returned. This call updates the proposal_state from `PROPOSED` to `BUYER_ACCEPTED`, or from `SELLER_ACCEPTED` to `FINALIZED`."],["AccountProposalAddNoteCall","Create a new note and attach it to the proposal. The note is assigned a unique ID by the server. The proposal revision number will not increase when associated with a new note."],["AccountProposalCancelNegotiationCall","Cancel an ongoing negotiation on a proposal. This does not cancel or end serving for the deals if the proposal has been finalized, but only cancels a negotiation unilaterally."],["AccountProposalCompleteSetupCall","Update the given proposal to indicate that setup has been completed. This method is called by the buyer when the line items have been created on their end for a finalized proposal and all the required creatives have been uploaded using the creatives API. This call updates the `is_setup_completed` bit on the proposal and also notifies the seller. The server will advance the revision number of the most recent proposal."],["AccountProposalCreateCall","Create the given proposal. Each created proposal and any deals it contains are assigned a unique ID by the server."],["AccountProposalGetCall","Gets a proposal given its ID. The proposal is returned at its head revision."],["AccountProposalListCall","List proposals. A filter expression (PQL query) may be specified to filter the results. To retrieve all finalized proposals, regardless if a proposal is being renegotiated, see the FinalizedProposals resource. Note that Bidder/ChildSeat relationships differ from the usual behavior. A Bidder account can only see its child seats' proposals by specifying the ChildSeat's accountId in the request path."],["AccountProposalPauseCall","Update the given proposal to pause serving. This method will set the `DealServingMetadata.DealPauseStatus.has_buyer_paused` bit to true for all deals in the proposal."],["AccountProposalResumeCall","Update the given proposal to resume serving. This method will set the `DealServingMetadata.DealPauseStatus.has_buyer_paused` bit to false for all deals in the proposal."],["AccountProposalUpdateCall","Update the given proposal at the client known revision number. If the server revision has advanced since the passed-in `proposal.proposal_revision`, an `ABORTED` error message will be returned. Only the buyer-modifiable fields of the proposal will be updated."],["AccountPublisherProfileGetCall","Gets the requested publisher profile by id."],["AccountPublisherProfileListCall","List all publisher profiles visible to the buyer"],["AdExchangeBuyerII","Central instance to access all AdExchangeBuyerII related resource activities"],["AdSize","Represents size of a single ad slot, or a creative."],["AdTechnologyProviders","Detected ad technology provider information."],["AddDealAssociationRequest","A request for associating a deal and a creative."],["AddNoteRequest","Request message for adding a note to a given proposal."],["AppContext","Output only. The app type the restriction applies to for mobile device."],["AuctionContext","Output only. The auction type the restriction applies to."],["BidMetricsRow","The set of metrics that are measured in numbers of bids, representing how many bids with the specified dimension values were considered eligible at each stage of the bidding funnel;"],["BidResponseWithoutBidsStatusRow","The number of impressions with the specified dimension values that were considered to have no applicable bids, as described by the specified status."],["BidderAccountFilterSetBidMetricListCall","Lists all metrics that are measured in terms of number of bids."],["BidderAccountFilterSetBidResponseErrorListCall","List all errors that occurred in bid responses, with the number of bid responses affected for each reason."],["BidderAccountFilterSetBidResponsesWithoutBidListCall","List all reasons for which bid responses were considered to have no applicable bids, with the number of bid responses affected for each reason."],["BidderAccountFilterSetCreateCall","Creates the specified filter set for the account with the given account ID."],["BidderAccountFilterSetDeleteCall","Deletes the requested filter set from the account with the given account ID."],["BidderAccountFilterSetFilteredBidCreativeListCall","List all creatives associated with a specific reason for which bids were filtered, with the number of bids filtered for each creative."],["BidderAccountFilterSetFilteredBidDetailListCall","List all details associated with a specific reason for which bids were filtered, with the number of bids filtered for each detail."],["BidderAccountFilterSetFilteredBidListCall","List all reasons for which bids were filtered, with the number of bids filtered for each reason."],["BidderAccountFilterSetFilteredBidRequestListCall","List all reasons that caused a bid request not to be sent for an impression, with the number of bid requests not sent for each reason."],["BidderAccountFilterSetGetCall","Retrieves the requested filter set for the account with the given account ID."],["BidderAccountFilterSetImpressionMetricListCall","Lists all metrics that are measured in terms of number of impressions."],["BidderAccountFilterSetListCall","Lists all filter sets for the account with the given account ID."],["BidderAccountFilterSetLosingBidListCall","List all reasons for which bids lost in the auction, with the number of bids that lost for each reason."],["BidderAccountFilterSetNonBillableWinningBidListCall","List all reasons for which winning bids were not billable, with the number of bids not billed for each reason."],["BidderFilterSetBidMetricListCall","Lists all metrics that are measured in terms of number of bids."],["BidderFilterSetBidResponseErrorListCall","List all errors that occurred in bid responses, with the number of bid responses affected for each reason."],["BidderFilterSetBidResponsesWithoutBidListCall","List all reasons for which bid responses were considered to have no applicable bids, with the number of bid responses affected for each reason."],["BidderFilterSetCreateCall","Creates the specified filter set for the account with the given account ID."],["BidderFilterSetDeleteCall","Deletes the requested filter set from the account with the given account ID."],["BidderFilterSetFilteredBidCreativeListCall","List all creatives associated with a specific reason for which bids were filtered, with the number of bids filtered for each creative."],["BidderFilterSetFilteredBidDetailListCall","List all details associated with a specific reason for which bids were filtered, with the number of bids filtered for each detail."],["BidderFilterSetFilteredBidListCall","List all reasons for which bids were filtered, with the number of bids filtered for each reason."],["BidderFilterSetFilteredBidRequestListCall","List all reasons that caused a bid request not to be sent for an impression, with the number of bid requests not sent for each reason."],["BidderFilterSetGetCall","Retrieves the requested filter set for the account with the given account ID."],["BidderFilterSetImpressionMetricListCall","Lists all metrics that are measured in terms of number of impressions."],["BidderFilterSetListCall","Lists all filter sets for the account with the given account ID."],["BidderFilterSetLosingBidListCall","List all reasons for which bids lost in the auction, with the number of bids that lost for each reason."],["BidderFilterSetNonBillableWinningBidListCall","List all reasons for which winning bids were not billable, with the number of bids not billed for each reason."],["BidderMethods","A builder providing access to all methods supported on bidder resources. It is not used directly, but through the `AdExchangeBuyerII` hub."],["Buyer","Represents a buyer of inventory. Each buyer is identified by a unique Authorized Buyers account ID."],["CalloutStatusRow","The number of impressions with the specified dimension values where the corresponding bid request or bid response was not successful, as described by the specified callout status."],["CancelNegotiationRequest","Request to cancel an ongoing negotiation."],["Chunk",""],["Client","A client resource represents a client buyer—an agency, a brand, or an advertiser customer of the sponsor buyer. Users associated with the client buyer have restricted access to the Marketplace and certain other sections of the Authorized Buyers UI based on the role granted to the client buyer. All fields are required unless otherwise specified."],["ClientUser","A client user is created under a client buyer and has restricted access to the Marketplace and certain other sections of the Authorized Buyers UI based on the role granted to the associated client buyer."],["ClientUserInvitation","An invitation for a new client user to get access to the Authorized Buyers UI. All fields are required unless otherwise specified."],["CompleteSetupRequest","Request message for indicating that the proposal's setup step is complete."],["ContactInformation","Contains information on how a buyer or seller can be reached."],["ContentRange","Implements the Content-Range header, for serialization only"],["Correction","Output only. Shows any corrections that were applied to this creative."],["Creative","A creative and its classification data."],["CreativeDealAssociation","The association between a creative and a deal."],["CreativeRestrictions","Represents creative restrictions associated to Programmatic Guaranteed/ Preferred Deal in Ad Manager. This doesn't apply to Private Auction and AdX Preferred Deals."],["CreativeSize","Specifies the size of the creative."],["CreativeSpecification","Represents information for a creative that is associated with a Programmatic Guaranteed/Preferred Deal in Ad Manager."],["CreativeStatusRow","The number of bids with the specified dimension values that did not win the auction (either were filtered pre-auction or lost the auction), as described by the specified creative status."],["CriteriaTargeting","Generic targeting used for targeting dimensions that contains a list of included and excluded numeric IDs."],["Date","Represents a whole or partial calendar date, e.g. a birthday. The time of day and time zone are either specified elsewhere or are not significant. The date is relative to the Proleptic Gregorian Calendar. This can represent:"],["DayPart","Daypart targeting message that specifies if the ad can be shown only during certain parts of a day/week."],["DayPartTargeting","Specifies the day part targeting criteria."],["Deal","A deal represents a segment of inventory for displaying ads on. A proposal can contain multiple deals. A deal contains the terms and targeting information that is used for serving."],["DealPauseStatus","Tracks which parties (if any) have paused a deal. The deal is considered paused if either hasBuyerPaused or hasSellPaused is true."],["DealServingMetadata","Message captures metadata about the serving status of a deal."],["DealTerms","The deal terms specify the details of a Product/deal. They specify things like price per buyer, the type of pricing model (e.g., fixed price, auction) and expected impressions from the publisher."],["DefaultDelegate","A delegate with a conservative default implementation, which is used if no other delegate is set."],["DeliveryControl","Message contains details about how the deals will be paced."],["Disapproval","Output only. The reason and details for a disapproval."],["DummyNetworkStream",""],["Empty","A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance:"],["ErrorResponse","A utility to represent detailed errors we might see in case there are BadRequests. The latter happen if the sent parameters or request structures are unsound"],["FilterSet","A set of filters that is applied to a request for data. Within a filter set, an AND operation is performed across the filters represented by each field. An OR operation is performed across the filters represented by the multiple values of a repeated field, e.g., \"format=VIDEO AND deal_id=12 AND (seller_network_id=34 OR seller_network_id=56)\"."],["FilteredBidCreativeRow","The number of filtered bids with the specified dimension values that have the specified creative."],["FilteredBidDetailRow","The number of filtered bids with the specified dimension values, among those filtered due to the requested filtering reason (i.e. creative status), that have the specified detail."],["FirstPartyMobileApplicationTargeting","Represents a list of targeted and excluded mobile application IDs that publishers own. Mobile application IDs are from App Store and Google Play Store. Android App ID, for example, com.google.android.apps.maps, can be found in Google Play Store URL. iOS App ID (which is a number) can be found at the end of iTunes store URL. First party mobile applications is either included or excluded."],["FrequencyCap","Frequency cap."],["GuaranteedFixedPriceTerms","Terms for Programmatic Guaranteed Deals."],["HtmlContent","HTML content for a creative."],["Image","An image resource. You may provide a larger image than was requested, so long as the aspect ratio is preserved."],["ImpressionMetricsRow","The set of metrics that are measured in numbers of impressions, representing how many impressions with the specified dimension values were considered eligible at each stage of the bidding funnel."],["InventorySizeTargeting","Represents the size of an ad unit that can be targeted on an ad request. It only applies to Private Auction, AdX Preferred Deals and Auction Packages. This targeting does not apply to Programmatic Guaranteed and Preferred Deals in Ad Manager."],["JsonServerError","A utility type which can decode a server response that indicates error"],["ListBidMetricsResponse","Response message for listing the metrics that are measured in number of bids."],["ListBidResponseErrorsResponse","Response message for listing all reasons that bid responses resulted in an error."],["ListBidResponsesWithoutBidsResponse","Response message for listing all reasons that bid responses were considered to have no applicable bids."],["ListClientUserInvitationsResponse","There is no detailed description."],["ListClientUsersResponse","There is no detailed description."],["ListClientsResponse","There is no detailed description."],["ListCreativeStatusBreakdownByCreativeResponse","Response message for listing all creatives associated with a given filtered bid reason."],["ListCreativeStatusBreakdownByDetailResponse","Response message for listing all details associated with a given filtered bid reason."],["ListCreativesResponse","A response for listing creatives."],["ListDealAssociationsResponse","A response for listing creative and deal associations"],["ListFilterSetsResponse","Response message for listing filter sets."],["ListFilteredBidRequestsResponse","Response message for listing all reasons that bid requests were filtered and not sent to the buyer."],["ListFilteredBidsResponse","Response message for listing all reasons that bids were filtered from the auction."],["ListImpressionMetricsResponse","Response message for listing the metrics that are measured in number of impressions."],["ListLosingBidsResponse","Response message for listing all reasons that bids lost in the auction."],["ListNonBillableWinningBidsResponse","Response message for listing all reasons for which a buyer was not billed for a winning bid."],["ListProductsResponse","Response message for listing products visible to the buyer."],["ListProposalsResponse","Response message for listing proposals."],["ListPublisherProfilesResponse","Response message for profiles visible to the buyer."],["LocationContext","Output only. The Geo criteria the restriction applies to."],["MarketplaceTargeting","Targeting represents different criteria that can be used by advertisers to target ad inventory. For example, they can choose to target ad requests only if the user is in the US. Multiple types of targeting are always applied as a logical AND, unless noted otherwise."],["MethodInfo","Contains information about an API request."],["MetricValue","A metric value, with an expected value and a variance; represents a count that may be either exact or estimated (i.e. when sampled)."],["MobileApplicationTargeting","Mobile application targeting settings."],["Money","Represents an amount of money with its currency type."],["MultiPartReader","Provides a `Read` interface that converts multiple parts into the protocol identified by RFC2387. Note: This implementation is just as rich as it needs to be to perform uploads to google APIs, and might not be a fully-featured implementation."],["NativeContent","Native content for a creative."],["NonBillableWinningBidStatusRow","The number of winning bids with the specified dimension values for which the buyer was not billed, as described by the specified status."],["NonGuaranteedAuctionTerms","Terms for Private Auctions. Note that Private Auctions can be created only by the seller, but they can be returned in a get or list request."],["NonGuaranteedFixedPriceTerms","Terms for Preferred Deals. Note that Preferred Deals cannot be created via the API at this time, but can be returned in a get or list request."],["Note","A proposal may be associated to several notes."],["OperatingSystemTargeting","Represents targeting information for operating systems."],["PauseProposalRequest","Request message to pause serving for an already-finalized proposal."],["PlacementTargeting","Represents targeting about where the ads can appear, e.g., certain sites or mobile applications. Different placement targeting types will be logically OR'ed."],["PlatformContext","Output only. The type of platform the restriction applies to."],["Price","Represents a price and a pricing type for a product / deal."],["PricePerBuyer","Used to specify pricing rules for buyers/advertisers. Each PricePerBuyer in a product can become 0 or 1 deals. To check if there is a PricePerBuyer for a particular buyer or buyer/advertiser pair, we look for the most specific matching rule - we first look for a rule matching the buyer and advertiser, next a rule with the buyer but an empty advertiser list, and otherwise look for a matching rule where no buyer is set."],["PrivateData","Buyers are allowed to store certain types of private data in a proposal/deal."],["Product","Note: this resource requires whitelisting for access. Please contact your account manager for access to Marketplace resources."],["Proposal","Note: this resource requires whitelisting for access. Please contact your account manager for access to Marketplace resources."],["PublisherProfile","Note: this resource requires whitelisting for access. Please contact your account manager for access to Marketplace resources."],["RangeResponseHeader",""],["RealtimeTimeRange","An open-ended realtime time range specified by the start timestamp. For filter sets that specify a realtime time range RTB metrics continue to be aggregated throughout the lifetime of the filter set."],["RelativeDateRange","A relative date range, specified by an offset and a duration. The supported range of dates begins 30 days before today and ends today, i.e., the limits for these values are: offset_days >= 0 duration_days >= 1 offset_days + duration_days <= 30"],["RemoveDealAssociationRequest","A request for removing the association between a deal and a creative."],["ResumableUploadHelper","A utility type to perform a resumable upload from start to end."],["ResumeProposalRequest","Request message to resume (unpause) serving for an already-finalized proposal."],["RowDimensions","A response may include multiple rows, breaking down along various dimensions. Encapsulates the values of all dimensions for a given row."],["SecurityContext","Output only. A security context."],["Seller","Represents a seller of inventory. Each seller is identified by a unique Ad Manager account ID."],["ServerError",""],["ServerMessage",""],["ServingContext","The serving context for this restriction."],["ServingRestriction","Output only. A representation of the status of an ad in a specific context. A context here relates to where something ultimately serves (for example, a user or publisher geo, a platform, an HTTPS vs HTTP request, or the type of auction)."],["Size","Message depicting the size of the creative. The units of width and height depend on the type of the targeting."],["StopWatchingCreativeRequest","A request for stopping notifications for changes to creative Status."],["TargetingCriteria","Advertisers can target different attributes of an ad slot. For example, they can choose to show ads only if the user is in the U.S. Such targeting criteria can be specified as part of Shared Targeting."],["TargetingValue","A polymorphic targeting value used as part of Shared Targeting."],["TechnologyTargeting","Represents targeting about various types of technology."],["TimeInterval","An interval of time, with an absolute start and end."],["TimeOfDay","Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`."],["UrlTargeting","Represents a list of targeted and excluded URLs (e.g., google.com). For Private Auction and AdX Preferred Deals, URLs are either included or excluded. For Programmatic Guaranteed and Preferred Deals, this doesn't apply."],["VideoContent","Video content for a creative."],["VideoTargeting","Represents targeting information about video."],["WatchCreativeRequest","A request for watching changes to creative Status."],["XUploadContentType","The `X-Upload-Content-Type` header."]],"trait":[["CallBuilder","Identifies types which represent builders for a particular resource method"],["Delegate","A trait specifying functionality to help controlling any request performed by the API. The trait has a conservative default implementation."],["Hub","Identifies the Hub. There is only one per library, this trait is supposed to make intended use more explicit. The hub allows to access all resource methods more easily."],["MethodsBuilder","Identifies types for building methods of a particular resource type"],["NestedType","Identifies types which are only used by other types internally. They have no special meaning, this trait just marks them for completeness."],["Part","Identifies types which are only used as part of other types, which usually are carrying the `Resource` trait."],["ReadSeek","A utility to specify reader types which provide seeking capabilities too"],["RequestValue","Identifies types which are used in API requests."],["Resource","Identifies types which can be inserted and deleted. Types with this trait are most commonly used by clients of this API."],["ResponseResult","Identifies types which are used in API responses."],["ToParts","A trait for all types that can convert themselves into a parts string"],["UnusedType","Identifies types which are not actually used by the API This might be a bug within the google API schema."]],"type":[["Result","A universal result type used as return for all calls."]]});