var arr = [
    {
        name: "Zubair",
        age: 32,
        jobType: "private"
    },
    {
        name: "Junaid",
        age: 29,
        jobType: "gov"
    },
    {
        name: "Rahul",
        age: 23,
        jobType: "private"
    },
    {
        name: "Ravi",
        age: 33,
        jobType: "gov"
    },
    {
        name: "Ravi",
        age: 33,
        jobType: "gov"
    },
    {
        name: "Ravi",
        age: 33,
        jobType: "private"
    }
]

// for( var i = 0 ; i < arr.length ; i++){
//     if(arr[i].age > 30){
//         console.log(arr[i].name);
//     }
// }

// for( var i = 0 ; i < arr.length ; i++){
//     if(arr[i].jobType === "private"){
//         console.log(arr[i].name);
//     }
// }

for( var i = 0 ; i < arr.length ; i++){
    if(arr[i].jobType === "private" && arr[i].age > 30){
        console.log(arr[i].name);
    }
}
