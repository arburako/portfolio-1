$('div#featured').hover(
	function() {
		$('img#featured-img').css('opacity', '1');
	},
	function() {
		$('img#featured-img').css('opacity', '.9');
	}
);

$('div.img').hover(
	function() {
		$(this).children('figure').children('img').css('opacity', '1');
	},
	function() {
		$(this).children('figure').children('img').css('opacity', '.9');
	}
);