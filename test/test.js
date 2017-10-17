var check = document.querySelector('.check');
var rad = document.querySelectorAll('input[type=radio]');
var dance = document.querySelectorAll('*[name=dance]');
var bank = document.querySelectorAll('*[name=bank]');
var connect = document.querySelectorAll('*[name=connect]');
var questions = document.querySelectorAll('.question');
var numOfQuestions = questions.length;
var rightAnswers;
var unchosenAnswers;
var rightPerCent;
var notTrue;

var notChosen = function(){
	unchosenAnswers = numOfQuestions;
	for (var i = 0; i < rad.length; i++) {
		if (rad[i].checked) {
			unchosenAnswers -= 1;
		}
	}
}

var trueAns = function(){
	rightAnswers = 0;
	rightPerCent = 0;
	notTrue = 0;
	for (i = 0; i < rad.length; i++){
		if (rad[i].checked && rad[i].classList.contains('true')){
			rightAnswers += 1;
		}
	}
	rightPerCent = Math.round((rightAnswers / numOfQuestions) * 100) + '%';
	notTrue = numOfQuestions - rightAnswers - unchosenAnswers;
}


check.addEventListener('click', function(){
	notChosen();
	trueAns();

	var alrt = 'Правильных ответов: ' + rightAnswers + ' (' + rightPerCent + ')\n'
				+ 'Неправильных ответов: ' + notTrue + '\n'
				+ 'Без ответов: ' + unchosenAnswers + '\n';

	alert(alrt);
})

