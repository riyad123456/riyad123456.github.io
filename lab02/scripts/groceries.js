	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "tomates organiques (organic)",
		vegetarian: false,
		glutenFree: false,
		organic: true,
		neutral: false,
		price: 6
	},
	{
		name: "pommes de terre organiques (organic)",
		vegetarian: false,
		glutenFree: false,
		organic: true,
		neutral: false,
		price: 5
	},
	{
		name: "viande",
		vegetarian: false,
		glutenFree: false,
		organic: false,
		neutral: true,
		price: 18
	},
	{
		name: "limonade",
		vegetarian: false,
		glutenFree: false,
		organic: false,
		neutral: true,
		price: 4
	},
	{
		name : "Lait de vache et de chèvre (lactose)",
		lactose: true,
		noix:false,
		organic: false,
		neutral: false,
		price: 5
	},
	{
		name : "Beurre (lactose)",
		lactose: true,
		noix:false,
		organic: false,
		neutral: false,
		price: 10
	},
	{
		name : "Crème fraiche (lactose)",
		lactose: true,
		noix:false,
		organic: false,
		neutral: false,
		price: 7
	},
	{
		name : "Huiles de noix (noix)",
		lactose: false,
		noix:true,
		organic: false,
		neutral: false,
		price: 13
	},
	{
		name : "Pralines (noix)",
		lactose: false,
		noix:true,
		organic: false,
		neutral: false,
		price: 11
	},
	{
		name : "Sauces barbecue (noix)",
		lactose: false,
		noix:true,
		organic: false,
		neutral: false,
		price: 7
	},
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	var noix = document.querySelector(   
		'input[name="noix"]:checked');   
	var lactose = document.querySelector(   
			'input[name="lactose"]:checked');   
	var organic = document.querySelector(   
                'input[name="organic"]:checked');   
	var addNoix = false;
	var addLactose = false;
	var addOrganic = false;
	if (noix!=null){
		if(noix.id == "noix"){
			addNoix= true;
		}
	} else {
		addNoix= true;
	}
	if (lactose!=null){
		if(lactose.id == "lactose"){
			addLactose= true;
		}
	} else {
		addLactose = true;
	}
	if (organic!=null){
		if(organic.id == "organic"){
			addOrganic= true;
		}
	} else {
		addOrganic= true;
	}
	for (let i=0; i<prods.length; i+=1) {
		if (addNoix && (prods[i].noix )){
			product_names.push(prods[i]);
		}
		else if (addLactose && (prods[i].lactose)){
			product_names.push(prods[i]);
		}
		else if (addOrganic && (prods[i].organic)){
			product_names.push(prods[i]);
		} else if (prods[i].neutral){
			product_names.push(prods[i]);
		}
	}
	const len = product_names.length;
	for (let i = 0; i < len; i++) {
        for (let j = 0; j < len-1; j++) {
            if (product_names[j].price > product_names[j+1].price) {
                let tmp = product_names[j];
                product_names[j] = product_names[j+1];
                product_names[j+1] = tmp;
            }
        }
    }
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
