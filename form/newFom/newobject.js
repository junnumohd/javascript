// var person={
//     name:{
//         firstname: "Mohd",
//         lastname: "Junaid",
//     },
//     age:24,
//     address:{
//         sreet: "24, new street",
//         landmark: "Tayyab",
//         hno: "24",
//     },
//     vhecles:{
//         car: ['grandi10', 'santro'],
//         bike: ['fz', 'splendor'],
//     },
//     getname:function(){
//         return this.name;
//     },
//     getVhecles: function(){
//         return this.vhecles;
//     }
// }
// var name = person.name;
// var x = person.getname();
// var y = person.getVhecles();
// console.log(name);
// console.log(x.car);
// console.log(y.car[0]);
// console.log(x.lastname);

var person={
        hobies: [
            {
                reading: ['books'],
                writing: ['novel']
            },
            {
                reading: ['bo'],
                writing: ['no']
            }
        ],
        age:24,
        vhecles:{
            car: ['grandi10', 'santro'],
            bike: ['fz', 'splendor'],
        },
        getHobby:function(){
            return this.hobies[0];
        },
        getVhecles: function(){
            return this.vhecles;
        }
    }
var a = person.hobies;
console.log(a[1].reading[0]);
var b = person.getHobby('12');
console.log(b); 

