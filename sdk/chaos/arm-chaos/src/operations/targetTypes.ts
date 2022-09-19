/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { TargetTypes } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ChaosManagementClient } from "../chaosManagementClient";
import {
  TargetType,
  TargetTypesListNextOptionalParams,
  TargetTypesListOptionalParams,
  TargetTypesListResponse,
  TargetTypesGetOptionalParams,
  TargetTypesGetResponse,
  TargetTypesListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing TargetTypes operations. */
export class TargetTypesImpl implements TargetTypes {
  private readonly client: ChaosManagementClient;

  /**
   * Initialize a new instance of the class TargetTypes class.
   * @param client Reference to the service client
   */
  constructor(client: ChaosManagementClient) {
    this.client = client;
  }

  /**
   * Get a list of Target Type resources for given location.
   * @param locationName String that represents a Location resource name.
   * @param options The options parameters.
   */
  public list(
    locationName: string,
    options?: TargetTypesListOptionalParams
  ): PagedAsyncIterableIterator<TargetType> {
    const iter = this.listPagingAll(locationName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(locationName, options);
      }
    };
  }

  private async *listPagingPage(
    locationName: string,
    options?: TargetTypesListOptionalParams
  ): AsyncIterableIterator<TargetType[]> {
    let result = await this._list(locationName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(locationName, continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    locationName: string,
    options?: TargetTypesListOptionalParams
  ): AsyncIterableIterator<TargetType> {
    for await (const page of this.listPagingPage(locationName, options)) {
      yield* page;
    }
  }

  /**
   * Get a list of Target Type resources for given location.
   * @param locationName String that represents a Location resource name.
   * @param options The options parameters.
   */
  private _list(
    locationName: string,
    options?: TargetTypesListOptionalParams
  ): Promise<TargetTypesListResponse> {
    return this.client.sendOperationRequest(
      { locationName, options },
      listOperationSpec
    );
  }

  /**
   * Get a Target Type resources for given location.
   * @param locationName String that represents a Location resource name.
   * @param targetTypeName String that represents a Target Type resource name.
   * @param options The options parameters.
   */
  get(
    locationName: string,
    targetTypeName: string,
    options?: TargetTypesGetOptionalParams
  ): Promise<TargetTypesGetResponse> {
    return this.client.sendOperationRequest(
      { locationName, targetTypeName, options },
      getOperationSpec
    );
  }

  /**
   * ListNext
   * @param locationName String that represents a Location resource name.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    locationName: string,
    nextLink: string,
    options?: TargetTypesListNextOptionalParams
  ): Promise<TargetTypesListNextResponse> {
    return this.client.sendOperationRequest(
      { locationName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Chaos/locations/{locationName}/targetTypes",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.TargetTypeListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.continuationToken],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.locationName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Chaos/locations/{locationName}/targetTypes/{targetTypeName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.TargetType
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.locationName,
    Parameters.targetTypeName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.TargetTypeListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.continuationToken],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.locationName
  ],
  headerParameters: [Parameters.accept],
  serializer
};