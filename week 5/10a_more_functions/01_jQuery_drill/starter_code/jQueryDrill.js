jQuery(document).ready(function(){

    //When the concat button is clicked, combine the two strings and output the result
	jQuery("#concatButton").click(function(e){
   		e.preventDefault();   
   		var concatOneValue = jQuery("#concatOne").val();
   		var concatTwoValue = jQuery("#concatTwo").val();
   		jQuery("#concatRestult").text(concatOneValue + concatTwoValue);
	});   
    // When the add20Button is clicked, get the value of the input, add 20 and place in add20Output
 	jQuery("#add20Button").click(function(e){
 		e.preventDefault(); 
 		var inputValue = jQuery("#add20Input").val();
 		var outputValue = parseFloat(inputValue) + 20;
 		jQuery("#add20Output").text(outputValue);
 	});
    // When the appendButton is clicked, get the value of the input, wrap in <p> tags and append it to the appendOutput
	jQuery("#appendButton").click(function(e){
		e.preventDefault(); 
		var inputValue = jQuery("#appendInput").val();
		var outputValue = "<p>" + inputValue + "</p>";
		jQuery("#appendOutput").append(outputValue);
	});

});   