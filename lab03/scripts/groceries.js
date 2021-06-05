	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
	name: "Poulet (congelé)",
	vegetarian: false,
	glutenFree: false,
	organic: false,
	neutral: false,
	frozen: true,
	price: 23
	},
	{
		name: "viande (congelé)",
		vegetarian: false,
		glutenFree: false,
		organic: false,
		neutral: false,
		frozen: true,
		price: 18
	},
	{
		name: "tomates organiques (bio)",
		vegetarian: false,
		glutenFree: false,
		organic: true,
		frozen:false,
		neutral: false,
		price: 6
	},
	{
		name: "pommes de terre organiques (bio)",
		vegetarian: false,
		glutenFree: false,
		organic: true,
		neutral: false,
		frozen:false,
		price: 5
	},
	{
		name: "limonade",
		vegetarian: false,
		glutenFree: false,
		organic: false,
		neutral: true,
		frozen:false,
		price: 4
	},
	{
		name : "Lait de vache et de chèvre (lactose)",
		lactose: true,
		noix:false,
		organic: false,
		neutral: false,
		frozen:false,
		price: 5
	},
	{
		name : "Beurre (lactose)",
		lactose: true,
		noix:false,
		organic: false,
		neutral: false,
		frozen:false,
		price: 10
	},
	{
		name : "Crème fraiche (lactose)",
		lactose: true,
		noix:false,
		organic: false,
		neutral: false,
		frozen:false,
		price: 7
	},
	{
		name : "Huiles de noix (noix)",
		lactose: false,
		noix:true,
		organic: false,
		neutral: false,
		frozen:false,
		price: 13
	},
	{
		name : "Pralines (noix)",
		lactose: false,
		noix:true,
		organic: false,
		neutral: false,
		frozen:false,
		price: 11
	},
	{
		name : "Sauces barbecue (noix)",
		lactose: false,
		noix:true,
		organic: false,
		neutral: false,
		frozen:false,
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
	var frozen = document.querySelector(   
		'input[name="frozen"]:checked');   
	var addNoix = false;
	var addLactose = false;
	var addOrganic = false;
	var addFrozen= false;
	if(noix.className == "noix"){
		addNoix= true;
	}
	if(lactose.className == "lactose"){
		addLactose= true;
	}
	if(organic.className == "organic"){
		addOrganic= true;
	}
	if(frozen.className == "frozen"){
		addFrozen= true;
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
		} 
		else if (addFrozen && (prods[i].frozen)){
			product_names.push(prods[i]);
		} 
		else if (prods[i].neutral){
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
