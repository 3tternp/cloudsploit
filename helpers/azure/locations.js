// Source: https://azure.microsoft.com/en-us/global-infrastructure/services/

var locations = [
	'eastasia',
	'southeastasia',
	'centralus',
	'eastus',
	'eastus2',
	'westus',
	'northcentralus',
	'southcentralus',
	'northeurope',
	'westeurope',
	'japanwest',
	'japaneast',
	'brazilsouth',
	'australiaeast',
	'australiasoutheast',
	'southindia',
	'centralindia',
	'westindia',
	'canadacentral',
	'canadaeast',
	'uksouth',
	'ukwest',
	'westcentralus',
	'westus2',
	'koreacentral',
	'koreasouth',
	'francecentral',
	'francesouth',
	'australiacentral',
	'australiacentral2',
	'southafricanorth',
	'southafricawest'
];

module.exports = {
	all: locations,
	resources: locations,
	resourceGroups: locations,
	storageAccounts: locations,
	BlobService: locations,
	FileService: locations,
	QueueService: locations,
	TableService: locations,
	virtualMachines: locations,
	disks: locations,
	virtualMachineExtensions: locations,
	activityLogAlerts: locations,
	vaults: locations,
	KeyVaultClient: locations,
	blobContainers: locations,
	policyAssignments:locations.concat('global')
};