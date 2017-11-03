let arr = [23,45,34,12,2,3,7,6,34,78];
let arrNew = [1,608];

let [elem1, elem2, elem3, ...arr1] = arr;

let [,,,,,,,,elem5,elem4] = arr;

let [, el] = arr;

let [, el2 = "bbb", el3 = "eee"] = arrNew;

let person =  {
	name: 'Петр',
	'surname': 'Петров',
	'age': '20 лет'
}

let {name = "Аноним", surname = "Анонимович", age = "? лет"} = person;

for (i of arr){
	console.log(i)
}

let sum = 0;

for (j of arr){
	sum += j;
}

let str = 'алыопрфыларцдлаоулдавоуалоулаофлдаповалдопватлпопрвлаопрвлыо'
let countO = 0;

for (k of str){
	if (k == 'о'){
		countO++;
	}
}

let hello = (name = `Fedos`) => console.log(`hello ${name}`)

let obj = {
	id: 'elem',
	color: 'gray',
	border: '1px solid red',
	font: '20px Arial'
}

let applyParams = (obj) => {
	let {id, color = 'blue', border = '1px solid red', font = '15px Tahoma'} = obj;
	let elemushka = document.querySelector(`#${id}`);
	elemushka.style.color = color;
	elemushka.style.border = border;
	elemushka.style.font = font;
}

let pWithNum = document.querySelectorAll('.innerNum');
pWithNum = Array.prototype.slice.call(pWithNum);

pWithNum.forEach(item => item.addEventListener('click', 
	() => setInterval(
		() => item.innerHTML = parseInt(item.innerHTML) + 1, 1000)
	)
)





