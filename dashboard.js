	window.onload = function(){
		$('.hidden').hide();
	}

	$('.group-title').on("click", function() {
		console.log($(this).attr('id'));
		if ($(this).attr('id') === "male-sprinters") {

			if($(this).next().hasClass('hidden')) {
				$(this).next().removeClass('hidden');
				$(this).next().show();
				console.log("Submenu launching");
				$(this).parent().removeClass("item");
				$(this).parent().addClass("active item");
			} else {
				$(this).next().hide();
				$(this).next().addClass('hidden');
				$(this).parent().removeClass("active item");
				$(this).parent().addClass("item");

			}
		} else if ($(this).attr('id') === 'female-sprinters') {
			if($(this).next().hasClass('hidden')) {
				$(this).next().removeClass('hidden');
				$(this).next().show();
				console.log("Submenu launching");
				$(this).parent().removeClass("item");
				$(this).parent().addClass("active item");
			} else {
				$(this).next().hide();
				$(this).next().addClass('hidden');
				$(this).parent().removeClass("active item");
				$(this).parent().addClass("item");

			}
		};
	});

	$('#meets-graph').on("click", function() {
		$('#chart-title').html("Meet Times");
		$('#meets-graph').removeClass("item");
		$('#meets-graph').addClass("active item");

		$('#workouts-graph').removeClass("active item");
		$('#workouts-graph').addClass("item");
	});

	$('#workouts-graph').on("click", function() {
		$('#chart-title').html("% of Workout Windows Hit");
		$('#workouts-graph').removeClass("item");
		$('#workouts-graph').addClass("active item");

		$('#meets-graph').removeClass("active item");
		$('#meets-graph').addClass("item");
	});

	// $('#jennifer').on("click", function() {
	// 	console.log("Hello");
	// 	$('#jennifer-modal').show();
	// });
