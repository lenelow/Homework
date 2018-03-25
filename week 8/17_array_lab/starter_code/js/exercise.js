function selectPet(petType){

    // Get the specific pet data set
    var thisPetData = petData[petType];

    // Set the title
    jQuery(".petDisplayName").text(thisPetData["displayName"]);


    // Empty the specification data
    jQuery(".petsDataSpecs").empty();


    // Add the space required, size, weight
    var myString = "<dt>Size</dt><dd>"+thisPetData["size"]+"</dd>";
    jQuery(".petsDataSpecs").append(myString);

    myString = "<dt>Weight</dt><dd>"+thisPetData["weight"]+"</dd>";
    jQuery(".petsDataSpecs").append(myString);

    myString = "<dt>Space Required</dt><dd>"+thisPetData["spaceRequired"]+"</dd>";
    jQuery(".petsDataSpecs").append(myString);

    // Add logic to add the trainability and lap size images
    var train = thisPetData["trainability"];
    if(train == true){
        myString = "<dt>Trainable</dt><dd><img src='img/200px-Gnome-emblem-default.svg.png'></dd>";
    jQuery(".petsDataSpecs").append(myString);
    }else{
        myString = "<dt>Trainable</dt><dd><img src='img/200px-Gnome-emblem-unreadable.svg.png'></dd>";
    jQuery(".petsDataSpecs").append(myString);    
    };

    var lap = thisPetData["fitsOnLap"];
    if(lap == true){
        myString = "<dt>Lap Dog</dt></dd><img src='img/200px-Gnome-emblem-default.svg.png'></dd>";
    jQuery(".petsDataSpecs").append(myString);    
    }else{
        myString = "<dt>Lap Dog</dt><dd><img src='img/200px-Gnome-emblem-unreadable.svg.png'></dd>";
    jQuery(".petsDataSpecs").append(myString);
    }
    // Add the foods (may require loop)
    var foods = thisPetData["foods"];
    var eats; 
    for (i=0; i < foods.length; i++){
        eats += "<li>"+foods[i]+"</li>"
    }

    myString = "<dt>Foods</dt><dd><ul>"+eats+"</ul></dd>"
    jQuery(".petsDataSpecs").append(myString);
    // Update the images

        // Set the main image


        // Empty the thumbnails

        // Add the thumbnails



        // Apply the click event to thumbnails (note - this will likely need to be applied to the a and not the img direclty)


    // Empty the ideal for

    // Insert the ideal for


    // Empty the Adoption Groups

    // Add the adoption groups


}// end selectPet



jQuery(document).ready(function(){

    // Initial run
selectPet("horse")
    //Update whenever a new value is picked

});