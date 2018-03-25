// create array with values NYC, SF, LA, ATX, and SYD

var cities = ["NYC", "SF", "LA", "ATX", "SYD"];

// ensure document is ready before functions can work

jQuery(document).ready(function() {

// use array to add values to <select> menu by using a "for" loop  

for (i = 0; i < cities.length; i++) {
       jQuery("#city-type").append('<option value="' + cities[i] + '">' + cities[i] + "</option>");
    }

// update background image based on user drop-down selection 

jQuery("form").on("change", "#city-type",function() {
var city = jQuery("#city-type").val();
if (city == "NYC") {
jQuery("body").attr("class","nyc");
    }else if(city == "SF") {
      	jQuery("body").attr("class","sf");
    }else if(city == "LA") {
      	jQuery("body").attr("class","la");
    }else if(city == "ATX") {
      	jQuery("body").attr("class","austin");
    }else if(city == "SYD") {
      	jQuery("body").attr("class","sydney");
    }

    });

});