var employee = {
    name: "Hello",
    getName: function(){
        return this.name
    },
    hobbies: ["Music", "Net", "Reading"],
    getHobbies: function(){
        return this.hobbies[2]
    }
}

employee.name = "Zubair"; 
employee.getHobbies = function() {
    return employee.hobbies2;
}
var hobbies = employee.hobbies[0]
var hob = employee.getHobbies();
var funHob = employee.getHobbies
var name = employee.age;
var age = employee.name;
console.log("zubair1")

