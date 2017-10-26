var items = document.querySelectorAll('.acco-item');

for (let item of items){
	item.addEventListener('click', function(e){
		var tgt = e.target;
		
		if (this.classList.contains('active')){
			this.classList.remove('active');
		}else{
			for (let i of items){
				i.classList.remove('active');
			}
			this.classList.add('active');
		}
	})
}