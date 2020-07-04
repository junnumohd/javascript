function amount(amount){
	var note2000 = note500 = note200 = note100 = note50 = note20 = note20 = note10 = note5 = note2 = note1 = 0;
	if(amount > 2000){
		var divide2000 = amount / 2000;
		note2000 = Math.floor(divide2000);
		amount = amount % 2000;
	}
	if(amount > 500){
		var divide500 = amount / 500;
		note500 = Math.floor(divide500);
		amount = amount % 500;
	}
	if(amount > 200){
		var divide200 = amount / 200;
		note200 = Math.floor(divide200);
		amount = amount % 200;
	}
	if(amount > 100){
		var divide100 = amount / 100;
		note100 = Math.floor(divide100);
		amount = amount % 100;
	}
	if(amount > 50){
		var divide50 = amount / 50;
		note50 = Math.floor(divide50);
		amount = amount % 50;
	}
	if(amount > 20){
		var divide20 = amount / 20;
		note20 = Math.floor(divide20);
		amount = amount % 20;
	}
	if(amount > 10){
		var divide10 = amount / 10;
		note20 = Math.floor(divide10);
		amount = amount % 10;
	}
	if(amount > 5){
		var divide5 = amount / 5;
		note5 = Math.floor(divide10);
		amount = amount % 5;
	}

	if(amount > 2){
		var divide2 = amount / 2;
		note2 = Math.floor(divide2);
		amount = amount % 2;
	}
	note1 = amount;
	var obj = {}
	obj.note2000 = note2000;
	obj.note500 = note500;
	obj.note200 = note200;
	obj.note100 = note100;
	obj.note50 = note50;
	obj.note20 = note20;
	obj.note10 = note10;
	obj.note5 = note5;
	obj.note2 = note2;
	obj.note1 = note1;
	return obj;

}
var a = amount(2743);
console.log(a);