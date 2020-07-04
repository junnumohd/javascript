// function sum(arr){
// 	var result=0;
//     for(var i=0; i<arr.length; i++){
//     	result= result+arr[i];
// 	}
// 	return result;
// }
// var x = sum([2,3]);
// console.log(x);

function maxNum(arr) {
	var max = Number.MIN_SAFE_INTEGER;
	for(var i=0; i<arr.length; i++){
    	if(arr[i]>max){
        	max = arr[i];
    	}
    }	
    return max;
}
var x = maxNum([1,2,3,4,5,6]);
// console.log(x);

function factorial(n){
	var result=1;
	for(var i=1; i<=n; i++){
		result=result*i;
	}
	return result;
}
var resultFact = factorial(3);
// console.log(resultFact);

function square(number){
	var result=number*number;
	return result;
}
var y = square(4);
// console.log(y);

function cube(number){
	var result=number*number*number;
	return result;
}
var z = cube(2);
// console.log(z)

function factorial(n){
	var result=1;
	for(var i=n; i>=1; i--){
		result=result*i;
	}
	return result;
}
// var reverstFact = factorial();
// console.log(reverstFact);

function reversArr(arr1,arr2){
	var arr=[];
	for(var i=0; i<arr1.length; i++){
		arr.push(arr1[i])
	}
	for(var i=arr2.length-1; i>=0; i--){
		arr.push(arr2[i]);

	}

	return arr;

}
var b = reversArr([2,3,4,],[4,5,6]);
// console.log(b);

function checkArr(a,b,c){
	// if(Array.isArray(a) && (Array.isArray(b)) ){
	// 	return true;
	// }
	// if(Array.isArray(b) && (Array.isArray(c))){
	// 	return true;
	// }
	// if(Array.isArray(c) && (Array.isArray(a))){
	// 	return true;
	// }
	var flag = false
	if(Array.isArray(a)){
		if(Array.isArray(b) || Array.isArray(c)){
			flag = true;
		}
	}else{
		if(Array.isArray(b) && Array.isArray(c)){
			flag = true;
		}	
	}
	return flag;
}
 var flag = checkArr(1,[],[]);
 // console.log(flag);

 function compare(a,b){
 	if(a<=10 && b>=15){
 		return true;
 	}
 	return false;
 }
  var r = compare( 4,16);
 	 // console.log(r);

 	 // function grade(per){
 	 // 	if(per>=75 && per<=100){
 	 // 		return "withHonour";
 	 // 	}
 	 // 	if(per>=60 && per<75){
 	 // 		return "FirstDevision";
 	 // 	}
 	 // 	if(per>=45 && per<60){
 	 // 		return 'secondDevision';
 	 // 	}
 	 // 	if(per>=33 && per<45){
 	 // 		return 'thirdDevision';
 	 // 	}
 	 // 	if(per<33){
 	 // 		return 'fail';
 	 // 	}
 	 // 	return 'not valid num';
 	 // }
 	 // var u = grade(75);
 	 // console.log(u)

 	 function bigNum(a,b,c){
 	 	if(a>=b && a>=c){
 	 		return a;
 	 	}
 	 	if(b>=c && b>=a){
 	 		return b;
 	 	}
 	 	return c;
 	 }
 	 var m = bigNum(4,200,100);
 		 // console.log(m);

 		 function negativePositive(n){
 		 	if(n<0){
 		 		return "negative";
 		 	}
 		 	if(n>0){
 		 		return "positive";
 		 	}
 		 		return 0;
 	}

 		 		
 			
 		 
var y= negativePositive(0);
// console.log(y);
function maxNum(a,b,c){
	if(a>=b && a>=c){
		return a;
	}
	if(b>=c && b>=c){
		return b;
	}

	return c;

}
var q = maxNum(14,41,12);
// console.log(q);

var result=0;
function num(n){
	var modulo= n%2;
	if(modulo===0){
		return "even";
	}
	return "odd";
}
var u = num(11);
	// console.log(u);

	function leapYear(leap){
		var mod4 = leap % 4;
		var mod100 = leap % 100;
		if((mod4 === 0) && (mod100 !==0))
		{
			return "is leapyear";
		}

			return "is not leapyear";
		
	}
var c = leapYear(1984);
// console.log(c);

function newNum(n){
	
	if((n % 5 === 0) || ( n % 11 === 0)){
		return true;
	}
	return false;
}
var r = newNum(109);
console.log(r);

function typeDeta(deta){
 if(Array.isArray(deta)){
 	return "array";
 }
 	return typeof deta;
}
var b = typeDeta({});
function f(){}
// console.log(b);
function alpha(n){
	if(typeof n === "string" && n.length === 1){
		return alphabate;
	}
	return null;
}
var m = alpha("j");
// console.log(m);