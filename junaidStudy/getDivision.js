// function getDivision(subjects,fullMarksPerSubjects){
// 	var totalmarks = 0;
// 	for(i=0; i<subjects.length; i++){
// 		totalmarks = totalmarks + subjects[i];
// 	}
// 	var perMarks = subjects.length + fullMarksPerSubjects;
// 	var percentage = (totalmarks / perMarks) * 100;
// 	if(percentage >= 75){
// 		return "with honour";
// 	}
// 	if(percentage >= 60 && percentage <75){
// 		return "Ist Division";
// 	}
// 	if(percentage >= 45 && percentage <60){
// 		return "Second Division";
// 	}
// 	if(percentage >= 33 && percentage <45){
// 		return "Third Division";
// 	}
// 	if(percentage <33){
// 		return "fail";
// 	}

// }
// var getPercentage = getDivision([55],100);
// console.log(getPercentage);
// Basic Salary <= 10000 : HRA = 20%, DA = 80%
// Basic Salary <= 20000 : HRA = 25%, DA = 90%
// Basic Salary > 20000 : HRA = 30%, DA = 95%
function grossSalary(basicSalary){
	var hra = da = grossSalary = 0;
	if(basicSalary <= 10000){
		console.log("in greater 10000")
		hra = (basicSalary * 20) / 100;
		da = (basicSalary * 80) / 100;
		grossSalary = basicSalary + hra + da;
	}
	else if(basicSalary <=20000){
		console.log("in less 20000")
		hra = (basicSalary * 25) / 100;
		da = (basicSalary * 90) / 100;
		grossSalary = basicSalary + hra + da;
	}
	else if(basicSalary >20000){
		console.log("in greater 20000")
		hra = (basicSalary * 30) / 100;
		da = (basicSalary * 95) / 100;
		grossSalary = basicSalary + hra + da;
		return grossSalary;
	}
	return grossSalary;
}
var Salary = grossSalary(9000); 
console.log(Salary);