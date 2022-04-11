
function checkPass(){
	

if (document.getElementById("password").value == "kjo"){
	document.getElementById("access").innerHTML = "ACCESS GRANTED";
	document.getElementById("access").style.color = "green";
	window.location = "index.html";
}
	else{
		document.getElementById("access").innerHTML = "ACCESS DENIED";
		document.getElementById("access").style.color = "red";
	}
}

document.getElementById("submit").addEventListener("click", checkPass);

