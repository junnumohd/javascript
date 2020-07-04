function a(){
	console.log("In a")
}

function b(){
	console.log("In b")
}

function c(fun1, fun2){
	fun1();
	fun2()
}

c(a,b);