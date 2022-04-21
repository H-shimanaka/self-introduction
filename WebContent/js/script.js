'use strict';

$('#page-link a[href*="#"]').click(function(){
	let elmHash = $(this).attr('href');
	let pos = $(elmHash).offset().top-150;
	$(body,html).animate({scrollTop:pos},2000);
});
