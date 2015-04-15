$('.group-title').on("click", function() {
	console.log($(this).attr('id'));
	if ($(this).attr('id') === "male-sprinters") {
		if($(this).next().is('div')) {
			$(this).next().remove();
			$(this).parent().removeClass("active item");
			$(this).parent().addClass("item");
		} else {
			$(this).after('<div class = "menu"><a class = "item" href = "#">Bruno Faviero<div class = "img-container"><img class = "athlete-pic" src = "img/bruno.jpg"></div></a><a class = "item" href = "#">Henry Tareque<div class = "img-container"><img class = "athlete-pic" src = "img/henry.jpg"></div></a><a class = "item" href = "#">Carlos Henriquez<div class = "img-container"><img class = "athlete-pic" src = "img/carlos.jpg"></div></a></div>');
			console.log("Submenu launching");
			$(this).parent().removeClass("item");
			$(this).parent().addClass("active item");

		}
	} else if ($(this).attr('id') === 'female-sprinters') {
		if($(this).next().is('div')) {
			$(this).next().remove();
			$(this).parent().removeClass("active item");
			$(this).parent().addClass("item");
		} else {
			$(this).after('<div class = "menu"><a class = "item" href = "#">Jennifer Zhang<div class = "img-container"><img class = "athlete-pic" src = "img/jenny.jpg"></div></a><a class = "item" href = "#">Erin Reynolds<div class = "img-container"><img class = "athlete-pic" src = "img/erin.jpg"></div></a></div>');
			console.log("Submenu launching");
			$(this).parent().removeClass("item");
			$(this).parent().addClass("active item");

		}
	};
});