
	var	b1=	document.getElementById("hike");
var b2 = document.getElementById("beach");
var b3 = document.getElementById("lake");
var b4 = document.getElementById("lake2");
var b5 = document.getElementById("sun");
var b6 = document.getElementById("sunny");
var b7 = document.getElementById("earth");
var b8 = document.getElementById("rose");
var image = document.getElementById("hawaii");

function changeHike(){
	image.src=	"images/IMG_2506.jpg";
	
}
function changeBeach(){
	image.src=	"images/9F7A0FA7-06B5-4854-B116-5FD3F13977B5.JPG";
}
function changeLake(){
	image.src="images/IMG_3678.jpg";
}
function changeLaguna(){
	image.src="images/IMG_3185.jpg";
}
function changeSun(){
	image.src="images/IMG_2231.jpg";
}
function changeSunny(){
	image.src="images/IMG_2213.jpg";
}
function changeEarth(){
	image.src="images/IMG_1988.jpg";
}
function changeRose(){
	image.src="images/IMG_1989.jpg";
}


b1.addEventListener("click" ,changeBeach);
b2.addEventListener("click" ,changeHike);
b3.addEventListener("click", changeLake);
b4.addEventListener("click",changeLaguna);
b5.addEventListener("click", changeSun);
b6.addEventListener("click", changeSunny);
b7.addEventListener("click", changeEarth);
b8.addEventListener("click", changeRose);








