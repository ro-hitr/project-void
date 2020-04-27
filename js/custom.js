//Auto-add padding to header
$(document).ready(function(){
	'use strict';
	setInterval(function(){
		'use strict';
		var windowHeight = $(window).height();
		var containerHeight = $(".page-1").height();
		var padTop = windowHeight-containerHeight;
		$(".page-1").css({
			'padding-top': Math.round(padTop/2)+'px',
			'padding-bottom': Math.round(padTop/2)+'px',
		});
	});
});