var str1 = 'var_text_hello';

ucfirst = function(str){
	return str.charAt(0).toUpperCase() + str.substr(1);
}

changeStr = function(str){
	var strToArr = str.split(' ');
	var word = '';
	var resStr = '';
	for (i = 0; i < strToArr.length; i++){
		word = ucfirst(strToArr[i]);
		resStr += word + ' ';
	}

	return resStr.trim();
}

changeStr2 = function(str){
	var strToArr = str.split('');
	console.log(strToArr);
	for (var i = 0; i < strToArr.length; i++){
		if (strToArr[i] == '_'){
			strToArr[i+1] = strToArr[i+1].toUpperCase();
			delete strToArr[i];
		}
	}

	return strToArr.join('');
}

var danceStyles = ['popping', 'hip-hop', 'jazz-funk', 'contemporary', 'ballet', 'krump'];
var myStyle = 'hip-hop';

inArray = function(text, arr){
	for (var i = 0; i < arr.length; i++){
		if (arr[i] === text){
			return true;
		}
	}
	return false;
}

var numArr = ['2','34','27','45','102','42','56'];

printElems = function(arr){
	console.log(arr[0]);
	arr.shift();
	if (arr.length != 0){
		printElems(arr);
	}
}

var bigNum = 3452349567;
var result = 0;

simplify = function(num){
	result = 0;
	var numArr = num.toString().split('');
	for (var i = 0; i < numArr.length; i++){
		console.log('i = ' + i);
		result += parseInt(numArr[i]); 
		console.log(result);
	}

	if (result > 9){
		simplify(result);
	}
}

/*var btn = document.querySelector('.btn');
btn.addEventListener('click', function(arr){
	arr = numArr;
	var list = document.createElement('ul');
	for (var i = 0; i < arr.length; i++){
		var elem = document.createElement('li');
		elem.innerHTML = arr[i];
		list.appendChild(elem);
	}

	document.body.appendChild(list);
})

var addInp = document.querySelector('.addInp');
var input = document.querySelector('.input');

addInp.addEventListener('click', function(){
	clone = input.cloneNode(true);
	document.body.appendChild(clone);
})

input.addEventListener('blur', function(){
	var numToBreak = this.value;
	var numArr = numToBreak.split('');
	
	for (var i = 0; i < numArr.length; i++){
		var elem = document.createElement('input');
		elem.value = numArr[i];
		document.body.appendChild(elem);
	}
});

var hidePar = document.querySelector('.hidePar');

hidePar.addEventListener('click', function(){
	this.parentElement.style.display = 'none';
})*/

var x = document.querySelector('.x');
var y = document.querySelector('.y');
var mouseMove = document.querySelector('.mouseMove');

mouseMove.addEventListener('mousemove', function(e){
	x.innerHTML = e.clientX;
	y.innerHTML = e.clientY;
})

var moveSquare = document.querySelector('.moveSquare');
var redSquare = document.querySelector('.redSquare');

moveSquare.addEventListener('click', function(e){
	redSquare.style.top = e.clientY + 'px';
	redSquare.style.left = e.clientX + 'px';
	redSquare.style.transform = "translate(-50%, -50%)";

})

var keyInput = document.querySelector('.keyCode input');
var showCode = document.querySelector('.code .value');
var showKey = document.querySelector('.key .value');

keyInput.addEventListener('keypress', function(e){
	showCode.innerHTML = e.keyCode;
	showKey.innerHTML = String.fromCharCode(e.keyCode);
})

var textToP = document.querySelector('.textToP');
var newInput = document.querySelector('.textToP input');

newInput.addEventListener('keypress', function(e){
	if (e.keyCode == 13){
		var newP = document.createElement('p');
		newP.innerHTML = newInput.value;
		textToP. appendChild(newP);
		newInput.value = '';
	}
})

var task1UL = document.querySelector('.task1');
var addLi = document.querySelector('.addLi');

addLi.addEventListener('click', function(e){
	var newElem = document.createElement('li');
	newElem.innerHTML = 'пункт';
	task1UL.appendChild(newElem);
})

task1UL.addEventListener('click', function(e){
	e.target.innerHTML += '!';
})

var users = document.querySelector('.users');
var name1 = document.querySelector('.name1');
var secName = document.querySelector('.secName');
var addUser = document.querySelector('.addUser');

addUser.addEventListener('click',function(){
	console.log(name1.value);
	var tableRow = document.createElement('tr');
	var tableCell1 = document.createElement('td');
	var tableCell2 = document.createElement('td');

	tableCell1.innerHTML = name1.value;
	tableCell2.innerHTML = secName.value;
	tableRow.appendChild(tableCell1);
	tableRow.appendChild(tableCell2);

	users.appendChild(tableRow);

	name1.value = '';
	secName.value = '';
})

users.addEventListener('click', function(e){
	var cell = e.target;
	cell.innerHTML = prompt('Введите значение:');
})









