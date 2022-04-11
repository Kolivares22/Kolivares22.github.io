var count = 0;

function minus(){
	count = count -1;
	document.getElementById("total").innerHTML= count;
	if (count ==68) {
		document.getElementById("total").innerHTML = "NICE";
		
	}
}

function plus(){
	count = count +1;
	document.getElementById("total").innerHTML= count;
	if (count ==68) {
		document.getElementById("total").innerHTML = "NICE";
		
	}
}
document.getElementById("minus").addEventListener("click", minus);

document.getElementById("plus").addEventListener("click", plus);
function divide(){
	count=count /2;
	document.getElementById("total").innerHTML=count;
}
document.getElementById("divide").addEventListener("click", divide);
function multiply(){
	count=count *10;
	document.getElementById("total").innerHTML=count;
}
document.getElementById("multiply").addEventListener("click", multiply);
function add(){
	count=count +5;
	document.getElementById("total").innerHTML=count;
}
document.getElementById("add").addEventListener("click", add);
function adding(){
	count=count +100;
	document.getElementById("total").innerHTML=count;
}
document.getElementById("adding").addEventListener("click", adding);
function subtract(){
	count=count -15;
	document.getElementById("total").innerHTML=count;
}
document.getElementById("subtract").addEventListener("click", subtract);

















