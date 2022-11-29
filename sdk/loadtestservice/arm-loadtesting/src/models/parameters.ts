/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  OperationParameter,
  OperationURLParameter,
  OperationQueryParameter
} from "@azure/core-client";
import {
  QuotaBucketRequest as QuotaBucketRequestMapper,
  LoadTestResource as LoadTestResourceMapper,
  LoadTestResourcePatchRequestBody as LoadTestResourcePatchRequestBodyMapper
} from "../models/mappers";

export const accept: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const $host: OperationURLParameter = {
  parameterPath: "$host",
  mapper: {
    serializedName: "$host",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2022-12-01",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const nextLink: OperationURLParameter = {
  parameterPath: "nextLink",
  mapper: {
    serializedName: "nextLink",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const subscriptionId: OperationURLParameter = {
  parameterPath: "subscriptionId",
  mapper: {
    constraints: {
      MinLength: 1
    },
    serializedName: "subscriptionId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const location: OperationURLParameter = {
  parameterPath: "location",
  mapper: {
    constraints: {
      MinLength: 1
    },
    serializedName: "location",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const quotaBucketName: OperationURLParameter = {
  parameterPath: "quotaBucketName",
  mapper: {
    serializedName: "quotaBucketName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const contentType: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const quotaBucketRequest: OperationParameter = {
  parameterPath: "quotaBucketRequest",
  mapper: QuotaBucketRequestMapper
};

export const resourceGroupName: OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    constraints: {
      MaxLength: 90,
      MinLength: 1
    },
    serializedName: "resourceGroupName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const loadTestName: OperationURLParameter = {
  parameterPath: "loadTestName",
  mapper: {
    serializedName: "loadTestName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const loadTestResource: OperationParameter = {
  parameterPath: "loadTestResource",
  mapper: LoadTestResourceMapper
};

export const loadTestResourcePatchRequestBody: OperationParameter = {
  parameterPath: "loadTestResourcePatchRequestBody",
  mapper: LoadTestResourcePatchRequestBodyMapper
};