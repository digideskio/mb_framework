$(document).ready(function(){
	$("ul.sf-menu").supersubs({
		minWidth:			12,
		maxWidth:			27,
		extraWidth:			1
		}).superfish({
			delay:			400,
			animation:		{opacity:'show'},
			speed:			'fast',
			autoArrows:		false,
			dropShadows:	false
		});
});