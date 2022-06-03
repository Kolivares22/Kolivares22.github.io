
function check(){
	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var question6 = document.quiz.question6.value;
	var correct = 0;

if (question1 =="Spain") {
	correct++;
}
if (question2 =="Hotel Casa Santo Domingo") {
	correct++;
}
if (question3 =="Old") {
	correct++;
}
if (question4 =="El Sombreron") {
	correct++;
}
if (question5 =="Coffee") {
	correct++;
}
if (question6 =="Ayarza") {
	correct++;
}

var messages = ["Great Job!", "That's okay", "Do Better"];
	var range;
		if(correct < 2 ){
			range = 2;
		}
		if(correct <3){
			range = 1;
		}
		if(correct <4){
			range = 1;
		}
		if(correct > 4 ){
			range = 0;
		}
document.getElementById("after_submit").style.visibility = "visible";

document.getElementById("message").innerHTML = messages [range];
document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
}
