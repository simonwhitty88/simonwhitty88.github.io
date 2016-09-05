$(document).ready(function () {
   setImages();
   fixBlankTargets();
});

function setImages(){
    var $imgDivs = $('div.panelImg');
	$imgDivs.each(function() {
	    $(this).css('background-image', 'url("' + $(this).attr('img') + '")');
		$(this).attr('img','');
	});
}

function fixBlankTargets() {
    var $links = $('a');
	$links.each(function () {
	    var $link = $(this);
		if($link.attr('target') === '_blank') {
		    $link.attr('rel', 'nofollow me noopener noreferrer');
		}
	});
}