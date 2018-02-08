$(document).ready(function() {



		let superhero = {
			name:' Kiruha',
			age:32,
			job:'artist',

			params:{
				height:130,
				weight:45,
				gender:'Male',
				race:'european'
			},

			powers:{
				mainPower:'brush punch',
				secondaryPower:'sleep 8 hours'
			}
		};


			$('.js-object').click(function(){
				showBubbleWithBlock('<div class="bubble-test">Меня зовут- '+ superhero.name + '! </div>' );
			});






			let movies = ['apple', 'orange', 'banana','door'];


			$('.js-array').click(function(){
				movies.push(getSecondWord());
				showBubble(movies);
			})


			for (let i=0; i<movies.length; i++){
				$('.test-array').append('<div class="test-item">' + movies[i] +'</div>')
			};














	$('.js-plus').click(function() {
		showBubble(Number(getFirstWord()) + Number(getSecondWord()));
	});

	$('.js-minus').click(function() {
		showBubble(Number(getFirstWord()) - Number(getSecondWord()));
	});

	$('.js-multiply').click(function() {
		showBubble(Number(getFirstWord()) * Number(getSecondWord()));
	});

	$('.js-divide').click(function() {
		if (checkInputData().isNumber) {
			if (getSecondWord()==="0") {
				showBubble('так вымерли динозавры')
			}
			showBubble(Number(getFirstWord()) / Number(getSecondWord()));
		} else {
			if (checkInputData().isEmpty) {
				showBubble('Пустоши какие-то!');
			} else {
				showBubble(getFirstWord() + ' ' + getSecondWord());
			}
		}
	});

	// ===============================
	// ===============================

	function checkInputData() {
		if ($.isNumeric(getFirstWord()) && $.isNumeric(getSecondWord())) {
			return {
				isNumber: true
			};

		} else if (getFirstWord() === '' && getSecondWord() === '') {
			return {
				isNumber: false,
				isEmpty: true
			};

		} else {
			return {
				isNumber: false,
				isEmpty: false
			};
		}
	}

	function getFirstWord() {
		return $('.js-text1').val();
	}

	function getSecondWord() {
		return $('.js-text2').val();
	}

	function showBubble(text) {
		$('.bubble').text(text);
		$('.bubble').addClass('-visible');


		setTimeout(function() {
			$('.bubble').removeClass('-visible');
		}, 2000);

	}

	function showBubbleWithBlock(block) {
		$('.bubble').append(block);
		$('.bubble').addClass('-visible');


		setTimeout(function() {
			$('.bubble').removeClass('-visible');
		}, 2000);

	}
});