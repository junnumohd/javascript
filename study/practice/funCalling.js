function callee(par){  // 94
    var c = par + 2; // 96
    return c;
}

var callback = function(a){ // 44
    a = a * 2; // 88
    return a;
}

var timeFunction = function(a, fun1, fun2){  // 44 / callback // collee 
    a = fun1(a) // 88
    a = a + 2 // 90
    a = fun2(a); // 92
    return a
}
function execute(fun1, func2, func3, x){ // callback // timeFunction //  callee// 10
    var a = x + 12; // 22
    a = fun1(a) // 44
    a = func2(a, fun1, callee);// 92
    a = a + 2;// 94
    return func3(a); // 96
}
var num = 10;
var returnVal = execute(callback, timeFunction, callee, num)
console.log(returnVal);


