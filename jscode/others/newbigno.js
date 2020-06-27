var arr= [10,21,24,52,11,16,33,6,91,6];
for(i = 0; i< arr.length; i++){
    if(arr[i] > 20){
        var modulo = arr[i] % 2;
        if(modulo === 0){
            console.log(arr[i], "---even")
        }else{
            console.log(arr[i], "---odd")
        }
    }

}