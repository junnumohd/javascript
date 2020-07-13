// function marksPercentage(subjects,fullMarksPerSubjects){
// 	var totalMarks = 0;
// 	for(var i=0; i< subjects.length; i++){
// 		totalMarks = totalMarks + subjects[i];
// 	}
// 	var fullMarks = subjects.length * fullMarksPerSubjects;
// 	var percentage = (totalMarks / fullMarksPerSubjects)* 100;

// 	return percentage;
// }
		
// var b = marksPercentage([45,55,66,54,99,65],100);
// console.log(b);
function starPrint(n){
	var star = "";
	for(var i=1; i<=n; i++){
		for(var j=1; j<=i; j++){
			star = star + '*';
		}
		star = star + '\n'
	}
	console.log(star)
}
starPrint(5);
