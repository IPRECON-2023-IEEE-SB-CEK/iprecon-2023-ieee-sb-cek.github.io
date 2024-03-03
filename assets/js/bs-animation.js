$(document).ready(function(){
	AOS.init({ disable: 'mobile' });
	$('[data-bs-hover-animate]')
		.mouseenter( function(){ var elem = $(this); elem.addClass('animated ' + elem.attr('data-bs-hover-animate')) })
		.mouseleave( function(){ var elem = $(this); elem.removeClass('animated ' + elem.attr('data-bs-hover-animate')) });
});

document.addEventListener('DOMContentLoaded', function () {
	document.getElementById('legacyLink').addEventListener('click', function (event) {
		event.preventDefault();

		var targetElement = document.getElementById('legacySection');
		targetElement.scrollIntoView({ behavior: 'smooth' });
	});
});