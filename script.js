$(document).ready(function() {

	$('.js-sayThat').click(function(){
		showbubble($('.js-text1').val() + $('.js-text2').val())
	});

	function showbubble(text) {
		$('.bubble').text(text);
		$('.bubble').addClass('-visible');


		setTimeout(function() {
 			$('.bubble').removeClass('-visible');
		}, 2000);
	}


});


