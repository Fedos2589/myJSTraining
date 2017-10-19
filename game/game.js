var timer = document.querySelector('.timer span');
var game = document.querySelector('.game');
var cells = document.querySelectorAll('.game-cell');
var begin = document.querySelector('.begin');
var timerText = document.querySelector('.timer-text');
var ii = 1;
var curNum;

begin.addEventListener('click', function(){
	cleanTable();
	fillTable();
	timerF();

})

game.addEventListener('click', function(e){
	var tgt = e.target;
	if (curNum == tgt.innerHTML){
		tgt.classList.add('active');
		curNum++;
	}
})

var timerF = function(){
	timerText.innerHTML = 'Времени осталось: ';
	timer.innerHTML = 60;
	timerInterval = setInterval(function(){
		timer.innerHTML -= 1;
		if (timer.innerHTML == 0){
			timer.innerHTML = '';
			timerText.innerHTML = 'Вы проиграли';
			clearInterval(timerInterval);
		}else if (curNum == 26){
			timerText.innerHTML = 'Вы выиграли!!!!!';
			timer.innerHTML = '';
			clearInterval(timerInterval);
		}
	}, 1000)
}

var fillTable = function(){
	for (var i = ii; i <= cells.length; i++){
		var randNum = randomInteger(0, 24);
		var randColor;
		var randSize;
		var curCell = cells[randNum];
		if (curCell.innerHTML == ''){
			curCell.innerHTML = i;
			randColor = randomInteger(0, 16777215).toString(16);
			randSize = randomInteger(14, 36).toString();
			curCell.style.color = '#' + randColor;
			curCell.style.fontSize = randSize + 'px';
		}else{
			i--;
		}
	}
}

var cleanTable = function(){
	curNum = 1;
	for (var i = 0; i < cells.length; i++){
		cells[i].innerHTML = '';
		cells[i].classList.remove('active');
	} 
}

function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
  }

