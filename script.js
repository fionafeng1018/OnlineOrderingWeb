"use strict";
/*
   
   Finished by: Chao Feng 300843028

*/

//display total
function calcTotal(){
	var total=0;
	var tax=0;
	var totalWithTax=0;
	var items=document.getElementsByTagName("input");
	var totalPrint=document.getElementById("total");
	var taxPrint=document.getElementById("tax");
	var totalWithTaxPrint=document.getElementById("totalWithTax");
	var pizzaNamePrint=document.getElementById("pizzaName");	
	var toppings=document.getElementsByName("toppings");
	var toppingPrint=document.getElementById("toppingPrint");
	var cheese=document.getElementsByName("cheese");
	var cheesePrint=document.getElementById("cheesePrint");
	var quantity=document.getElementById("number");
	var sumTotal;
	
	
	//var cheeseChoice=["Regular cheese","Double cheese"];
	var names=["Pepperoni","Classic Italian","Jumbo Deluxe","Meat Lover","Seafood Deluxe","Spicy Chicken","Tuna Deluxe","Veggle Special"];
	//var toppings=["Black Olives","Broccoli","Tomato","Mushrooms","Green Peppers","Chicken","Sausage","Beef"];
	
	//create object
	var toppingInfo={
		topping0:"Black Olives",
		topping1:"Broccoli",
		topping2:"Tomato",
		topping3:"Mushrooms",
		topping4:"Green Peppers",
		topping5:"Chicken",
		topping6:"Sausage",
		topping7:"Beef"};
	 var count=0;
	// show toppings:
	for(var x=0; x<toppings.length; x++){
		if(toppings[x].checked){
			//count++;
			toppingPrint.innerHTML+=toppingInfo["topping"+x]+"<br>";
		}
	}
	//create object
	var cheeseInfo={
		cheese1:"Regular Cheese",
		cheese2:"Double Cheese"
	};
	for(var y=0; y<cheese.length; y++){
		if(cheese[y].checked){
			count++;
			cheesePrint.innerHTML+=cheeseInfo["cheese"+count];
		}
	}
	
	//show pizza name:
	for(var j=0; j<8; j++){
		if(items[j].checked){
			pizzaNamePrint.innerHTML=names[j];
		}		
	}
	//show price:
	for(var i=0; i<18; i++){		
		if(items[i].checked){
			total+=(items[i].value*1);
		}
	}
	sumTotal = total*quantity.value;
	tax=sumTotal*0.13;
	totalWithTax=sumTotal+tax;
	
	totalPrint.innerHTML="Total: "+sumTotal.toFixed(2);
	taxPrint.innerHTML="Tax: "+tax.toFixed(2);
	totalWithTaxPrint.innerHTML="Total with tax: "+totalWithTax.toFixed(2);
	
}



