$(document).ready(function() {
	$('.slider').fullpage({
		anchors: ['firstPage', 'secondPage', '3rdPage'],
		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: ['First page', 'Second page', 'Third and last page']
	});
});

// console.log("Message from Sam: 'Checking under the hood huh? Can't blame you, but maybe take a look at some of the cool work I've done instead?'");