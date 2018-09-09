jQuery(document).ready(function() {
  jQuery("header nav ul li").click(function() {
    jQuery(this)
      .parent()
      .toggleClass("slideDown");
  });
});

// .row {
//   height: 150vh;
// }
// footer {
//   border-top: 10px solid #65808e;
// }
