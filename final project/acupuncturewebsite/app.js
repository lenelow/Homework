jQuery(document).ready(function() {
  jQuery("header nav ul li:first-child").click(function(){
    jQuery(this).parent().toggleClass("slideDown");
  });
  jQuery("header nav ul li a").hover(function(){
    jQuery(this).css("color", "white");
    }, function(){
    jQuery(this).css("color", "black");
  });
});