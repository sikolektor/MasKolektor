//<![CDATA[
//appends an "active" class to .popup and .popup-content when the "Open" button is clicked
$(".enlighter-btn.enlighter-btn-copy").on("click", function() {
  $(".popup-container, .popup-overlay, .popup-content").addClass("active");
});

//removes the "active" class to .popup and .popup-content when the "Close" button is clicked 
$("button .close, .popup-container").on("click", function() {
  $(".popup-container, .popup-overlay, .popup-content").removeClass("active");
});
//]]>
