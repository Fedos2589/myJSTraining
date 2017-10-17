var table = document.querySelector('.cross-n-zeros__table');
var cells = document.querySelectorAll('.cross-n-zeros__table td');
var turn = document.querySelector('.turn');
var btn = document.querySelector('.btn');
var turnSpan = document.querySelector('.turn span');
var x = 'x';
var o = 'o';
var xWins = document.querySelector('.x span');
var oWins = document.querySelector('.o span');
var draw = document.querySelector('.draw span');
var rows = document.querySelectorAll('.cross-n-zeros__table tr');
var res = '';

table.addEventListener('click', process);

btn.addEventListener('click', function(){
	for (var i = 0; i < cells.length; i++){
		cells[i].innerHTML = '';
	}

	turnSpan.innerHTML = 'x';
	table.addEventListener('click', process);
})

function process(event){
	var cell = event.target;

	if (turnSpan.innerHTML == 'x'){
		cell.innerHTML = 'x';
		turnSpan.innerHTML = 'o';
	}else{
		cell.innerHTML = 'o';
		turnSpan.innerHTML = 'x';
	}

	for (var i = 0; i < cells.length; i++){
		if (cells[0].innerHTML == cells[1].innerHTML == cells[2].innerHTML != '' || cells[3].innerHTML == cells[4].innerHTML == cells[5].innerHTML !='' || cells[6].innerHTML == cells[7].innerHTML == cells[8].innerHTML !='' || cells[0].innerHTML == cells[3].innerHTML == cells[6].innerHTML !='' || cells[1].innerHTML == cells[4].innerHTML == cells[7].innerHTML !='' || cells[2].innerHTML == cells[5].innerHTML == cells[8].innerHTML !='' || cells[0].innerHTML == cells[4].innerHTML == cells[8].innerHTML !='' || cells[2].innerHTML == cells[4].innerHTML == cells[6].innerHTML !='')/*не понимаю как правильно прописать условие окончания партии, это выглядит как бред и при этом не работает*/{
			res = cells[i].innerHTML;
		}
	}

	if (res == 'x'){
		table.removeEventListener('click', process);
		xWins.innerHTML = parseInt(xWins.innerHTML, 10) + 1;
	}else if (res == 'o'){
		table.removeEventListener('click', process);
		oWins.innerHTML = parseInt(oWins.innerHTML, 10) + 1;
	}
}



