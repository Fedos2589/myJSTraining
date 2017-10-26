'use strict'
var titles = document.querySelectorAll('th');
var table = document.querySelector('.table');

console.log(titles);

for (var i in titles){
	titles[i].addEventListener('click', function(){
		console.log(titles[i]);
	})
}

/*for (var i = 0; i < titles.length; i++){
	titles[i].addEventListener('click', function(){
		console.log(titles.indexOf(this));
		sort(i);

	})
}

var sort = function(index){
	var elemsToSort = document.querySelectorAll('td:nth-child(1)');
	console.log(index);
}
*/