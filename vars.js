function concateArray(arr1, arr2){
    if(!Array.isArray(arr1)){
        return;
    }
    var arr = [];
    for(var i = 0 ; i < arr1.length ; i++){
        arr.push(arr1[i])
    }
}

concateArray()