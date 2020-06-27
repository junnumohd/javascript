function getFirstName(){
    var firstNameInput = document.getElementById('firstname');
    var value = firstNameInput.value;
    var id = firstNameInput.id;
    var name = firstNameInput.name;
    var type = firstNameInput.type;
    firstNameInput.style.color = "red";
    console.log(value, type, name, id)
   
}
function callOnKeyPress(){
    var firstNameInput = document.getElementById('firstname');
    console.log(firstNameInput.value)
}

function showData(params) {
    var firstNameInput = document.getElementById('firstname');
    var divElement = document.getElementById('result');
    var value = firstNameInput.value;
    divElement.innerHTML = value;
}

// var a = { 
//     name:{
//         firstname: "zubair",
//         lastname: "hello",
//     },
//     hobies:["music","net","reading"],
//     age:24,
// }

// var b = a.name;
// var c = b.lastname;
// var d = a.hobies[1];
// var e =a.age;
// var employee ={
//     name: {
//             firstname: "mohd",
//             lastname: "junaid",
//         },
//     age: 34,
//     qualification: "graduation",
//     address:-{
//         steet: "jamia",
//         landmark:"kfc",
//         hno: "1234",
//     },
//     hobies: ['music', 'reading', 'writing']
// }

// var add = employee.address;
// var house = add.hno;
// var name = employee.name
// var hobies = employee.hobies;
// console.log(add);
// console.log(employee.hobies[2])
// console.log(add.landmark);
// console.log(hobies[0])
// console.log(employee.qualification);










