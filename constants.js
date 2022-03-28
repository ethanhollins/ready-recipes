/*
* HTML TAGS
*/

const styling = `
	<style>
		.arpopup {
			all: unset;
			animation: initial; 
			transition: opacity 0.2s ease 0s; 
			color: initial; font: initial; 
			font-feature-settings: initial; 
			font-kerning: initial; 
			font-variation-settings: initial; 
			text-orientation: initial; 
			text-rendering: initial;
			-webkit-font-smoothing: initial; 
			-webkit-locale: initial; 
			-webkit-text-orientation: initial; 
			-webkit-writing-mode: initial; 
			writing-mode: initial; 
			zoom: initial; 
			place-content: initial; 
			place-items: initial; 
			place-self: initial; 
			alignment-baseline: initial; 
			backdrop-filter: initial; 
			backface-visibility: initial; 
			background: initial; 
			background-blend-mode: initial; 
			baseline-shift: initial;
			block-size: initial; 
			border-block-end: initial; 
			border-block-start: initial; 
			border: initial; 
			border-radius: initial; 
			border-collapse: initial; 
			border-inline-end: initial; 
			border-inline-start: initial; 
			bottom: initial; box-shadow: initial; 
			box-sizing: initial; 
			break-after: initial; 
			break-before: initial; 
			break-inside: initial; 
			buffered-rendering: initial; 
			caption-side: initial;
			caret-color: initial; 
			clear: initial; 
			clip: initial; 
			clip-path: initial; 
			clip-rule: initial; 
			color-interpolation: initial; 
			color-interpolation-filters: initial; 
			color-rendering: initial; columns: initial; 
			column-fill: initial; gap: initial; 
			column-rule: initial; 
			column-span: initial; 
			contain: initial; 
			content: initial; 
			counter-increment: initial; 
			counter-reset: initial; 
			cursor: initial; 
			cx: initial; 
			cy: initial; 
			d: initial; 
			display: initial; 
			dominant-baseline: initial;
			empty-cells: initial; 
			fill: initial; 
			fill-opacity: initial; 
			fill-rule: initial; 
			filter: initial; 
			flex: initial; 
			flex-flow: initial; 
			float: initial; 
			flood-color: initial; 
			flood-opacity: initial; 
			grid: initial; 
			grid-area: initial; 
			height: initial; 
			hyphens: initial; 
			image-rendering: initial;
			inline-size: initial; 
			isolation: initial; 
			left: initial; 
			letter-spacing: initial; 
			lighting-color: initial; 
			line-break: initial; 
			list-style: initial; 
			margin-block-end: initial; 
			margin-block-start: initial; 
			margin: initial; 
			margin-inline-end: initial; 
			margin-inline-start: initial; 
			marker: initial; mask: initial; 
			mask-type: initial; max-block-size: 
			initial; max-height: initial; 
			max-inline-size: initial; 
			max-width: initial; 
			min-block-size: initial; 
			min-height: initial; 
			min-inline-size: initial; 
			min-width: initial; 
			mix-blend-mode: initial; 
			object-fit: initial; 
			object-position: initial; 
			offset: initial; 
			opacity: 1; 
			order: initial; 
			orphans: initial; 
			outline: initial; 
			outline-offset: initial; 
			overflow-anchor: initial; 
			overflow-wrap: initial; 
			overflow: initial; 
			overscroll-behavior-block: initial; 
			overscroll-behavior-inline: initial; 
			overscroll-behavior: initial; 
			padding-block-end: initial; 
			padding-block-start: initial; 
			padding: initial; 
			padding-inline-end: initial; 
			padding-inline-start: initial; 
			page: initial; 
			paint-order: initial; 
			perspective: initial; 
			perspective-origin: initial; 
			pointer-events: none; 
			position: fixed; 
			quotes: initial; 
			r: initial; 
			resize: initial; 
			right: 0px; 
			rx: initial; 
			ry: initial; 
			scroll-behavior: initial; 
			scroll-margin-block: initial; 
			scroll-margin: initial; 
			scroll-margin-inline: initial; 
			scroll-padding-block: initial; 
			scroll-padding: initial; 
			scroll-padding-inline: initial; 
			scroll-snap-align: initial; 
			scroll-snap-stop: initial; 
			scroll-snap-type: initial; 
			shape-image-threshold: initial; 
			shape-margin: initial; 
			shape-outside: initial; 
			shape-rendering: initial; 
			size: initial; 
			speak: initial; 
			stop-color: initial; 
			stop-opacity: initial; 
			stroke: initial; 
			stroke-dasharray: initial; 
			stroke-dashoffset: initial; 
			stroke-linecap: initial; 
			stroke-linejoin: initial; 
			stroke-miterlimit: initial; 
			stroke-opacity: initial; 
			stroke-width: initial; 
			tab-size: initial; 
			table-layout: initial; 
			text-align: initial; 
			text-align-last: initial; 
			text-anchor: initial; 
			text-combine-upright: initial; 
			text-decoration: initial; 
			text-decoration-skip-ink: initial; 
			text-indent: initial; 
			text-overflow: initial; 
			ext-shadow: initial; 
			text-size-adjust: initial; 
			text-transform: initial; 
			text-underline-position: initial; 
			top: 0px; 
			ouch-action: initial; 
			transform: initial; 
			transform-box: initial; 
			transform-origin: initial; 
			transform-style: initial; 
			user-select: initial; 
			vector-effect: initial; 
			vertical-align: initial; 
			visibility: visible; 
			-webkit-app-region: initial; 
			-webkit-appearance: initial; 
			border-spacing: initial; 
			-webkit-border-image: initial; 
			-webkit-box-align: initial; 
			-webkit-box-decoration-break: initial; 
			-webkit-box-direction: initial; 
			-webkit-box-flex: initial; 
			-webkit-box-ordinal-group: initial; 
			-webkit-box-orient: initial; 
			-webkit-box-pack: initial; 
			-webkit-box-reflect: initial; 
			-webkit-font-size-delta: initial; 
			-webkit-highlight: initial; 
			-webkit-hyphenate-character: initial; 
			-webkit-line-break: initial; 
			-webkit-line-clamp: initial; 
			-webkit-margin-collapse: initial; 
			-webkit-margin-bottom-collapse: initial; 
			-webkit-margin-top-collapse: initial; 
			-webkit-mask-box-image: initial; 
			-webkit-mask: initial; 
			-webkit-mask-composite: initial; 
			-webkit-perspective-origin-x: initial; 
			-webkit-perspective-origin-y: initial; 
			-webkit-print-color-adjust: initial; 
			-webkit-rtl-ordering: initial; 
			-webkit-ruby-position: initial; 
			-webkit-tap-highlight-color: initial; 
			-webkit-text-combine: initial; 
			-webkit-text-decorations-in-effect: initial; 
			-webkit-text-emphasis: initial; 
			-webkit-text-emphasis-position: initial; 
			-webkit-text-fill-color: initial; 
			-webkit-text-security: initial; 
			-webkit-text-stroke: initial;
			-webkit-transform-origin-x: initial; 
			-webkit-transform-origin-y: initial; 
			-webkit-transform-origin-z: initial; 
			-webkit-user-drag: initial; 
			-webkit-user-modify: initial; 
			white-space: initial; 
			widows: initial; 
			width: initial; 
			will-change: initial; 
			word-break: initial; 
			word-spacing: initial; 
			x: initial; 
			y: initial;
			box-sizing: border-box;
		}
		.style-6::-webkit-scrollbar-track
		{
			-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
			background-color: #F5F5F5;
		}

		.style-6::-webkit-scrollbar
		{
			width: 10px;
			background-color: #F5F5F5;
		}

		.style-6::-webkit-scrollbar-thumb
		{
			background-color: #F90;	
			background-image: -webkit-linear-gradient(45deg,
													  rgba(255, 255, 255, .2) 25%,
													  transparent 25%,
													  transparent 50%,
													  rgba(255, 255, 255, .2) 50%,
													  rgba(255, 255, 255, .2) 75%,
													  transparent 75%,
													  transparent)
		}

		.style-3::-webkit-scrollbar {
			width: 10px;
		}

		.style-3::-webkit-scrollbar-thumb {
			box-shadow: inset 0 0 10px 10px rgb(220, 220, 220);
			border: solid 3px transparent;
			border-radius: 20px;
		}
	</style>
`;

const header = `
	<div>
		<img id="arHeaderImg" style="width: 100%; border-radius: 4px;  -webkit-transform: translateY(-50%); transform: translateY(-50%);">
		<div style="position: absolute; display: flex; align-items: center; text-align: left; padding: 0px 10px 0px 10px; width: 100%; height: 40px; top: 20px; background-color: #FFF; box-shadow: 0px 0px 10px #555;">
			<span id="arHeaderTitle" style="font-family: 'Segoe UI',Roboto,Helvetica,Arial,sans-serif; text-align: left; color: rgb(40, 40, 40); font-weight: 475; font-size: 20px; width: 70%; text-overflow: ellipsis; white-space: nowrap; overflow: hidden;">Sample Title</span>
		</div>

		<div id="arFavorite" style="position: absolute; padding: 0px 10px 0px 10px; width: 60px; height: 60px; top: 10px; left: 85%; background-color: rgb(0, 255, 0); border-style: solid; border-width: 3px; border-radius: 60px; border-color: #FFF;">
		</div>
		<div id="arAddRecipe" style="position: absolute; padding: 0px 10px 0px 10px; width: 60px; height: 60px; top: 10px; left: 75%; background-color: rgb(40, 160, 255); border-style: solid; border-width: 3px; border-radius: 60px; border-color: #FFF;">
		</div>
	</div>
`;

const recipe = `
	<div id="arRecipe" style="position: relative; height: 80px; overflow: hidden; border-style: solid; border-width: 1px 2px 1px 2px; border-color: rgb(245, 245, 245);">
		<img id="arRecipeImg" style="width: 100%; border-radius: 4px;  -webkit-transform: translateY(-50%); transform: translateY(-50%);">
		<div style="position: absolute; display: flex; align-items: center; text-align: left; padding: 0px 10px 0px 10px; width: 100%; height: 40px; top: 20px; background-color: #FFF; box-shadow: 0px 0px 10px #555;">
			<span id="arRecipeTitle" style="font-family: 'Segoe UI',Roboto,Helvetica,Arial,sans-serif; text-align: left; color: rgb(40, 40, 40); font-weight: 475; font-size: 20px; width: 70%; text-overflow: ellipsis; white-space: nowrap; overflow: hidden;">Sample Title</span>
		</div>

		<div id="arViewRecipe" style="position: absolute; padding: 0px 10px 0px 10px; width: 38px; height: 38px; top: 21px; left: 85%; background-color: rgb(0, 255, 0); border-style: solid; border-width: 1px; border-radius: 30px; border-color: #FFF;">
		</div>
		<div id="arRemoveRecipe" style="position: absolute; padding: 0px 10px 0px 10px; width: 38px; height: 38px; top: 21px; left: 75%; background-color: rgb(40, 160, 255); border-style: solid; border-width: 1px; border-radius: 30px; border-color: #FFF;">
		</div>
	</div>
`;

const ingredient = `
	<tr>
		<td style="width: 20%; text-align: center;">
			<img id="arIngredientImg" style="display: inline-block; height: 40px;">
		</td>
		<td style="width: 50%; text-transform: capitalize; padding-left: 10px;">
			<div class="style-3" style="max-height: 40px; overflow-y: auto;">
				<span id="arIngredientTitle" style="display: inline-block; font-family: 'Segoe UI',Roboto,Helvetica,Arial,sans-serif; text-align: left; color: rgb(40, 40, 40); font-size: 16px;">ingredient title</span>
			</div>
		</td>
		<td style="width: 30%; text-transform: lowercase; padding-left: 10px;">
			<div class="style-3" style="max-height: 40px; overflow-y: auto;">
				<span id="arIngredientQuantity" style="display: inline-block;  font-family: 'Segoe UI',Roboto,Helvetica,Arial,sans-serif; text-align: left; color: rgb(40, 40, 40); font-size: 16px;">quantity</span>
			</div>
		</td>
	</tr>
`;

const list = `
	<div class="style-6" id="list" style="height: 100%; overflow-y: auto; padding-bottom: 20px; background-color: rgb(255, 255, 255);">
		
		<div style="display: inline-block; margin: 10px 5px 5px 10px; width: 60px; height: 20px; background-color: rgb(240, 240, 240); border-style: solid; border-width: 1px; border-radius: 10px; border-color: rgb(40, 40, 40); text-align: center;">
			<span style="font-size: 10pt;">Recipes</span>
		</div>
		<div style="display: inline-block; margin: 10px 5px 5px 10px; width: 90px; height: 20px; background-color: rgb(255, 255, 255); border-style: solid; border-width: 1px; border-radius: 10px; border-color: rgb(40, 40, 40); text-align: center;">
			<span style="font-size: 10pt;">Meal Planner</span>
		</div>
		<div style="display: inline-block; margin: 10px 5px 5px 10px; width: 70px; height: 20px; background-color: rgb(255, 255, 255); border-style: solid; border-width: 1px; border-radius: 10px; border-color: rgb(40, 40, 40); text-align: center;">
			<span style="font-size: 10pt;">Favorites</span>
		</div>
		<div style="display: inline-block; margin: 10px 5px 5px 10px; width: 60px; height: 20px; background-color: rgb(255, 255, 255); border-style: solid; border-width: 1px; border-radius: 10px; border-color: rgb(40, 40, 40); text-align: center;">
			<span style="font-size: 10pt;">History</span>
		</div>

		<div style="font-family: 'Segoe UI',Roboto,Helvetica,Arial,sans-serif; color: rgb(120, 120, 120); font-weight: 475; font-size: 20px; padding: 10px 10px 5px 10px;">Recipes</div>
		<div id="arRecipeList"></div>

		<div style="font-family: 'Segoe UI',Roboto,Helvetica,Arial,sans-serif; color: rgb(120, 120, 120); font-weight: 475; font-size: 20px; padding: 10px 10px 5px 10px;">Ingredients</div>
		<hr style="border-top: 1px solid rgb(245, 245, 245); margin: 0px 0px 10px 0px;">
		<table id="arIngredientList" style="width: 100%;"></table>
	</div>
`;

const close_btn = `
	<div id="arClose" style="color: rgb(200, 200, 200); cursor: pointer; font-size: 26px; font-weight: 400; line-height: 1; text-align: center; width: 22px; float: right; margin: 5px">×</div>
`;

const select_btns = `
	<div style="font-family: 'Segoe UI',Roboto,Helvetica,Arial,sans-serif; color: rgb(41, 42, 42); font-weight: 500; font-size: 16px; padding: 25px 10px 15px 10px; text-align: left;">Select a store...</div>
`;

const popup_reg = styling + `
	<div class="arpopup" style="z-index: 2147483647;">
		<div style="width: 700px; left: calc(50vw - 350px); position: fixed; z-index: 1; pointer-events: auto; border-radius: 4px; box-sizing: border-box; top: calc(50vh - 250px);">
			<div style="position: fixed; top: 0px; left: 0px; background-color: rgb(80, 80, 80); opacity: 0.8; height: 100vh; width: 100vw;"></div>
			<div style="position: relative;">
				<div style="overflow: visible; border-radius: 4px; box-sizing: content-box;">
					<div style="height: 500px; width: 100%;">
						<div id="arLeft" style="background-color: rgb(255, 255, 255); border-bottom-left-radius: 3px; border-top-left-radius: 3px; display: inline-block; height: 500px; padding: 0px; position: relative; vertical-align: top; width: 65%;">`
						+list+
						`</div><div id="arRight" style="background-color: rgb(245, 245, 245); border-bottom-right-radius: 3px; border-top-right-radius: 3px; display: inline-block; height: 500px; position: relative; text-align: center; vertical-align: top; width: 35%;">`
						+close_btn+select_btns+
						`</div>
					</div>
				</div>
			</div>
		</div>
	</div>
`;

const popup_add_to_menu = `<div id="arContainer">` + styling + `
		<div class="arpopup" style="z-index: 2147483647;">
			<div style="width: 700px; left: calc(50vw - 350px); position: fixed; z-index: 1; pointer-events: auto; border-radius: 4px; box-sizing: border-box; top: calc(50vh - 295px);">
				<div style="position: fixed; top: 0px; left: 0px; background-color: rgb(80, 80, 80); opacity: 0.8; height: 100vh; width: 100vw;"></div>
				<div style="position: relative;">
					<div style="border-radius: 4px;">
						<div style="height: 80px; width: 100%; margin-bottom: 10px;">
							<div id="arAddMenu" style="position: absolute; overflow: hidden; background-color: rgb(255, 255, 255); display: inline-block; height: 80px; position: relative; text-align: center; vertical-align: top; width: 100%;"></div>
						</div>
						<div style="height: 500px; width: 100%;">
							<div id="arLeft" style="background-color: rgb(255, 255, 255); border-bottom-left-radius: 3px; border-top-left-radius: 3px; display: inline-block; height: 500px; padding: 0px; position: relative; vertical-align: top; width: 65%;">`
							+list+
							`</div><div id="arRight" style="background-color: rgb(245, 245, 245); border-bottom-right-radius: 3px; display: inline-block; height: 500px; position: relative; text-align: center; vertical-align: top; width: 35%;">`
							+close_btn+select_btns+
							`</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
`;

/*
* Spoonacular
*/

const API_KEY = "e90e236d30ad49e896e2b6819201fe3c";
const EXTRACT_URL = "https://api.spoonacular.com/recipes/extract";

const EXTRA_UNIT_TYPES = [
	"unit", "sachet", "block", "tin"
]

const IMG_URL = "https://spoonacular.com/cdn/ingredients_100x100/";

const AISLE_IMPORTANCE = {
	"Not in Grocery Store/Homemade": 0,
	"Online": 1,
	"Savory Snacks": 2,
	"Sweet Snacks": 3,
	"Tea and Coffee": 4,
	"Alcoholic Beverages": 5,
	"Beverages": 6,
	"Cereal": 7,
	"Canned and Jarred": 8,
	"Grilling Supplies": 9,
	"Oil, Vinegar, Salad Dressing": 10,
	"Spices and Seasonings": 11,
	"Ethnic Foods": 12,
	"Baking": 13,
	"Condiments": 14,
	"Nut butters, Jams, and Honey": 15,
	"Bakery/Bread": 16,
	"Bread": 17,
	"Nuts": 18,
	"Dried Fruits": 19,
	"Milk, Eggs, Other Dairy": 20,
	"Refrigerated": 21,
	"Frozen": 22,
	"Pasta and Rice": 23,
	"Gluten Free": 24,
	"Health Foods": 25,
	"Cheese": 26,
	"Gourmet": 27,
	"Produce": 28,
	"Seafood": 29,
	"Meat": 30
}

/*
* General
*/

const RUNNABLE = [
	"https://www.hellofresh.com.au/recipes/"
];
