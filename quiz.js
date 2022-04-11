function checkq1(){
	
	if(document.getElementById("q1").value == "Green"){
		document.getElementById("q1result").innerHTML="CORRECT";
	}
	
	else{
		document.getElementById("q1result").innerHTML = "WRONG";
		
	}
	
}
document.getElementById("s1").addEventListener("click", checkq1);