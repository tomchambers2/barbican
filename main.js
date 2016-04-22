$(window).on('scroll', function() {
	visible = [];
	$('video').each(function() {
		if ($(this).visible(true)) {
			// console.log('played', $(this)[0])
			$(this)[0].play();
			$(this).addClass('visible');
			visible.push($(this)[0])
		} else {
			$(this)[0].pause();
			// console.log('paused', $(this)[0])
			$(this).removeClass('visible');
		}
	});
	console.log('visible',visible)

	// $('#soundtrack')[0].play();
});

$(document).on('ready', function() {
	$('#lakeside')[0].play();
})