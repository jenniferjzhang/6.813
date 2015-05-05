$(document).ready(function() {

    // populate meet template with meets
    var meetsSource = $("#meets-template").html();
    var meetsTemplate = Handlebars.compile(meetsSource);
    $(".dashboard-meets").html(meetsTemplate(meets));

    // populate schedule template with events
    var scheduleSource = $("#schedule-template").html();
    var scheduleTemplate = Handlebars.compile(scheduleSource);
    $(".dashboard-schedule").html(scheduleTemplate(schedule));

    $(".dashboard-content-top").addClass('hidden').hide();
    $(".dashboard-content-bottom").addClass('hidden').hide();
    $(".dashboard-schedule").addClass('hidden').hide();
    $("#chosen-meet").addClass('hidden').hide();
    $(".chevron").addClass('hidden').hide();
    $("#event").addClass('hidden').hide();

    $("#meets a").click(function() {
      
        if ($('.dashboard-schedule').hasClass('hidden')) {
        	//If schedule is hidden, show on click
	       $('.dashboard-schedule')
		        .transition('slide right')
		        .removeClass('hidden')
	    	    .addClass('visible')
	        	.css('border', '1px solid #E8E8E8');

          $("#divider1").show();
          $("#chosen-meet")
            .html($(this).text())
            .show()
            .addClass("active");
          $("#meet-title").removeClass('active');

        } else if  ($('.dashboard-schedule').hasClass('visible')) {
          //times are visible
	        if ($(".dashboard-content-top").hasClass('visible')) {
	        	
	        	$('.dashboard-content-top')
	        		.transition('slide right')
        			.addClass('hidden')
       	 			.removeClass('visible');

       	 		$('.dashboard-content-bottom')
	        		.transition('slide right')
        			.addClass('hidden')
       	 			.removeClass('visible');


       	 		$('.dashboard-schedule')
	      			.transition('slide right')
       	 			.addClass('hidden')
	      			.removeClass('visible')
	      			.css('border', 'none');

            $("#divider2").hide();
            $("#divider1").hide();
            $("#event")
              .hide()
              .removeClass("active");
            $("#chosen-meet").hide().removeClass("active");
            $("#meet-title").addClass('active');

          } else {

	        	$('.dashboard-schedule')
	            	.transition('slide right')
	        		  .addClass('hidden')
	      	    	.removeClass('visible')
	     	    	  .css('border', 'none');

            $("#divider1").hide();
            $("#divider2").hide();
            $("#chosen-meet")
              .hide()
              .removeClass("active");
            $("#meet-title").addClass('active');
	        }
        }
 


    });

    $(".dashboard-schedule a").click(function() {
      if ($(".dashboard-content-top").hasClass('hidden')) { 
        $('.dashboard-content-top').transition('slide right')
        .removeClass('hidden')
        .addClass('visible');
        $('.dashboard-content-bottom').transition('slide right')
        .removeClass('hidden')
        .addClass('visible');

        $("#divider2").show();
        $("#event")
            .html($(this).text())
            .show()
            .addClass("active");
        $("#chosen-meet").removeClass('active');

        var margin = {top: 20, right: 0, bottom: 30, left: 30},
            width = $('.predicted-results-graph').width() - margin.left - margin.right,
            height = 300 - margin.top - margin.bottom;

        var x = d3.scale.ordinal()
            .rangeRoundBands([0, width], .1);

        var y = d3.scale.linear()
            .range([height, 0]);

        var xAxis = d3.svg.axis()
            .scale(x)
            .orient("bottom");

        var yAxis = d3.svg.axis()
            .scale(y)
            .orient("left")
            .ticks(10, "");


        $(".predicted-results-graph").empty()
        var svg = d3.select(".predicted-results-graph").append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
          .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
          x.domain(["MIT", "BU", "Harvard", "Tufts"]);

          y.domain([0, 18]);

          svg.append("g")
              .attr("class", "x axis")
              .attr("transform", "translate(0," + height + ")")
              .call(xAxis);

          svg.append("g")
              .attr("class", "y axis")
              .call(yAxis)
            .append("text")
              .attr("transform", "rotate(0)")
              .attr("x", 200)
              .attr("y", 20)	
              .style("text-anchor", "end")
              .text("Points");

          var data = [
        		{letter: 'MIT', frequency: 18, stroke: 'green', color:'rgba(0, 128, 0, 0.2)'},
              	{letter: 'MIT', frequency: 10, color: 'gray'},
              	{letter: 'BU', frequency: 12, stroke: 'red', color:'rgba(128, 0, 0, 0.2)'},
              	{letter: 'BU', frequency: 7, color: 'gray'}, 
              	{letter: 'Harvard', frequency: 8, stroke: 'red', color:'rgba(128, 0, 0, 0.2)'},
              	{letter: 'Harvard', frequency: 6, color: 'gray'},
              	{letter: 'Tufts', frequency: 7, stroke: 'red', color:'rgba(128, 0, 0, 0.2)'},
              	{letter: 'Tufts', frequency: 4, color: 'gray'}]
          svg.selectAll(".bar")
              .data(data)
            .enter().append("rect")
              .attr("class", "bar")
              .attr("x", function(d) { return x(d.letter); })
              .attr("width", x.rangeBand())
              .attr("y", function(d) { return y(d.frequency); })
              .attr("height", function(d) { return height - y(d.frequency); })
              .attr('fill', function(d) { return d.color})
              .style("stroke-dasharray", ("2, 2")) 
              .style("stroke", function(d) { return d.stroke})
              .style("stroke-width", 3)


        function type(d) {
          d.frequency = +d.frequency;
          return d;
        }
      } else {
        $('.dashboard-content-top').transition('slide right')
        .removeClass('visible')
        .addClass('hidden');
        $('.dashboard-content-bottom').transition('slide right')
        .removeClass('visible')
        .addClass('hidden');

        $("#divider2").hide();
        $("#event")
            .html($(this).text())
            .hide()
            .removeClass("active");
        $("#chosen-meet").addClass('active');
      }
    });

    $(".button.color").click(function() {

      if ($(this).hasClass('red')) {
        $(this).removeClass("red").addClass("green")
      .find(".minus").addClass("plus").removeClass("minus");
      } else {
        $(this).removeClass("green").addClass("red")
        .find(".plus").addClass("minus").removeClass("plus");
      }

    });

    //Click on meet title, hide graphs
    $("#chosen-meet").click(function() {
      if ($('.dashboard-content-top').hasClass("visible")) {
        $('.dashboard-content-top').transition('slide right')
        .removeClass('visible')
        .addClass('hidden');
        $('.dashboard-content-bottom').transition('slide right')
        .removeClass('visible')
        .addClass('hidden');

        $("#divider2").hide();
        $("#event")
            .html($(this).text())
            .hide()
            .removeClass("active");
        $("#chosen-meet").addClass('active');
      }
    });

    //Click on meets, hide everything
    $("#meet-title").click(function() {

      if  ($('.dashboard-schedule').hasClass('visible')) {
          //times are visible
          if ($(".dashboard-content-top").hasClass('visible')) {
            
            $('.dashboard-content-top')
              .transition('slide right')
              .addClass('hidden')
              .removeClass('visible');

            $('.dashboard-content-bottom')
              .transition('slide right')
              .addClass('hidden')
              .removeClass('visible');


            $('.dashboard-schedule')
              .transition('slide right')
              .addClass('hidden')
              .removeClass('visible')
              .css('border', 'none');

            $("#divider2").hide();
            $("#divider1").hide();
            $("#event")
              .hide()
              .removeClass("active");
            $("#chosen-meet").hide().removeClass("active");
            $("#meet-title").addClass('active');

          } else {

            $('.dashboard-schedule')
                .transition('slide right')
                .addClass('hidden')
                .removeClass('visible')
                .css('border', 'none');

            $("#divider1").hide();
            $("#divider2").hide();
            $("#chosen-meet")
              .hide()
              .removeClass("active");
            $("#meet-title").addClass('active');
          }
        }
    });

});



