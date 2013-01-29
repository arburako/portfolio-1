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

//changes color of nav header text based on current page
var url = document.location.href;
if(url.indexOf('about') != -1) {
	$('a#about').css('color', '#6e786c');
}
else if(url.indexOf('contact') != -1) {
	$('a#contact').css('color', '#6e786c');
}
else if(url.indexOf('resume') != -1) {
	$('a#resume').css('color', '#6e786c');
}
else {
	$('a#portfolio').css('color', '#6e786c');
}