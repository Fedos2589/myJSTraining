var total = document.querySelector('.total span');
var setName = document.querySelector('.setName');
var setPrice = document.querySelector('.setPrice');
var setQuantity = document.querySelector('.setQuantity');
var addRecord = document.querySelector('.addRecord');
var table = document.querySelector('.boughtProducts');

addRecord.addEventListener('click', function(){
	createElem();
	totalCount();
})

table.addEventListener('dblclick', function(e){
	var tgt = e.target;
	if (tgt.classList.contains('rewritable')){
		tgt.innerHTML = '';
		var change = document.createElement('input');
		change.classList.add('correctCell');
		tgt.appendChild(change);

		change.addEventListener('keypress', function(e){
			if (e.keyCode == 13){
				tgt.innerHTML = this.value;
				tgt.parentElement.children[3].innerHTML =  tgt.parentElement.children[2].innerHTML * tgt.parentElement.children[1].innerHTML;
				totalCount();
			}
		})
	}
})

var createElem = function(){
	var newRow = document.createElement('tr');
	var name = setName.value;
	var price = setPrice.value;
	var quantity = setQuantity.value;

	var cellName = document.createElement('td');
	cellName.classList.add('rewritable');
	cellName.innerHTML = name;
	newRow.appendChild(cellName);

	var cellPrice = document.createElement('td');
	cellPrice.classList.add('rewritable');
	cellPrice.innerHTML = price;
	newRow.appendChild(cellPrice);

	var cellQuantity = document.createElement('td');
	cellQuantity.classList.add('rewritable');
	cellQuantity.innerHTML = quantity;
	newRow.appendChild(cellQuantity);

	var cellCost = document.createElement('td');
	cellCost.innerHTML = quantity * price;
	cellCost.classList.add('cost')
	newRow.appendChild(cellCost);

	var cellDel = document.createElement('td');
	var del = document.createElement('button');
	del.innerHTML = 'Удалить';
	cellDel.appendChild(del);
	newRow.appendChild(cellDel);

	var cellCorrect = document.createElement('td');
	var correct = document.createElement('button');
	correct.innerHTML = 'Редактировать';
	cellCorrect.appendChild(correct);
	newRow.appendChild(cellCorrect);

	table.appendChild(newRow);

	var state = false;

	del.addEventListener('click', function(){
		delElem(this);
	})

	correct.addEventListener('click', function(){
		var trs = document.querySelectorAll('tr');
		trs = Array.prototype.slice.call(trs);
		var curRow = this.parentElement.parentElement;
		var rowIndex = trs.indexOf(this.parentElement.parentElement);

		if (state){
			finishCorrection(curRow, setName.value, setPrice.value, setQuantity.value);
			totalCount();
			state = false;
		}else{
			beginCorrection(curRow);
			state = true;
		}
	})	
}

var totalCount = function(){
	var tot = 0;
	var costCells = document.querySelectorAll('.cost');

	for (let cell of costCells){
		tot += parseInt(cell.innerHTML);	
	}

	total.innerHTML = tot;
}

var delElem = function(that){
	var trs = document.querySelectorAll('tr');
	trs = Array.prototype.slice.call(trs);
	var curRow = that.parentElement.parentElement;
	var rowIndex = trs.indexOf(that.parentElement.parentElement);

	table.removeChild(table.children[rowIndex]);
}

var beginCorrection = function(curRow){
	var curName = curRow.children[0].innerHTML;
	var curPrice = curRow.children[1].innerHTML;
	var curQuan = curRow.children[2].innerHTML;

	setName.value = curName;
	setPrice.value = curPrice;
	setQuantity.value = curQuan;
}

var finishCorrection = function(curRow, name, price, quantity){
	curRow.children[0].innerHTML = name;
	curRow.children[1].innerHTML = price;
	curRow.children[2].innerHTML = quantity;
	curRow.children[3].innerHTML = quantity * price;
}





