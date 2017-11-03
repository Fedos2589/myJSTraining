let numArr = [1,2,3,4,-5,6,7,-8,9];
let newArr = [];
let sum = 0;
let strArr = ['sgagasgrver', 'sd', 'ausfgh', 'f', 's', '', 'awfijgdsfgjb', 'awijefhwifb'];
let complexArr = [1,[2,3],4,-5,[6,7],-8,9];

numArr.forEach(function(i){
	newArr.push(i*i);

})

numArr.forEach(function(i){
	sum += i;
})

let mapArr = numArr.map(function(i){
	return i*i;
})

function allPositive(elem){
	return elem > 0;
}

numArr.every(allPositive);

function hasNegative(elem){
	return elem < 0;
}

numArr.some(hasNegative);

let filteredArrPos = numArr.filter(allPositive);

function isEven(elem){
	if (elem % 2 == 0){
		return true;
	}
	
}

let filteredArrEven = numArr.filter(isEven);

function isLong(elem){
	if (elem.length > 5){
		return true;
	}
}

let filteredArrLong = strArr.filter(isLong);

function isArr(elem){
	if (Array.isArray(elem)){
		return true;
	}
}

let filteredArrArrays = complexArr.filter(isArr); 

let sqrtArr = [];

filteredArrPos.forEach(function(elem){
	sqrtArr.push(Math.sqrt(elem));
})
