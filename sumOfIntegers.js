// for(var i=1; i<=10; i++){
//     var result= i*5;
//     var modulo= result % 2;
//     if(modulo === 0){
//         console.log(result, "---even")
//     }
//     else{
//         console.log(result, "---odd")
//     }

// }

// var arr= [12,22,10,34,21,98,4,6];
// for(var i=0; i< arr.length; i++){
//     if(arr[i] > 12){
//         console.log(arr[i]);
//     }

// }
var x = 10000
var total= 0;
for(var i=1; i<=x; i++){
    total= total+i;
}
console.log(total);