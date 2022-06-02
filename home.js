function Arco(){
	window.open("https://en.wikipedia.org/wiki/Arco_de_Santa_Catalina")
}
document.getElementById("arco").addEventListener ("click", Arco)

function checkSpain(){
	

if (document.getElementById("password").value == "Spain"){
	document.getElementById("access").innerHTML = "CORRECT";
	document.getElementById("access").style.color = "green";
}
	else{
		document.getElementById("access").innerHTML = "The password " +
		document.getElementById("password").value + " was the wrong.";
		document.getElementById("access").style.color = "red";
	}
}

document.getElementById("submit").addEventListener("click", checkSpain);

function checkHotel(){

if (document.getElementById("passwor").value == "Hotel Casa San Domingo"){
	document.getElementById("acces").innerHTML = "CORRECT";
	document.getElementById("acces").style.color = "green";
}
	else{
		document.getElementById("acces").innerHTML = "The password " +
		document.getElementById("passwor").value + " was the wrong.";
		document.getElementById("acces").style.color = "red";
	}
}
document.getElementById("submi").addEventListener("click", checkHotel);


function checkAntigua(){

if (document.getElementById("passwo").value == "Old"){
	document.getElementById("acce").innerHTML = "CORRECT";
	document.getElementById("acce").style.color = "green";
}
	else{
		document.getElementById("acce").innerHTML = "The password " +
		document.getElementById("passwo").value + " was the wrong.";
		document.getElementById("acce").style.color = "red";
	}
}
document.getElementById("subm").addEventListener("click", checkAntigua);


function checkFolk(){

if (document.getElementById("passw").value == "El Sombreron"){
	document.getElementById("acc").innerHTML = "CORRECT";
	document.getElementById("acc").style.color = "green";
}
	else{
		document.getElementById("acc").innerHTML = "The password " +
		document.getElementById("passw").value + " was the wrong.";
		document.getElementById("acc").style.color = "red";
	}
}

document.getElementById("sub").addEventListener("click", checkFolk);

function checkRegion(){

if (document.getElementById("pass").value == "Coffee"){
	document.getElementById("ac").innerHTML = "CORRECT";
	document.getElementById("ac").style.color = "green";
}
	else{
		document.getElementById("ac").innerHTML = "The password " +
		document.getElementById("pass").value + " was the wrong.";
		document.getElementById("ac").style.color = "red";
	}
}

document.getElementById("su").addEventListener("click", checkRegion);

function checkFamily(){

if (document.getElementById("pas").value == "Guatemala"){
	document.getElementById("a").innerHTML = "CORRECT";
	document.getElementById("a").style.color = "green";
}
	else{
		document.getElementById("a").innerHTML = "The password " +
		document.getElementById("pas").value + " was the wrong.";
		document.getElementById("a").style.color = "red";
	}
}

document.getElementById("s").addEventListener("click", checkFamily);

