

var q1 = document.getElementById("q1");
var q2 = document.getElementById("q2");
var q3 = document.getElementById("q3");
var q4 = document.getElementById("q4");
var q5 = document.getElementById("q5");
var q6 = document.getElementById("q6");
var q7 = document.getElementById("q7");
var q8 = document.getElementById("q8");
var q9 = document.getElementById("q9");
var q10 = document.getElementById("q10");
var submit = document.getElementById("submit");
var score = document.getElementById("score");
var result = 0;


function calculate(){
	if(q1.value == "Green"){
		result = result + 1
	}
	if(q2.value == "Pacific Rim"){
		result = result + 1
	}
	if(q3.value == "Europe"){
		result = result + 1
	}
	if(q4.value == "All of the above"){
		result = result + 1
	}
	if(q5.value == "Hawaii"){
		result = result + 1
	}
	if(q6.value == "Trees"){
		result = result + 1
	}
	if(q7.value == "New York"){
		result = result + 1
	}
	if(q8.value == "Little"){
		result = result + 1
	}
	if(q9.value == "Japan"){
		result = result + 1
	}
	if(q10.value == "Train to Busan"){
		result = result + 1
	}
		
	document.getElementById("submit").addEventListener("click" , submit);
	document.getElementById("score").addEventListener("click", score);
	document.getElementById("submit").addEventListener("click", calculate);
	
}


























