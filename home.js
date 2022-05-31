function Arco(){
	window.open("https://en.wikipedia.org/wiki/Arco_de_Santa_Catalina")
}
document.getElementById("arco").addEventListener ("click", Arco)

var count= 0;
function One(){
	count = count + 7.68;
	document.getElementById("total").innerHTML=count;
}
document.getElementById("One").addEventListener("click", One);

function Ten(){
	count = count + 76.79;
	document.getElementById("total").innerHTML=count;
}
document.getElementById("Ten").addEventListener("click", Ten);






