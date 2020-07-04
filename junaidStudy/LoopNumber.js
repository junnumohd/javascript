// function loopNumber(number){
// 	for(var i=1; i<number; i++){
// 		console.log(i);
			
// 	}

// }

// loopNumber(19);
// function reversNumber(number){
// 	for(var i = number; i >0; i--){
// 		console.log(i);
// 	}
// }
// reversNumber(20);
// function evenNumber(){
// 	for(var i=2; i<=100; i=i+2){
// 		console.log(i);
// 	}
// }
// evenNumber();

// function oddNumber(){
// 	for(var i=1; i<=100; i=i+2){
// 		console.log(i);
// 	}
// }
// oddNumber();
// function sumNumber(n){
// 	var sum = 0;
// 	for(i=1; i<=n; i++){
// 		sum = sum + i;
	
// 	}
// 		return sum;

// }
// var a = sumNumber(4);
// console.log(a);
// function sumNumber(n){
// 	var sum = 0;
// 	for(i=2; i<=n; i=i+2){
// 		sum = sum + i;
	
// 	}
// 		return sum;

// }
// var b = sumNumber(20);
// console.log(b);
// function sumOddNumber(n){
// 	var sum = 0;
// 	for(i=1; i<=n; i=i+2){
// 		console.log(i);
// 		sum = sum + i;
	
// 	}
// 		return sum;

// }
// var b = sumOddNumber(9);
// console.log(b);
// function pahada(a){
// 	var tab = [];
// 	for(var i = 1; i <=10; i++){
// 		tab.push(a*i);
// 	} 
// 	return tab;
// }
// var printPahada = pahada(3);
// console.log(printPahada);
function digitCountAndSum(num){
	var sum = 0;
	var count = 0;
	while (num !== 0) {
		var lastdigit = num % 10;
		sum = sum + lastdigit;
		num = Math.floor(num / 10);
		count++;
	}
	return sum;
}
var b = digitCountAndSum(433);
console.log(b);
// function firstAndLastDigit(num){
// 	var lastdigit = num % 10;
// 	while (num >= 10) {
// 		num = Math.floor(num / 10);
// 	}
// 	console.log("lastdigit",lastdigit)
// 	console.log("firstdigit",num);
// }
// firstAndLastDigit(1223);

