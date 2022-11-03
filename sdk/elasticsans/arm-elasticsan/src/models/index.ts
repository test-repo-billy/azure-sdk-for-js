/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

/** List of operations supported by the RP. */
export interface ElasticSanOperationListResult {
  /** An array of operations supported by the ElasticSan RP. */
  value: ElasticSanRPOperation[];
  /** URI to fetch the next section of the paginated response. */
  nextLink?: string;
}

/** Description of a ElasticSan RP Operation */
export interface ElasticSanRPOperation {
  /** The name of the operation being performed on this particular object */
  name: string;
  /**
   * Indicates whether the operation applies to data-plane.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly isDataAction?: boolean;
  /**
   * Additional metadata about RP operation.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly display?: ElasticSanOperationDisplay;
}

/** Metadata about an operation. */
export interface ElasticSanOperationDisplay {
  /** Localized friendly form of the resource provider name. */
  provider: string;
  /** Localized friendly form of the resource type related to this action/operation. */
  resource: string;
  /** Localized friendly name for the operation, as it should be shown to the user. */
  operation: string;
  /** Localized friendly description for the operation, as it should be shown to the user. */
  description: string;
}

/** The resource management error response. */
export interface ErrorModel {
  /** RP error response. */
  error?: ErrorResponse;
}

/** The resource management error response. */
export interface ErrorResponse {
  /**
   * The error code.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly code?: string;
  /**
   * The error message.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly message?: string;
  /**
   * The error target.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly target?: string;
  /**
   * The error details.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly details?: ErrorResponse[];
  /**
   * The error additional info.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly additionalInfo?: ErrorAdditionalInfo[];
}

/** The resource management error additional info. */
export interface ErrorAdditionalInfo {
  /**
   * The additional info type.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
  /**
   * The additional info.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly info?: Record<string, unknown>;
}

/** List of SKU Information objects */
export interface SkuInformationList {
  /**
   * List of ResourceType Sku
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly value?: SkuInformation[];
}

/** ElasticSAN SKU and its properties */
export interface SkuInformation {
  /** Sku Name */
  name: SkuName;
  /** Sku Tier */
  tier?: SkuTier;
  /**
   * The type of the resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly resourceType?: string;
  /**
   * The set of locations that the SKU is available. This will be supported and registered Azure Geo Regions (e.g. West US, East US, Southeast Asia, etc.).
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly locations?: string[];
  /**
   * Availability of the SKU for the location/zone
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly locationInfo?: SkuLocationInfo[];
  /**
   * The capability information in the specified SKU.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly capabilities?: SKUCapability[];
}

/** The location info. */
export interface SkuLocationInfo {
  /**
   * The location.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly location?: string;
  /**
   * The zones.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly zones?: string[];
}

/** The capability information in the specified SKU. */
export interface SKUCapability {
  /**
   * The name of capability.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * A string value to indicate states of given capability.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly value?: string;
}

/** List of Elastic Sans */
export interface ElasticSanList {
  /** An array of Elastic San objects. */
  value: ElasticSan[];
  /**
   * URI to fetch the next section of the paginated response.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nextLink?: string;
}

/** The SKU name. Required for account creation; optional for update. */
export interface Sku {
  /** The sku name. */
  name: SkuName;
  /** The sku tier. */
  tier?: SkuTier;
}

/** Metadata pertaining to creation and last modification of the resource. */
export interface SystemData {
  /** The identity that created the resource. */
  createdBy?: string;
  /** The type of identity that created the resource. */
  createdByType?: CreatedByType;
  /** The timestamp of resource creation (UTC). */
  createdAt?: Date;
  /** The identity that last modified the resource. */
  lastModifiedBy?: string;
  /** The type of identity that last modified the resource. */
  lastModifiedByType?: CreatedByType;
  /** The timestamp of resource last modification (UTC) */
  lastModifiedAt?: Date;
}

/** The resource model definition. */
export interface Resource {
  /**
   * Azure resource identifier.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * Azure resource name.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * Azure resource type.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
  /** Azure resource tags. */
  tags?: { [propertyName: string]: string };
}

/** Response for ElasticSan update request. */
export interface ElasticSanUpdate {
  /** Update tags */
  tags?: { [propertyName: string]: string };
  /** Base size of the Elastic San appliance in TiB. */
  baseSizeTiB?: number;
  /** Extended size of the Elastic San appliance in TiB. */
  extendedCapacitySizeTiB?: number;
}

/** List of Volume Groups */
export interface VolumeGroupList {
  /** An array of Volume Groups objects. */
  value: VolumeGroup[];
  /**
   * URI to fetch the next section of the paginated response.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nextLink?: string;
}

/** A set of rules governing the network accessibility. */
export interface NetworkRuleSet {
  /** The list of virtual network rules. */
  virtualNetworkRules?: VirtualNetworkRule[];
}

/** Virtual Network rule. */
export interface VirtualNetworkRule {
  /** Resource ID of a subnet, for example: /subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.Network/virtualNetworks/{vnetName}/subnets/{subnetName}. */
  virtualNetworkResourceId: string;
  /** The action of virtual network rule. */
  action?: "Allow";
  /**
   * Gets the state of virtual network rule.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly state?: State;
}

/** Volume Group request. */
export interface VolumeGroupUpdate {
  /** Resource tags. */
  tags?: { [propertyName: string]: string };
  /** Type of storage target */
  protocolType?: StorageTargetType;
  /** Type of encryption */
  encryption?: EncryptionType;
  /** A collection of rules governing the accessibility from specific network locations. */
  networkAcls?: NetworkRuleSet;
}

/** Data source used when creating the volume. */
export interface SourceCreationData {
  /** This enumerates the possible sources of a volume creation. */
  createSource?: "None";
  /** If createOption is Copy, this is the ARM id of the source snapshot or disk. If createOption is Restore, this is the ARM-like id of the source disk restore point. */
  sourceUri?: string;
}

/** Iscsi target information */
export interface IscsiTargetInfo {
  /**
   * iSCSI Target IQN (iSCSI Qualified Name); example: "iqn.2005-03.org.iscsi:server".
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly targetIqn?: string;
  /**
   * iSCSI Target Portal Host Name
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly targetPortalHostname?: string;
  /**
   * iSCSI Target Portal Port
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly targetPortalPort?: number;
  /**
   * State of the operation on the resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: ProvisioningStates;
  /** Operational status of the iSCSI Target. */
  status?: OperationalStatus;
}

/** Response for Volume request. */
export interface VolumeUpdate {
  /** Resource tags. */
  tags?: { [propertyName: string]: string };
  /** Volume size. */
  sizeGiB?: number;
}

/** List of Volumes */
export interface VolumeList {
  /** An array of Volume objects. */
  value: Volume[];
  /**
   * URI to fetch the next section of the paginated response.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nextLink?: string;
}

/** The resource model definition for a ARM tracked top level resource. */
export interface TrackedResource extends Resource {
  /** The geo-location where the resource lives. */
  location?: string;
}

/** Response for Volume Group request. */
export interface VolumeGroup extends Resource {
  /**
   * Resource metadata required by ARM RPC
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly systemData?: SystemData;
  /**
   * State of the operation on the resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: ProvisioningStates;
  /** Type of storage target */
  protocolType?: StorageTargetType;
  /** Type of encryption */
  encryption?: EncryptionType;
  /** A collection of rules governing the accessibility from specific network locations. */
  networkAcls?: NetworkRuleSet;
}

/** Response for Volume request. */
export interface Volume extends Resource {
  /**
   * Resource metadata required by ARM RPC
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly systemData?: SystemData;
  /**
   * Unique Id of the volume in GUID format
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly volumeId?: string;
  /** State of the operation on the resource. */
  creationData?: SourceCreationData;
  /** Volume size. */
  sizeGiB?: number;
  /**
   * Storage target information
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly storageTarget?: IscsiTargetInfo;
}

/** Response for ElasticSan request. */
export interface ElasticSan extends TrackedResource {
  /**
   * Resource metadata required by ARM RPC
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly systemData?: SystemData;
  /** resource sku */
  sku: Sku;
  /** Logical zone for Elastic San resource; example: ["1"]. */
  availabilityZones?: string[];
  /**
   * State of the operation on the resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: ProvisioningStates;
  /** Base size of the Elastic San appliance in TiB. */
  baseSizeTiB: number;
  /** Extended size of the Elastic San appliance in TiB. */
  extendedCapacitySizeTiB: number;
  /**
   * Total size of the provisioned Volumes in GiB.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly totalVolumeSizeGiB?: number;
  /**
   * Total number of volume groups in this Elastic San appliance.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly volumeGroupCount?: number;
  /**
   * Total Provisioned IOPS of the Elastic San appliance.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly totalIops?: number;
  /**
   * Total Provisioned MBps Elastic San appliance.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly totalMBps?: number;
  /**
   * Total size of the Elastic San appliance in TB.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly totalSizeTiB?: number;
}

/** Known values of {@link SkuName} that the service accepts. */
export enum KnownSkuName {
  /** Premium locally redundant storage */
  PremiumLRS = "Premium_LRS",
  /** Premium zone redundant storage */
  PremiumZRS = "Premium_ZRS"
}

/**
 * Defines values for SkuName. \
 * {@link KnownSkuName} can be used interchangeably with SkuName,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Premium_LRS**: Premium locally redundant storage \
 * **Premium_ZRS**: Premium zone redundant storage
 */
export type SkuName = string;

/** Known values of {@link SkuTier} that the service accepts. */
export enum KnownSkuTier {
  /** Premium Tier */
  Premium = "Premium"
}

/**
 * Defines values for SkuTier. \
 * {@link KnownSkuTier} can be used interchangeably with SkuTier,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Premium**: Premium Tier
 */
export type SkuTier = string;

/** Known values of {@link ProvisioningStates} that the service accepts. */
export enum KnownProvisioningStates {
  /** Invalid */
  Invalid = "Invalid",
  /** Succeeded */
  Succeeded = "Succeeded",
  /** Failed */
  Failed = "Failed",
  /** Canceled */
  Canceled = "Canceled",
  /** Pending */
  Pending = "Pending",
  /** Creating */
  Creating = "Creating",
  /** Updating */
  Updating = "Updating",
  /** Deleting */
  Deleting = "Deleting"
}

/**
 * Defines values for ProvisioningStates. \
 * {@link KnownProvisioningStates} can be used interchangeably with ProvisioningStates,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Invalid** \
 * **Succeeded** \
 * **Failed** \
 * **Canceled** \
 * **Pending** \
 * **Creating** \
 * **Updating** \
 * **Deleting**
 */
export type ProvisioningStates = string;

/** Known values of {@link CreatedByType} that the service accepts. */
export enum KnownCreatedByType {
  /** User */
  User = "User",
  /** Application */
  Application = "Application",
  /** ManagedIdentity */
  ManagedIdentity = "ManagedIdentity",
  /** Key */
  Key = "Key"
}

/**
 * Defines values for CreatedByType. \
 * {@link KnownCreatedByType} can be used interchangeably with CreatedByType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **User** \
 * **Application** \
 * **ManagedIdentity** \
 * **Key**
 */
export type CreatedByType = string;

/** Known values of {@link StorageTargetType} that the service accepts. */
export enum KnownStorageTargetType {
  /** Iscsi */
  Iscsi = "Iscsi",
  /** None */
  None = "None"
}

/**
 * Defines values for StorageTargetType. \
 * {@link KnownStorageTargetType} can be used interchangeably with StorageTargetType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Iscsi** \
 * **None**
 */
export type StorageTargetType = string;

/** Known values of {@link EncryptionType} that the service accepts. */
export enum KnownEncryptionType {
  /** Volume is encrypted at rest with Platform managed key. It is the default encryption type. */
  EncryptionAtRestWithPlatformKey = "EncryptionAtRestWithPlatformKey"
}

/**
 * Defines values for EncryptionType. \
 * {@link KnownEncryptionType} can be used interchangeably with EncryptionType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **EncryptionAtRestWithPlatformKey**: Volume is encrypted at rest with Platform managed key. It is the default encryption type.
 */
export type EncryptionType = string;

/** Known values of {@link OperationalStatus} that the service accepts. */
export enum KnownOperationalStatus {
  /** Invalid */
  Invalid = "Invalid",
  /** Unknown */
  Unknown = "Unknown",
  /** Healthy */
  Healthy = "Healthy",
  /** Unhealthy */
  Unhealthy = "Unhealthy",
  /** Updating */
  Updating = "Updating",
  /** Running */
  Running = "Running",
  /** Stopped */
  Stopped = "Stopped",
  /** StoppedDeallocated */
  StoppedDeallocated = "Stopped (deallocated)"
}

/**
 * Defines values for OperationalStatus. \
 * {@link KnownOperationalStatus} can be used interchangeably with OperationalStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Invalid** \
 * **Unknown** \
 * **Healthy** \
 * **Unhealthy** \
 * **Updating** \
 * **Running** \
 * **Stopped** \
 * **Stopped (deallocated)**
 */
export type OperationalStatus = string;
/** Defines values for State. */
export type State =
  | "provisioning"
  | "deprovisioning"
  | "succeeded"
  | "failed"
  | "networkSourceDeleted";

/** Optional parameters. */
export interface OperationsListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type OperationsListResponse = ElasticSanOperationListResult;

/** Optional parameters. */
export interface SkusListOptionalParams extends coreClient.OperationOptions {
  /** Specify $filter='location eq <location>' to filter on location. */
  filter?: string;
}

/** Contains response data for the list operation. */
export type SkusListResponse = SkuInformationList;

/** Optional parameters. */
export interface ElasticSansListBySubscriptionOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listBySubscription operation. */
export type ElasticSansListBySubscriptionResponse = ElasticSanList;

/** Optional parameters. */
export interface ElasticSansListByResourceGroupOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByResourceGroup operation. */
export type ElasticSansListByResourceGroupResponse = ElasticSanList;

/** Optional parameters. */
export interface ElasticSansCreateOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the create operation. */
export type ElasticSansCreateResponse = ElasticSan;

/** Optional parameters. */
export interface ElasticSansUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the update operation. */
export type ElasticSansUpdateResponse = ElasticSan;

/** Optional parameters. */
export interface ElasticSansDeleteOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Optional parameters. */
export interface ElasticSansGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type ElasticSansGetResponse = ElasticSan;

/** Optional parameters. */
export interface ElasticSansListBySubscriptionNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listBySubscriptionNext operation. */
export type ElasticSansListBySubscriptionNextResponse = ElasticSanList;

/** Optional parameters. */
export interface ElasticSansListByResourceGroupNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByResourceGroupNext operation. */
export type ElasticSansListByResourceGroupNextResponse = ElasticSanList;

/** Optional parameters. */
export interface VolumeGroupsListByElasticSanOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByElasticSan operation. */
export type VolumeGroupsListByElasticSanResponse = VolumeGroupList;

/** Optional parameters. */
export interface VolumeGroupsCreateOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the create operation. */
export type VolumeGroupsCreateResponse = VolumeGroup;

/** Optional parameters. */
export interface VolumeGroupsUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the update operation. */
export type VolumeGroupsUpdateResponse = VolumeGroup;

/** Optional parameters. */
export interface VolumeGroupsDeleteOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Optional parameters. */
export interface VolumeGroupsGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type VolumeGroupsGetResponse = VolumeGroup;

/** Optional parameters. */
export interface VolumeGroupsListByElasticSanNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByElasticSanNext operation. */
export type VolumeGroupsListByElasticSanNextResponse = VolumeGroupList;

/** Optional parameters. */
export interface VolumesCreateOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the create operation. */
export type VolumesCreateResponse = Volume;

/** Optional parameters. */
export interface VolumesUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the update operation. */
export type VolumesUpdateResponse = Volume;

/** Optional parameters. */
export interface VolumesDeleteOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Optional parameters. */
export interface VolumesGetOptionalParams extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type VolumesGetResponse = Volume;

/** Optional parameters. */
export interface VolumesListByVolumeGroupOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByVolumeGroup operation. */
export type VolumesListByVolumeGroupResponse = VolumeList;

/** Optional parameters. */
export interface VolumesListByVolumeGroupNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByVolumeGroupNext operation. */
export type VolumesListByVolumeGroupNextResponse = VolumeList;

/** Optional parameters. */
export interface ElasticSanManagementOptionalParams
  extends coreClient.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Api Version */
  apiVersion?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}