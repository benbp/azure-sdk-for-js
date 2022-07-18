/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { StorageCacheManagementClient } = require("@azure/arm-storagecache");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Upgrade a Cache's firmware if a new version is available. Otherwise, this operation has no effect.
 *
 * @summary Upgrade a Cache's firmware if a new version is available. Otherwise, this operation has no effect.
 * x-ms-original-file: specification/storagecache/resource-manager/Microsoft.StorageCache/stable/2022-05-01/examples/Caches_UpgradeFirmware.json
 */
async function cachesUpgradeFirmware() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "scgroup";
  const cacheName = "sc1";
  const credential = new DefaultAzureCredential();
  const client = new StorageCacheManagementClient(credential, subscriptionId);
  const result = await client.caches.beginUpgradeFirmwareAndWait(resourceGroupName, cacheName);
  console.log(result);
}

cachesUpgradeFirmware().catch(console.error);
