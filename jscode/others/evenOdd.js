// var arr = [ 11, 13, 12, 9, 18, 1, 17, 15, 19];

// for(var i= 0; i < arr.length; i++){
//     var modulo = arr[i] % 2;
//     if(modulo === 0){
//         console.log(arr[i], "---EVEN")
//     }else{
//         console.log(arr[i], "---ODD")
//     }
// }
var arr = [ 11, 12, 15, 18, 13, 19, 23 ];
    for( var i= 0; i< arr.length; i++){
        var modulo = arr[i] % 2;
        if(modulo === 0){
            console.log(arr[i], "---even")
        }else{
            console.log(arr[i], "---odd")
        }
    }