$(document).ready(function() {

	// Go to /theron if not already there.

	var hash = window.location.hash;

	if (hash == "") {
		window.location.hash = "/theron";
	} else {
		setTileActive();
		loadContent();
	}

	// Show correct info when hash change
	$(window).on("hashchange", function() {

		loadContent();

	})

	function loadContent() {

		var hash = window.location.hash;

		// Remove hash part
		hash = hash.substring(2);

		var url = "views/" + hash + ".html";

		// Find corresponding tile to highlight
		setTileActive();

		$(".content-container").addClass("begin-transition");


		$.ajax({
			url: url
		})
		.then(function(response) {
			$(".content-container").empty();

			$(".content-container").html(response);

			setTimeout(function() {
				$(".content-container").removeClass("begin-transition");
			});
			


		})

	}

	function setTileActive() {
		var hash = window.location.hash;

		// Remove hash part
		hash = hash.substring(2);

		// Find corresponding tile to highlight
		var selector = "[href*='" + hash + "']";
		var href = $(selector);
		var parent = href.parent();

		// Remove class from others, add to selected one
		$(".nav-block").removeClass("active");

		parent.addClass("active");
	}

	// 


});
