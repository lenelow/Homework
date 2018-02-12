alert("Moo");

document.getElementById("grayButton").onclick=grayClick;
document.getElementById("whiteButton").onclick=whiteClick;



function grayClick(){
	//background of body turn grey
	document.body.style.backgroundColor="#909090";

	/* turn text color whtie */
	document.body.style.color="white";
}

function whiteClick(){
	//background of body turn grey
	document.body.style.backgroundColor="#white";

	/* turn text color whtie */
	document.body.style.color="black";
}