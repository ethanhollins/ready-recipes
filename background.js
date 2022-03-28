chrome.browserAction.setBadgeBackgroundColor({color: "#03BEFF"});

chrome.browserAction.onClicked.addListener((tab) => 
{ 
	chrome.tabs.executeScript(null, {file: "app.js"});
});

chrome.tabs.onActivated.addListener(function(activeInfo) {
	chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) 
	{
		const location = tabs[0].url;
		let is_found = false;
		RUNNABLE.forEach((elem) =>
		{
			if (location.startsWith(elem)
				&& location.replace(elem, '').length > 0)
			{
				chrome.browserAction.setIcon({path: "./res/active_icon128.png"});
				chrome.browserAction.setBadgeText({text: "!"});
				is_found = true;
			}
		});

		if (!is_found)
		{
			chrome.browserAction.setBadgeText({text: ""});
			chrome.browserAction.setIcon({path: "./res/unactive_icon128.png"});
		}
	});
});