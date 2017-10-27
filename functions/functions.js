var a = 10;
var ggg;
if (a > 0){
	ggg = function(){
		console.log('!')
	}
}else{
	ggg = function(){
		console.log('!!')
	}
}

var ggg1 = function(num, f){
	return f(num);
}

var square = function(num){
	return num*num;
}

var ret3 = function(){
	return 3;
}

var ret4 = function(){
	return 4;
}

var sum2functions = function(f1, f2){
	return f1() + f2() ; 
}

var cube = function(num){
	return num * num * num;
}

var greatFunc = function(num, f1, f2){
	return f1(num) + f2(num);
}

var arr1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

var each = function(arr, funArr){
	for (var i = 0; i < arr.length; i++){
		funArr[i % funArr.length](arr[i]);
		console.log(arr[i]);
	}
}

var fun = function(par){
	console.log(par + 1);
}

var func = function(par){
	console.log(par + 3);
}

var funct = function(par){
	console.log(par + 5);
}

var functi = function(par){
	console.log(par + 7);
}

var functio = function(par){
	console.log(par + 9);
}

var funArr1 = [fun,func,funct,functi,functio]

