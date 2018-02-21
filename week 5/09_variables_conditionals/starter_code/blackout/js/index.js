var lights = "on";

function switchLights(theLinkClickedOn) {
	theLinkClickedOn.preventDefault();
//if lights are on 
if(lights=="on"){
//then turn them off
	jQuery("body").addClass("dark");
	lights="off";
//otherwise
}else{ 
//turn them on
	console.log("else");
	jQuery("body").removeClass("dark");
	lights="on";

}


}

jQuery('#light_switch').click(switchLights);
