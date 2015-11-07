

/**********************************
					Present Year
/**********************************/

var today = new Date();
var year = today.getFullYear();

var info = document.getElementById('footer-content');
info.innerHTML = 'Copyright &copy' + year + ' Jason Browne';

/**********************************
					Slow Scroll
/**********************************/

$('.arrow-link').click(function(event) {
	event.preventDefault();
	$('html, body').animate({
		scrollTop: $('#about-me').offset().top},
		'slow');
});