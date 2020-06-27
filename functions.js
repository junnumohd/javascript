
// function addition(a, b){
//     var c = a + b;
//     return c;
// }


// var a = 10 + 12;

// var y = addition(12, 13);
// console.log(y)
// var arr=[20,11,17,18,15,24,27];
// for(var i=0; i<arr.length; i++){
//     var modulo=arr[i] % 2;
//     if(modulo === 0){
//         console.log(arr[i],"-even");
//     }
//     else{
//         console.log(arr[i],"-odd")

//     }
// }
// var arr=[17,22,33,44,55,66,77,88,99];
// for(var i=0; i<arr.length; i++){
//     var modulo= arr[i] % 2;
//     if(module === 0){
//     console.log(arr[i],"-Even");
//     }1  
//     else{
//         console.log(arr[i],"-Odd");
//     }
// }
// function module(n){
//     var module= n % 2;
//     if(module === 0){
//         return "even"
//     }
//     return "odd";
// }
// var x = module(1);
// console.log(x);
// function name(arr){
//     var arr1=[1,2,3,4,5,6,7];
//     var arr2=[];
//     for(var i=0; i<arr1.length; i++){
//         arr2.push(arr1[i]);
//     }
//     for(var i=0; i<arr.length; i++){
//         arr2.push(arr[i]);
//     }
//     return arr2;
// }
// var result=name([11,12]);
// console.log(result);
function name(arr1,arr2){
    var arr=[];
    for(var i=0; i<arr1.length; i++){
        arr.push(arr1[i]);
    }
    for(var i=0; i<arr2.length; i++){
        arr.push(arr2[i]);
    }
    return arr;
}
function name1(arr1,arr2){
    var arr=[];
    var len = arr1.length > arr2.length ?  arr1.length : arr2.length;
    for(var i = 0 ; i < len ; i++){
        if(arr1[i] !== undefined){
            arr.push(arr1[i])
        }
        if(arr2[i] !== undefined){
            arr.push(arr2[i])
        }
    }
    return arr;
}
var x = name([1,2],[4,5,6,7,7]);
console.log(x);

