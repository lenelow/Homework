// Have a list of images
var animalImageList = ["animal1.jpg","animal2.jpg",
	"animal3.jpg","animal4.jpg","animal5.jpg",
	"animal6.jpg","animal7.jpg"];

// Know what image we are on
var imageNumber = 1;

// Function to set image
function setImage(imageNumberSelected){

	// Get the image in imageNumberSelected position of the array

	var newSrc = "images/" + animalImageList
	[imageNumberSelected];

	// Get the src of the image in the html to the image name	
	jQuery("#image-to-vote-on").attr("src",newSrc);

}

// Function for next image
function nextImage(){
	console.log("hi")
	imageNumber = imageNumber + 1;

	if(imageNumber >= animalImageList.length){
		imageNumber = 0;

	}	

	setImage(imageNumber);

}

// Function for previous image 
function previousImage(){
	imageNumber = imageNumber + 1;

	if(imageNumber < 0){
		imageNumber = animalImageList.length;
	}	

	setImage(imageNumber);

}




// Bind previous and next button to functions 
jQuery(document).on("ready",function(){
	console.log("hey")
	jQuery("#btnNext").on("click",nextImage);
	jQuery("#btnPrevious").on("click",previousImage);
});