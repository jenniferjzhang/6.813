$('.dashboard-groups').on("click", function() {
	console.log($(this).attr('id'));
	if($(this).next().is('div')) {
			$(this).next().remove();
			$(this).parent().removeClass("active item");
			$(this).parent().addClass("item");
		} else {
			$(this).after('<div class = "dashboard-times"> <table class="ui table" id="times"> <tbody> <thead> <tr> <th class="ten wide">Event</th> <th class="five wide">Time</th> </tr> </thead> <tr> <td><a href = "#">Pole Vault</a></td> <td>3:30 PM</td> </tr> <tr> <td><a href = "#">Long Jump</a></td> <td>3:45 PM</td> </tr> <tr> <td><a href = "#">High Jump</a></td> <td>4:00 PM</td> </tr> <tr> <td><a href = "#">Shot Put</a></td> <td>4:15 PM</td> </tr> <tr> <td><a href = "#">4x800m Relay</a></td> <td>4:30 PM</td> </tr> <tr> <td><a href = "#">100m</a></td> <td>5:00 PM</td> </tr> <tr> <td><a href = "#">1600m</a></td> <td>5:05 PM</td> </tr> <tr> <td><a href = "#">4x100m Relay</a></td> <td>5:20 PM</td> </tr> </tbody> </table> </div>');
			console.log("Submenu launching");
			$(this).parent().removeClass("item");
			$(this).parent().addClass("active item");

		}
	
});