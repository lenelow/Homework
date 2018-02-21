
jQuery("#submit").click(function(){

//Get values

	var a=jQuery("#a").val();
	var b=jQuery("#b").val();

//If a > b show >
	
	if (a>b){
		jQuery("#comparison").text(">");
	}

//If a < b show <

	if (a<b){
		jQuery("#comparison").text("<");
	}

//If a = b show ==

	if (a==b){
		jQuery("#comparison").text("==");
	}	

	if(isNaN(a) || isNaN(b)){
		jQuery("#comparison").text("Nan");
	}




});