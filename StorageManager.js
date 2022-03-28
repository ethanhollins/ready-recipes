function storageSet(value, callback)
{
	chrome.storage.sync.set({"AutoRecipe": value}, () =>
	{
		return callback(true);
	});
}

function storageGet(callback)
{
	chrome.storage.sync.get("AutoRecipe", (items) =>
	{
		return callback(items);
	});
}

function storageClear(callback)
{
	chrome.storage.sync.clear(() =>
	{
		return callback(true);
	});
}