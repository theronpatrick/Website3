$(document).ready(function() {

	// TODO: Set on onload stuff to go to /theron if not already there.


	console.log("hi");

	// Show correct info when hash change
	$(window).on("hashchange", function() {

		var hash = window.location.hash;

		// Remove hash part
		hash = hash.substring(2);

		var url = "views/" + hash + ".html";

		$.ajax({
			url: url
		})
		.then(function(response) {
			$(".content-container").empty();
			$(".content-container").html(response);
		})

	})


});
