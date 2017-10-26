var controls = document.querySelectorAll('.tabs-controls__item');
var tabs = document.querySelectorAll('.tabs__item');

for (var i = 0; i < controls.length; i++){
	controls[i].addEventListener('click', function(){
		for (var j = 0; j < controls.length; j++){
			controls[j].classList.remove('active');
			tabs[j].classList.remove('active');
		}
		this.classList.add('active');
		for (var k = 0; k < controls.length; k++){
			if (controls[k].classList.contains('active')){
				tabs[k].classList.add('active');
			}
		}
	})
}
