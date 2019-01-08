$(document).ready(function() {

	// make rel="external" links open in a new window
	$("a[rel='external']").attr('target', '_blank');

	// open specific tab if specified
	var url = document.location.toString();
	if (url.match('#')) {
		$('.nav-tabs a[href="#' + url.split('#')[1] + '"]').tab('show');
	}

	// Change hash for page-reload
	$('.nav-tabs a').on('shown.bs.tab', function(e) {
		window.location.hash = e.target.hash;
	});

	// Load Newsfeed
	var role = "";
	if (typeof $("#newsfeed").data("role") !== "undefined") {
		role = "&role=" + $("#newsfeed").data("role");
	}

	$.ajax({
		url : "index.php?module=NewsFeed" + role,
		type : "GET",
		success : function(data) {
			$("#newsfeed").html(data);
		},
		error : function(a, b) {
			console.log(a, b);
		}
	});

});
