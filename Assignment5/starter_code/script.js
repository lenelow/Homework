//Wait for DOM elements to load before executing functions

jQuery(document).ready(function() {

//Prevent submit button from refreshing page when clicked

	jQuery("#submit-btn").click(function() {
    	event.preventDefault();

//Get value of user's input (city)

		var city = jQuery("#city-type").val();
		jQuery("#city-type").val("");


//Change background image based on input value by manipulating CSS class


//If input is New York, New York City, or NYC, make CSS class change to or remain "nyc" 

		if(city == "New York" || city == "New York City" || city == "NYC") {
      	jQuery("body").attr("class","nyc");
    	}

//If input is San Francisco, SF, or Bay Area, make CSS class change to or remain "sf"     	
    
    	else if(city == "San Francisco" || city == "SF" || city == "Bay Area") {
      	jQuery("body").attr("class","sf");
    	}

//If input is Los Angeles, LA, or LAX, make CSS class change to or remain "la"     	

     	else if(city == "Los Angeles" || city == "LA" || city == "LAX") {
      	jQuery("body").attr("class","la");
    	}

//If input is Austin or ATX, make CSS class change to or remain "austin"     	
    
    	else if(city == "Austin" || city == "ATX") {
      	jQuery("body").attr("class","austin");
    	}

//If input is Sydney or Syd, make CSS class change to or remain "sydney"     	
    
    	else if(city == "Sydney" || city == "Syd") {
      	jQuery("body").attr("class","sydney");
    	}

	});

});
