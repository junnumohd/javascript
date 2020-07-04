// function modulo(n){
	
// 	var modu5 = n %5;
// 	var modu11 = n %11;
// 	if((modu5 === 0) || (modu11 === 0)){

// 		return true;
// 	}
// 	return false;
// }
// var r = modulo(109);
// console.log(r);
 // function checkchar(n){
 // 	if((n === 'a') || (n === 'e') ||(n === 'i') || (n === 'o') || (n === 'u')){
 // 		return "vowel";
 // 	}
 // 		return "consonant";
 // }
 // var v = checkchar("a");
 // console.log(v);
 // function weakDay(n){
 // 	var result = "Number is not valid"
 // 	if(n === 1){
 // 		result = "Monday"
 // 	}else if (n === 2) {
 // 		result = "Tuesday"
 // 	}
 // 	else if (n === 3) {
 // 		result = "Wednesday"
 // 	}
 // 	else if (n === 4) {
 // 		result = "Thursday"
 // 	}
 // 	else if (n === 5) {
 // 		result = "Friday"
 // 	}
 // 	else if (n === 6) {
 // 		result = "Saturday"
 // 	}
 // 	else if (n === 7) {
 // 		result = "Sunday"
 // 	}

 // 	return result;
 // }
 // var c = weakDay(7);
 // console.log(c);
 function dayCount(n){
 	var result = "number is not valid";
 	if((n === 1) || (n === 3) || (n === 5) || (n === 7) || (n === 8) || (n === 10) || (n === 12)){
 		result = 31;
 	}
 	else if((n === 4) || (n === 6) || (n === 9) || (n === 11)){
 		result = 30;
 	}
 	else if((n === 2)){
 		result = 28;
 	}
 	return result;

 }
 console.log(dayCount(11));
 // var b = dayCount(2);
 // console.log(b);
