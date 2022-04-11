function strawberry() {
	document.getElementById("hello").innerHTML = "Strawberry";
	
}

document.getElementById("button").addEventListener("click", strawberry);

function Bye() {
	document.getElementById("hello").innerHTML ="Bye";
	
}
document.getElementById("there").addEventListener("click", Bye);

function Go (){
	document.getElementById("hello").innerHTML="Go";

}
document.getElementById("set").addEventListener("click", Go);

function Red (){
	document.getElementById("hello").innerHTML = "Red";

}
document.getElementById("purple").addEventListener("click", Red);

function Orange (){
	document.getElementById("hello").innerHTML = "Orange";

}
document.getElementById("orange").addEventListener("click", Orange);

function changeRed(){
	document.getElementById("hello").style.backgroundColor = "red"
	document.getElementById("hello").innerHTML = "RED"
}
document.getElementById("button").addEventListener("click", changeRed);

function changeGreen(){
	document.getElementById("hello").style.backgroundColor = "green"
}
document.getElementById("set").addEventListener("click", changeGreen);

function changeOrange(){
	document.getElementById("hello").style.backgroundColor = "orange"
}
document.getElementById("orange").addEventListener("click", changeOrange);
function changeGrey(){
	document.getElementById("hello").style.backgroundColor = "grey"
}
document.getElementById("there").addEventListener("click", changeGrey)

function changePurple(){
	document.getElementById("hello").style.backgroundColor = "purple"
}
document.getElementById("purple").addEventListener("click", changePurple);











