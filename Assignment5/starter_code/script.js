//Wait for DOM elements to load before executing functions

jQuery(document).ready(function() {

//Prevent submit button from refreshing page

	jQuery("#submit-btn").click(function() {
    	event.preventDefault();

//Get string value of user's input (city)

		var city = jQuery("#city-type").val();
		jQuery("#city-type").val("");

//Change background image based on input value

		if(city == "New York" || city == "New York City" || city == "NYC") {
      	jQuery("body").attr("class","nyc");
    	}
    
    	else if(city == "San Francisco" || city == "SF" || city == "Bay Area") {
      	jQuery("body").attr("class","sf");
    	}

     	else if(city == "Los Angeles" || city == "LA" || city == "LAX") {
      	jQuery("body").attr("class","la");
    	}
    
    	else if(city == "Austin" || city == "ATX") {
      	jQuery("body").attr("class","austin");
    	}
    
    	else if(city == "Sydney" || city == "Syd") {
      	jQuery("body").attr("class","sydney");
    	}

	});

});
