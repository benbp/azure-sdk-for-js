/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { ChaosManagementClient } = require("@azure/arm-chaos");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Get a Capability Type resource for given Target Type and location.
 *
 * @summary Get a Capability Type resource for given Target Type and location.
 * x-ms-original-file: specification/chaos/resource-manager/Microsoft.Chaos/preview/2022-07-01-preview/examples/GetACapabilityType.json
 */
async function getACapabilityTypeForAVirtualMachineTargetResourceOnWestus2Location() {
  const subscriptionId = "6b052e15-03d3-4f17-b2e1-be7f07588291";
  const locationName = "westus2";
  const targetTypeName = "Microsoft-VirtualMachine";
  const capabilityTypeName = "Shutdown-1.0";
  const credential = new DefaultAzureCredential();
  const client = new ChaosManagementClient(credential, subscriptionId);
  const result = await client.capabilityTypes.get(locationName, targetTypeName, capabilityTypeName);
  console.log(result);
}

getACapabilityTypeForAVirtualMachineTargetResourceOnWestus2Location().catch(console.error);
