$(document).ready(function() {


	console.log("hi");

	// Attach click functions

	// Projects
	$(".label.projects").click(function(e) {
		$(".label-container").toggleClass("zoom-projects");
		$(".zoom-content.projects").toggleClass("show-zoom");
	});
	$(".zoom-content.projects").click(function(e) {
		$(".label-container").toggleClass("zoom-projects");
		$(".zoom-content.projects").toggleClass("show-zoom");
	});

	// About section
	$(".label.about").click(function(e) {
		$(".label-container").toggleClass("zoom-about");
		$(".zoom-content.about").toggleClass("show-zoom");
	});
	$(".zoom-content.about").click(function(e) {
		$(".label-container").toggleClass("zoom-about");
		$(".zoom-content.about").toggleClass("show-zoom");
	});

	// GitHub link
	$(".label.github").click(function(e) {
		$(".label-container").toggleClass("zoom-github");
		$(".zoom-content.github").toggleClass("show-zoom");

		// Open new tab after animation
		setTimeout(function() {

			window.open("https://github.com/theronpatrick");
		}, 750);
	});
	$(".zoom-content.github").click(function(e) {
		$(".label-container").toggleClass("zoom-github");
		$(".zoom-content.github").toggleClass("show-zoom");
	});

	// Contact
	$(".label.contact").click(function(e) {
		$(".label-container").toggleClass("zoom-contact");
		$(".zoom-content.contact").toggleClass("show-zoom");
	});
	$(".zoom-content.contact").click(function(e) {
		$(".label-container").toggleClass("zoom-contact");
		$(".zoom-content.contact").toggleClass("show-zoom");
	});

	// Bonk ya on the nose!
	// Don't allow multiple clicks on this because we're setting a timeout
	var clickedImage = false;
	$(".main-image").click(function(e) {
		if (!clickedImage) {

			clickedImage = true;

			$(".label-container").addClass("zoom-picture");
			$(".main-image").addClass("show-zoom");

			setTimeout(function() {
				$(".label-container").removeClass("zoom-picture");
				$(".main-image").removeClass("show-zoom");

				// Reset flag after animation back finishes
				setTimeout(function() {
					clickedImage = false;
				}, 500);

			}, 500);



		}
		
	});





});
