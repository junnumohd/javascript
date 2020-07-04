// function amount2k(amount){
// 	var note2000 = 0;
// 	if(amount > 2000){
// 		var divide = amount/2000;
// 		return Math.floor(divide);
// 	}
// 	return 0
// }
// var b = amount2k("3000");
// console.log(b)
// function profitLoss(cp,sp){

// 	if(sp > cp){
// 		return "profit";
// 	}
// 	return "loss";
// }
// var c = profitLoss(100,120);
// console.log(c);
// function numberMarks(a,b,c,d,e){
// 	var result = (a+b+c+d+e) / 5;
// 	return result;
// }
// var b = numberMarks(64,55,70,88,80);
// console.log(b);
function totalPercent(subjects, fullMarksPerSubjects){
	var totalMarks = 0;
	for(var i = 0; i < subjects.length; i++){
		totalMarks = totalMarks + subjects[i];
	}
	var fullMarks = subjects.length * fullMarksPerSubjects;
	var percentage = (totalMarks / fullMarksPerSubjects) * 100;

        return percentage;
}
var f = totalPercent([58,53,38,45,52,54],100);
console.log(f);