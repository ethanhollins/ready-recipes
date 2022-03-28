// storageClear(()=>{});
console.log('cleared');
let current_recipe = null;
let storage = null;
storageGet((items) =>
{
	storage = items;
});



