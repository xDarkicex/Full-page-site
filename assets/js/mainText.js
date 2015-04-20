var messageArray = ["Photoshop", "Lightroom", "photojournalism", "street Photography", "Product Photography", "Nikon", "Mountain Biking", "fishing", "dirt bikes", "Lifted trucks", "Mopar", "guitars", "music", "HTML", "JADE", "CSS", "SASS", "JAVASCRIPT", "WEB DESIGNER", "Android", "Rooting", "Jailbreaking", "ios", "Systems Administrator", "Overclocking enthusiast", "Nivida", "evga", "intel", "liquid cooling", "dual xeon cores"];
var messageIndex = 0;

function changeMessage(){
	var newText = messageArray[messageIndex];
	var mainText = document.getElementById("mainText");
	mainText.innerHTML = newText;
	messageIndex++;
	if (messageIndex > messageArray.length-1){
	messageIndex = 0;
	} 
}

var backgroundArray = ["assets/images/video.jpg", "assets/images/stars2.jpg", "assets/images/junkyard.jpg"];
var bgIndex = 0;

function changeBackground(){
	var newBg = backgroundArray[bgIndex];
	var mainBg = document.getElementById('html');
	mainBg.style.backgroundImage = 'url('+newBg+')';
	bgIndex++;
	if (bgIndex > backgroundArray.length-1){
	bgIndex = 0;
	} 
}

	changeMessage();
	setInterval(changeMessage, 3000);

	changeBackground();
	setInterval(changeBackground, 9000);
