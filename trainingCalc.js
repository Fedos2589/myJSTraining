var c = document.querySelector('.c');
var input = document.getElementById('window');
var btn = document.querySelectorAll('.btn');

c.addEventListener('click', function(){
	input.value = '';
});

for (var i = 0; i < btn.length; i++){
	btn[i].addEventListener('click', function(){
		if (!this.classList.contains('btn-e')){
			input.value += this.innerHTML;
		}else{
			input.value = eval(input.value);
		}
	})
}

