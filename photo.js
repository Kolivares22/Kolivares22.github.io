
	var	b1=	document.getElementById("hike");
var b2 = document.getElementById("beach");
var b3 = document.getElementById("lake");
var image = document.getElementById("hawaii");

function changeHike(){
	image.src=	"images/IMG_2506.jpg";
	
}
function changeBeach(){
	image.src=	"images/9F7A0FA7-06B5-4854-B116-5FD3F13977B5.JPG";
}





b1.addEventListener("click" ,changeBeach);
b2.addEventListener("click" ,changeHike);


