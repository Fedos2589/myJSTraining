function counter() {
	var i = 1;
	return function() {
		return i++;
	}
}

var func = counter();

let btns = document.querySelectorAll('.btn');
btns = Array.prototype.slice.call(btns);

for (btn of btns){
	btn.addEventListener('click', (function() {
		let countIndex = 0;
		return function(){
			countIndex++;
			this.innerHTML = countIndex;
		};
	})()) 
}

let colors = ['red', 'green', 'blue', 'purple', 'white', 'black'];
let fullAbzats = document.querySelectorAll('.colorChanger');
fullAbzats = Array.prototype.slice.call(fullAbzats);

for (colSwitch of fullAbzats){
	colSwitch.addEventListener('click', (function(){
		let i = 0;
		return function(){
			this.style.backgroundColor = colors[i];
			i++;
		}
	})())
}

let fibBtns = document.querySelectorAll('.fib-btn');
fibBtns = Array.prototype.slice.call(fibBtns);

for (fibBtn of fibBtns){
	fibBtn.addEventListener('click', (function(){
		let fib = 0;
		let i1 = 1;
		let i2 = 0;
		return function(){
			this.innerHTML = fib;
			i2 = fib;
			fib = i1;
			i1 = fib + i2;
		}		
	})())
}

let inps = document.querySelectorAll('.changes');
inps = Array.prototype.slice.call(inps);

for (inp of inps){
	let left = inp.parentElement.children[0];
	let right = inp.parentElement.children[1];

	inp.onchange = (function(){
		let history = [];
		let index = 0;

		function FLeft(){
			if (index > 0 && index < history.length){
				index--;
				val = history[index-1]
			}else{
				console.log(index, history, 'outOfHistory');
			}	
		}

		function FRight(){
			if (index >= 0 && index < history.length - 1){
				index++;
				val = history[index-1]
			}else{
				console.log(index, history, 'outOfHistory');
			}
		}

		left.onclick = FLeft();

		right.onclick = FRight();
		
		return function(){
			let val = this.value
			history[index] = val;
			index++;
			console.log(history);
		}	
	})()
}

function getRandomInt(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function dontRepeatRandomInt(){
	let usedNum = [];
	return function(){
		let newNum;
		newNum = getRandomInt(1,100);
		if (usedNum.indexOf(newNum) == -1){
			usedNum.push(newNum);
			inps[0].value = newNum;
		}else{
			inps[0].value = 'already exists';
		}
	}
}

f1 = dontRepeatRandomInt();


