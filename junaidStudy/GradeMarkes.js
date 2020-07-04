function gradeMarks (sunjects, fullMarksPerSubjects) {// [10, 15, 20 , 9] , 20
	var totalMarks = 0; // 0
	for(var i = 0; i< sunjects.length; i++){ // i: 0 -> 1 -> 2 -> 3
		totalMarks = totalMarks + sunjects[i]; //totalMarks: 10 -> 25 -> 45 -> 54
	}
	console.log(totalMarks) // 54
	var perMarks = sunjects.length * fullMarksPerSubjects; // 80
	console.log(perMarks);
	var percentage = (totalMarks / perMarks) * 100; // 67.5
	var grade = checkForGreade(percentage); // grade D
	return grade;
}
function checkForGreade(percentage){ // 67.5
	if(percentage >= 90){
		return "grade A";
	}
	if(percentage >= 80){
		return "grade B";
	}
	if(percentage >= 70){
		return "grade C";
	}
	if(percentage >= 60){
		return "grade D";
	}
	if(percentage >= 40){
		return "grade E";
	}
	return "grade F"
}
var marks = [10, 15, 20, 9]
var fullMark = 20;
var grade = gradeMarks(marks, fullMark);
console.log(grade);