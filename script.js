$(document).ready(function() {

	var heroSpeech = 'Мы не жалкие букашки супер ниндзя черепашки!';

	$('.js-showHide').click(function(){
		$('.hero').toggleClass('-invisible');
	});

	$('.js-hello').click(function(){
		$('.bubble').text(heroSpeech);
	});


});


