var contentTopHtml = '<div class = "dashboard-content-top"> <table class="ui table"> <tbody> <thead> <tr> <th class="four wide">Athlete Name</th> <th class="four wide">Season Best</th> <th class="three wide">Personal Record</th> <th class="two wide">Predicted Points</th> </tr> </thead> <tr> <td><a href = "#">Zachary Johnson</a></td> <td>1:51:000</td> <td>1:51:000</td> <td>10</td> </tr> <tr> <td><a href = "#">Quackary Duckson</a></td> <td>1:54:000</td> <td>1:54:000</td> <td>8</td> </tr> <tr> <td><a href = "#">Jachary Zohnson</a></td> <td>2:01:156</td> <td>1:55:846</td> <td>6</td> </tr> <tr> <td><a href = "#">Machary Lohnson</a></td> <td>2:03:654</td> <td>1:57:315</td> <td>5</td> </tr> <tr> <td><a href = "#">Lachary Mohnson</a></td> <td>2:04:507</td> <td>1:57:985</td> <td>4</td> </tr> </tbody> </table> </div>';
var timesTableHtml = '<div class = "dashboard-times"> <table class="ui table" id="times"> <tbody> <thead> <tr> <th class="ten wide">Event</th> <th class="five wide">Time</th> </tr> </thead> <tr> <td><a href = "#">Pole Vault</a></td> <td>3:30 PM</td> </tr> <tr> <td><a href = "#">Long Jump</a></td> <td>3:45 PM</td> </tr> <tr> <td><a href = "#">High Jump</a></td> <td>4:00 PM</td> </tr> <tr> <td><a href = "#">Shot Put</a></td> <td>4:15 PM</td> </tr> <tr> <td><a href = "#">4x800m Relay</a></td> <td>4:30 PM</td> </tr> <tr> <td><a href = "#">100m</a></td> <td>5:00 PM</td> </tr> <tr> <td><a href = "#">1600m</a></td> <td>5:05 PM</td> </tr> <tr> <td><a href = "#">4x100m Relay</a></td> <td>5:20 PM</td> </tr> </tbody> </table> </div>'
/*$('.table').on("click", function() {
	console.log($(this).attr('id'));
	console.log($(this));
	if ($(this).attr('id') === "groups") {
			console.log($(this).attr('id'));
			if($(this).parent().next().is('div')) {
				$(this).parent().next().remove();
				$(this).parent().removeClass("active item");
				$(this).parent().addClass("item");
			} else {
				$(this).parent().after(timesTableHtml);
				console.log("Submenu launching");
				$(this).parent().removeClass("item");
				$(this).parent().addClass("active item");
			}
	} else if ($(this).parent().next().attr('id') === 'times') {
		console.log($(this).attr('id'));
		if($(this).next().is('div')) {
			$(this).next().remove();
			$(this).parent().removeClass("active item");
			$(this).parent().addClass("item");
		} else {
			$(this).after(contentTopHtml);
			console.log("Submenu launching");
			$(this).parent().removeClass("item");
			$(this).parent().addClass("active item");

		}
	};
});
*/
$(document).ready(function() {
    $("#content-top").addClass('hidden').hide();
    $("#times").addClass('hidden').hide();
    $("#groups").click(function() {
        $('#times').transition('slide right')
        .removeClass('hidden')
        .addClass('visible');

    });
    $("#times").click(function() {
        $('#content-top').transition('slide right')
        .removeClass('hidden')
        .addClass('visible');;
    });
});



