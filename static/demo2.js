
/**
 * You use closures every day 
 *
 * How many closures are below?
 */

$(document).ready(function() {
	console.log("Document loaded");
	$('a.click-me').click(function(event) {
		event.preventDefault();
		console.log("Clicked!");
		$.get('/api/herp', function(response) {
			console.log("Got AJAX URL /api/herp:", response);
		});
	});
});

