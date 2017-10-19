var close = document.querySelector('.close');
var popup = document.querySelector('.popup');

close.addEventListener('click', function(){
	popup.style.display = 'none';
})

window.addEventListener('scroll', function(){
	if (pageYOffset > 500){
		popup.style.display = 'block';
	}
})

