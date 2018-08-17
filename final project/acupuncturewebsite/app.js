jQuery(document).ready(function() {
  jQuery("header nav ul li").click(function() {
    jQuery(this)
      .parent()
      .toggleClass("slideDown");
  });
});
