function fun1(){
	console.log("c");
}
function fun2(){
	console.log('d');
}
function fun3(){
	console.log('b');
}
var obj ={
	fun4:function(){
		console.log('a')
	}
}
fun1();
setTimeout(fun2, 2000);
setTimeout(obj.fun4, 1500);
setTimeout(fun3, 1000);