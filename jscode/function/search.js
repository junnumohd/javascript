function search(arr,num){
    for(var i=0; i<arr.length;i++){
        if(arr[i] === num){
            return true;
        }    
    }
    return false;
}
var x =search([1,2,3,4,5,6], 10);
console.log(x);