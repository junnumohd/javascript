
// function arrayPrint(){
//     var arr= [12,22,11,32,5,7,8,];
//     var num = 10;
//     for(var i=0; i<arr.length; i++){
//         if(arr[i] >num){
//             console.log(arr[i]);
//         }
//     }
//     console.log(x);
// }
// function search (num, arr){
//     for(var i = 0 ; i < arr.length ; i++){
//         if(arr[i] === num){
//             console.log("found");
//         }
//     }
// }
// function sumThreeNumbers(a, b, c){
//     var x = a + b +c;
//     console.log(x);
// }
//arrayPrint();
//search(121, [11,2,3,112,14,90])
//sumThreeNumbers(11, 2, 3)
function printName(firstName, lastName){
    var fullName = firstName+" "+lastName
    return fullName;
}

var a = printName("ram", "kumar");
var b = printName("Abdul", "Harish");
var c = printName("Mohd", "Zeeshan");

console.log(a);
console.log(b);
console.log(c);