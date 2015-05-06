	window.onload = function(){
		$('.hidden').hide();
	}

	$('.group-title').on("click", function() {
		if ($(this).attr('id') === "men-sprints") {

			if($(this).next().hasClass('hidden')) {
				$(this).prev().remove();
				$( "<i class='fa fa-caret-down'></i>" ).insertBefore($(this));
				$(this).css({ 'border-bottom': "1px solid white" });


				$(this).next().removeClass('hidden');
				$(this).next().show();
				console.log("Submenu launching");
				$(this).parent().removeClass("item");
				$(this).parent().addClass("active item");
			} else {
				$(this).prev().remove();
				$( "<i class='fa fa-caret-right'></i>" ).insertBefore($(this));
				$(this).css({ 'border-bottom': "none" });

				$(this).next().hide();
				$(this).next().addClass('hidden');
				$(this).parent().removeClass("active item");
				$(this).parent().addClass("item");

			}
		} else if ($(this).attr('id') === 'women-sprints') {

			if($(this).next().hasClass('hidden')) {
				$(this).prev().remove();
				$( "<i class='fa fa-caret-down'></i>" ).insertBefore($(this));
				$(this).css({ 'border-bottom': "1px solid white" });


				$(this).next().removeClass('hidden');
				$(this).next().show();
				console.log("Submenu launching");
				$(this).parent().removeClass("item");
				$(this).parent().addClass("active item");
			} else {
				$(this).prev().remove();
				$( "<i class='fa fa-caret-right'></i>" ).insertBefore($(this));
				$(this).css({ 'border-bottom': "none" });

				$(this).next().hide();
				$(this).next().addClass('hidden');
				$(this).parent().removeClass("active item");
				$(this).parent().addClass("item");

			}
		} else if ($(this).attr('id') === 'men-400m') {

			if($(this).next().hasClass('hidden')) {
				$(this).prev().remove();
				$( "<i class='fa fa-caret-down'></i>" ).insertBefore($(this));
				$(this).css({ 'border-bottom': "1px solid white" });


				$(this).next().removeClass('hidden');
				$(this).next().show();
				console.log("Submenu launching");
				$(this).parent().removeClass("item");
				$(this).parent().addClass("active item");
			} else {
				$(this).prev().remove();
				$( "<i class='fa fa-caret-right'></i>" ).insertBefore($(this));
				$(this).css({ 'border-bottom': "none" });

				$(this).next().hide();
				$(this).next().addClass('hidden');
				$(this).parent().removeClass("active item");
				$(this).parent().addClass("item");

			}
		} else if ($(this).attr('id') === 'women-400m') {

			if($(this).next().hasClass('hidden')) {
				$(this).prev().remove();
				$( "<i class='fa fa-caret-down'></i>" ).insertBefore($(this));
				$(this).css({ 'border-bottom': "1px solid white" });


				$(this).next().removeClass('hidden');
				$(this).next().show();
				console.log("Submenu launching");
				$(this).parent().removeClass("item");
				$(this).parent().addClass("active item");
			} else {
				$(this).prev().remove();
				$( "<i class='fa fa-caret-right'></i>" ).insertBefore($(this));
				$(this).css({ 'border-bottom': "none" });

				$(this).next().hide();
				$(this).next().addClass('hidden');
				$(this).parent().removeClass("active item");
				$(this).parent().addClass("item");

			}
		} else if ($(this).attr('id') === 'men-800m') {

			if($(this).next().hasClass('hidden')) {
				$(this).prev().remove();
				$( "<i class='fa fa-caret-down'></i>" ).insertBefore($(this));
				$(this).css({ 'border-bottom': "1px solid white" });


				$(this).next().removeClass('hidden');
				$(this).next().show();
				console.log("Submenu launching");
				$(this).parent().removeClass("item");
				$(this).parent().addClass("active item");
			} else {
				$(this).prev().remove();
				$( "<i class='fa fa-caret-right'></i>" ).insertBefore($(this));
				$(this).css({ 'border-bottom': "none" });
				
				$(this).next().hide();
				$(this).next().addClass('hidden');
				$(this).parent().removeClass("active item");
				$(this).parent().addClass("item");

			}
		} else if ($(this).attr('id') === 'women-800m') {

			if($(this).next().hasClass('hidden')) {
				$(this).prev().remove();
				$( "<i class='fa fa-caret-down'></i>" ).insertBefore($(this));
				$(this).css({ 'border-bottom': "1px solid white" });


				$(this).next().removeClass('hidden');
				$(this).next().show();
				console.log("Submenu launching");
				$(this).parent().removeClass("item");
				$(this).parent().addClass("active item");
			} else {
				$(this).prev().remove();
				$( "<i class='fa fa-caret-right'></i>" ).insertBefore($(this));
				$(this).css({ 'border-bottom': "none" });


				$(this).next().hide();
				$(this).next().addClass('hidden');
				$(this).parent().removeClass("active item");
				$(this).parent().addClass("item");

			}
		};
	});

	$('#meets-graph').on("click", function() {
		drawMeetGraph();
		$('#chart-title').html("Meet Times");

		$('#meets-graph').removeClass("item");
		$('#meets-graph').addClass("active item");

		$('#workouts-graph').removeClass("active item");
		$('#workouts-graph').addClass("item");
	});

	$('#workouts-graph').on("click", function() {
		drawWorkoutGraph();
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
