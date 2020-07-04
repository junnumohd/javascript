function fun1(a){ // 32
	var c = a+a  // 64
	var d = c +11 // 75
	return c;
}

function fun2(b){ // 10
	var c = b +2 // 12
	var x = fun4(c) // 64
	x = x+16  // 80
	return x;
}

function fun3(a){ // 32
	var x = a *2  // 64
	var b = fun1(a) // 64
	b = x + 3 // 67
	return x;
}

function fun4(a){  // 12 
	var x = a + 4; // 16
	var d = x +x; // 32
	d = fun3(d); // 64
	return d;
}


var x = 10
var vara = fun2(x)
console.log(vara)