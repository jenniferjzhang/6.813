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

	// $('#jennifer').on("click", function() {
	// 	console.log("Hello");
	// 	$('#jennifer-modal').show();
	// });
