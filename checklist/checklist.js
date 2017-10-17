var textOfTask = document.querySelector('.newTask');
var task = document.querySelectorAll('.task');
var wrap = document.querySelector('.checklist-wrapper');

var addTask = function(text){
	var newTask = task[0].cloneNode(true);
	newTask.children[1].innerHTML = text;
	wrap.appendChild(newTask);
	textOfTask.value = '';
}

textOfTask.addEventListener('keypress', function(e){
	if (e.charCode == 13){
		addTask(textOfTask.value);
	}
})

wrap.addEventListener('click', function(e){
	var tgt = e.target;
	if (tgt.classList.contains('task__check') && tgt.checked){
		tgt.nextElementSibling.style.textDecoration = 'line-through';
		tgt.style.visibility = 'hidden';
	}

	if (tgt.classList.contains('task__close')){
		tgt.parentElement.remove();
	}
})

wrap.addEventListener('dblclick', function(e){
	var tgt = e.target;
	if (tgt.classList.contains('task__text')){
		tgt.style.display = 'none';
		tgt.nextElementSibling.style.display = 'block';
		tgt.nextElementSibling.focus();
		tgt.nextElementSibling.addEventListener('keypress', function(e){
			if (e.charCode == 13){
				tgt.innerHTML = this.value;
				this.value = '';
				this.style.display = 'none';
				tgt.style.display = 'block';
			}
		})
	}
})
