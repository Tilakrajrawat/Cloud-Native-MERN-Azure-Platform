param functionAppName string
param storageAccountName string
param location string = resourceGroup().location

resource storage 'Microsoft.Storage/storageAccounts@2022-09-01' = {
  name: storageAccountName
  location: location
  sku: { name: 'Standard_LRS' }
  kind: 'StorageV2'
}

resource functionApp 'Microsoft.Web/sites@2022-03-01' = {
  name: functionAppName
  location: location
  kind: 'functionapp'
  properties: {
    serverFarmId: null
    siteConfig: {
      appSettings: [
        { name: 'AzureWebJobsStorage'; value: storage.properties.primaryEndpoints.blob }
        { name: 'FUNCTIONS_EXTENSION_VERSION'; value: '~4' }
      ]
    }
  }
}
