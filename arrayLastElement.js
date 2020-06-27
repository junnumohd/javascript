// var arr = [1,2,3,4,5, 6, 11];

// var lastIndex = arr.length - 1;

// var lastElement = arr[lastIndex];

// console.log(lastElement);


// var arr = [1,12,3,5,7,90, 29];
// var arr2 = [ 12, 13, 10, 18, 16, 17, 20]

// var a = 4;

// var b = a + 2;

// var c = arr[a] + arr2[b];

// var x = arr2[arr2.length - 2];

// c = x - 2

// var y = arr[arr.length - 1] + arr2[arr.length - 1] + c;

// console.log(a, b, c, x, y)
// var arr=[2,3,4,7,8,10,12];
// for(var i=1;i<arr.length;i=i+2){
//     console.log(arr[i]);

// }
// var arr= [2,7,8,10,12,14,8,28,10];
// var sum=1;
// for(var i=0;i<arr.length;i=i+4){
//     sum=arr[i];
//     sum=sum+sum;
// }
// console.log(sum);
// var arr=[3,4,7,10,11,12,1,0,10,20,21];
// var arr2=[];
// for(var i=0;i<arr.length;i=i+3){
//     arr2.push(arr[i]);
// }
// console.log(arr2);
// var arr=[1,2,3,4,5,6,7,8,9,10];
// var sum=1;
// for(var i=0;i<arr.length;i=i+2){
//     sum=arr[i];
//     sum=sum+sum;
// }
// console.log(sum);
// var arr=[1,2,3,4,5,6,7,8,9,10];
// var arr1=[];
// for(var i=0;i<arr.length;i++){
//     arr1.push(arr[i]);

// }
//     console.log(arr1);
// var arr=[2,4,6,8,10,12,7,0,9];
// var result=0;
// for(var i=0;i<arr.length;i++){
//     result=result+i+arr[i];
//     console.log(result);
// var arr=[4,5,7,8,10,11,2,0];
// var result=0;
// for(var i=0;i<arr.length;i=i+7){
//     result=result+arr[5];

    
// }
// result=result+arr[0];
// console.log(result);
// var arr=[1,2,4,7,0,0,2,7,8];
// var result=0;
// for(var i=0;i<arr.length;i=i+2){
//     result=i+arr[i];
//     console.log(result);
// }
// var student={
//     name: "zeeshan",
//     age:"30",
//     subjects: ["hindi","English","Math","science"],
//     marks:[50,55,99,61],
//     printMarks:function(){
//         for(var i=0 ; i<this.subjects.length ; i++){
//             console.log(this.subjects[i], this.marks[i]);
//         }
//     }
// };
// student.printMarks();
var employee={
    name:"ravi",
    age:"30",
    post:["Adviser","Superviser","AssistantManager","Manager"],
    salary:[17,25,30,55],
    printsalary:function(){
    for(var i=0; i<this.post.length; i++){
        console.log(this.post[i],this.salary[i]);
        }
    }
};
employee.printsalary();


