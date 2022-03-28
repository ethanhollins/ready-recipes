if (!current_recipe)
{
}

function getRecipes(callback)
{
	storageGet((items) =>
	{
		return callback(items['recipes']);
	});
}

function recipeExists()
{
	const location = window.location.href;
	let exists = false;

	if ('AutoRecipe' in storage)
	{
		if ('recipes' in storage['AutoRecipe'])
		{
			storage['AutoRecipe']['recipes'].forEach((i) =>
			{
				if (location.includes(i['source']))
				{
					exists = true;
					current_recipe = i;
				}
			});
		}
	}

	return exists;
}

function retrieveRecipe(data, callback)
{
	if (!storage.hasOwnProperty('AutoRecipe'))
	{
		storage['AutoRecipe'] = {};
		storage['AutoRecipe']['recipes'] = [];
	}
	else
	{
		if (!storage['AutoRecipe'].hasOwnProperty('recipes'))
		{
			storage['AutoRecipe']['recipes'] = [];
		}
		else
		{
			let r = null;
			storage['AutoRecipe']['recipes'].forEach((i) =>
			{
				if (data['sourceUrl'].includes(i['source']))
				{
					console.log('Exists: ' + storage['AutoRecipe']);
					r = i;
				}
			});

			if (r) return callback(r);
		}
	}

	let entry = {
		'title': data['title'],
		'img': data['image'],
		'source': data['sourceUrl'].split('?')[0],
		'ingredients': []
	};

	data['extendedIngredients'].forEach((i) =>
	{
		importance = -1;

		i['aisle'].split(';').forEach((aisle) =>
		{
			if (aisle in AISLE_IMPORTANCE)
			{
				c_importance = AISLE_IMPORTANCE[aisle];
				if (importance === -1 || c_importance < importance)
				{
					importance = c_importance;
				}
			}
		});

		let ingredient_item = {
			'name': i['name'],
			'originalName': i['originalName'],
			'img': i['image'],
			'amount': i['amount'],
			'unit': i['unit'],
			'aisle': i['aisle'],
			'importance': importance
		}

		entry['ingredients'].push(ingredient_item);
	});

	return callback(entry);
}

function saveRecipe(entry)
{
	storage['AutoRecipe']['recipes'].push(entry);
	storageSet(storage['AutoRecipe'], ()=>{});
	console.log('Added: ' + storage['AutoRecipe']);
}

function deleteRecipe(index)
{
	storage['AutoRecipe']['recipes'].splice(index, 1);
	storageSet(storage['AutoRecipe'], ()=>{});
	console.log('Deleted ('+index+'): ' + storage['AutoRecipe']);
}

function showRecipes(recipes)
{
	console.log(recipes);
	ingredients = {}
	const location = window.location.href;
	recipes.forEach((r) =>
	{
		let elem = $(recipe);
		elem.find('#arRecipeTitle').text(r['title']);
		elem.find('#arRecipeImg').attr('src', r['img']);
		elem.find('#arRecipeImg').attr('alt', r['title']);

		$('#arRecipeList').append(elem);
		elem.find('#arRemoveRecipe').click(function()
		{
			deleteRecipe($(this).closest('#arRecipe').index());
			resetRecipes();
			showRecipes(recipes);
		});


		r['ingredients'].forEach((item) =>
		{
			if (item['name'] in ingredients)
			{
				ingredients[item['name']]['originalName'].push(
					item['originalName']
				);

				let is_qty_added = ingredients[item['name']]['quantity'].some((quantity) =>
				{
					try
					{
						let qty_one = new Qty(quantity);
						let qty_two = new Qty(String(item['amount']) + ' ' + item['unit']);

						if (qty_one.isCompatible(qty_two))
						{
							result = qty_one.add(qty_two);
							ingredients[item['name']]['quantity'][
								ingredients[item['name']]['quantity'].indexOf(quantity)
							] = String(result).split(' ')[0] + ' ' + quantity.split(' ')[1];
							return true;
						}
					}
					catch (e) {}
					
					if (quantity.split(' ')[1] === item['unit'])
					{
						result = parseFloat(quantity.split(' ')[0]) + parseFloat(item['amount']);
						ingredients[item['name']]['quantity'][
							ingredients[item['name']]['quantity'].indexOf(quantity)
						] = String(result) + ' ' + quantity.split(' ')[1];
						return true;
					}
				});

				if (!is_qty_added) ingredients[item['name']]['quantity'].push(
					String(item['amount']) + ' ' + item['unit']
				);
			}
			else
			{
				ingredients[item['name']] = {
					'name': item['name'],
					'originalName': [item['originalName']],
					'img': item['img'],
					'quantity': [String(item['amount']) + ' ' + item['unit']],
					'importance': item['importance']
				}
			}
		});
	});

	sortable = [];
	for (var i in ingredients)
	{
		sortable.push(ingredients[i]);
	}

	sortable.sort((a, b) => 
	{
		return b['importance'] - a['importance'];
	});

	console.log(sortable);
	sortable.forEach((item) =>
	{
		elem = $(ingredient);
		if (item['img'] !== null)
		{
			elem.find('#arIngredientImg').attr('src', IMG_URL + item['img']);
			elem.find('#arIngredientImg').attr('alt', item['name']);
		}

		elem.find('#arIngredientTitle').text(item['name']);
		elem.find('#arIngredientQuantity').text(item['quantity'][0]);

		$('#arIngredientList').append(elem);		
	});
}

function resetRecipes()
{
	$('#arRecipeList').empty();
	$('#arIngredientList').empty();
}

function startDefaultMenuPopup()
{

}

function startAddMenuPopup(recipes)
{
	console.log(recipes.length);
	$('body').append(popup_add_to_menu);
	$('#arAddMenu').append(header);

	$('#arClose').click(() =>
	{
		$('#arContainer').attr('style', 'display: none;')
	});

	$('#arHeaderImg').attr('src', current_recipe['img']);
	$('#arHeaderImg').attr('alt', current_recipe['title']);

	$('#arHeaderTitle').text(current_recipe['title']);

	$('#arAddRecipe').click(() => 
	{
		saveRecipe(current_recipe);
		resetRecipes();
		showRecipes(recipes);
	});

	showRecipes(recipes);
}

$( document ).ready(function()
{
	let is_found = false;

	if ($('#arContainer').length)
	{
		$('#arContainer').attr('style', '')
	}
	else
	{
		RUNNABLE.forEach((elem) =>
		{
			const location = window.location.href;
			if (location.startsWith(elem)
				&& location.replace(elem, '').length > 0)
			{
				if (!recipeExists())
				{
					getRecipeData(location, (res) =>
					{
						if (res)
						{
							data = formatRecipeData(res);
							recipes = retrieveRecipe(data, (r) =>
							{
								current_recipe = r;
								startAddMenuPopup(storage['AutoRecipe']['recipes']);
							});
						}
					});
				}
				else
				{
					startAddMenuPopup(storage['AutoRecipe']['recipes']);
				}

				is_found = true;
				return
			}
		});

		if (!is_found)
		{
			startDefaultMenuPopup();
		}
	}

});