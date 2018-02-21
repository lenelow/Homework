//Implement the red light using jQuery. Don't forget to add the script tags.

//Red Light
function illuminateRed(){
	//Clear all lights
	jQuery(".bulb").css("background","black");
	//Light Red
	jQuery("#stopLight").css("background","red");
}
//Yellow Light
function illuminateYellow(){
	//Clear all lights
	jQuery(".bulb").css("background","black");
	//Light Yellow
	jQuery("#slowLight").css("background","yellow");
}
	
//Green Light
function illuminateGreen(){
	//Clear all lights
	jQuery(".bulb").css("background","black");
	//Light Green
	jQuery("#goLight").css("background","green");
}

jQuery("#stopButton").click(illuminateRed);
jQuery("#slowButton").click(illuminateYellow);
jQuery("#goButton").click(illuminateGreen);