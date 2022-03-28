function getRecipeData(url, callback)
{

	const req = EXTRACT_URL + "?url=" + url 
	+ '&forceExtraction=false&apiKey=' + API_KEY;
	console.log(req);
	let xmlHttp = new XMLHttpRequest();
	xmlHttp.onreadystatechange = () =>
	{
		if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
		{
			res = JSON.parse(xmlHttp.responseText);
			return callback(res);
		}
		else return callback(null);
	}

	xmlHttp.open("GET", req, true);
	xmlHttp.send(null);
}

function formatRecipeData(data)
{
	data["extendedIngredients"].forEach((elem) =>
	{
		EXTRA_UNIT_TYPES.forEach((unit) =>
		{
			if (elem["originalName"].includes(unit))
			{
				elem["originalName"] = elem["originalName"].replace(unit, '');
				elem["originalName"] = elem["originalName"].replace(/^\s+|\s+$/g, '');
				elem["unit"] = unit;
			}
		});
	});

	return data;
}