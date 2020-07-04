// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 100 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit
// An additional surcharge of 20% is added to the bill

function electricityBill(units){
	var cost = 0;
	if(units >= 50){
		console.log("if of 50 units")
		cost = cost + 50* 0.5
		units = units - 50;
	}else{
		console.log("else of 50 units");
		cost = cost + units* 0.5
		units = 0;
	}
	if(units >= 100){
		cost = cost + 100 * 0.75;
		units = units - 100;
		
	}else{
		cost = cost + units * 0.75
		units = 0;
	}
	if(units >= 100){
		cost = cost + 100 * 1.20;
		units = units - 100;
		
	}else{
		cost = cost + units * 1.20;
		units = 0;
	}
	if(units > 0){
		cost = cost + units * 1.50;	
	}
	cost = cost + (cost * 20) /100;
	return cost;
}

var bill = electricityBill(700);
console.log(bill)