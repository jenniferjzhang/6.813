// things to work on
// jwang suggested changing body text to a font less decorative than Raleway
// handlebars template doesn't update dynamically, so currently can only show athletes staically from var currentEvent
// predicted points is not implemented
// entry table is not sorted by PR or SB or Predicted Points
// predicted points graph needs better layout, padding/margin
// submit entry button is unimplemented yet
// uneven scrollbars across panes. also overflow shoud eventually be set to hidden
// all columns should have same height, individual scroll   

// currentEvent is a static variable that will select all the athletes who run that
// Repopulate athletes based on current event (update dynamically)
var currentEvent = "800m"; // can also be "100m", or "400m"
var state = {
  meet: false,
  event: false,
  entries: false,
  selectedMeet: "",
  selectedEvent: "800m", //default to an arbitrary event so site doesn't break onLoad
  enteredAthletes: []
};

Handlebars.registerHelper('getPR', function(athlete) {
  var pr = athlete.events[state.selectedEvent].PR;
  return new Handlebars.SafeString(pr);
}); 

Handlebars.registerHelper('getSB', function(athlete) {
  console.log(athlete);
  var sb = athlete.events[state.selectedEvent].SB;
  return new Handlebars.SafeString(sb);
}); 

// handler for clicking on a meet in the meets list
var meetsHandler = function(event) {
  var meet = $(this).text();
  console.log(meet);
  if (state.meet) {
    if (state.selectedMeet != meet){
      $('.dashboard-schedule')
      .transition('slide left').transition('slide right');
    }
  } else {
    $('.dashboard-schedule')
      .transition('slide right')
      .removeClass('hidden');
  }

  if (state.event) {
    hideEntries();
  }

  $("#divider1").removeClass("hidden");
  $("#breadcrumbs-current-meet")
    .html(meet)
    .addClass("active")
    .removeClass("hidden");
  state.meet = true;
  state.selectedMeet = meet;
};

// handler for clicking on an event in the schedule
var scheduleHandler = function(event) {
  var event = $(this).text();
  if (state.event) {
    if (state.selectedEvent != event) {
      $('.dashboard-content-top')
        .transition('slide left').transition('slide right');
      $('.dashboard-content-bottom')
        .transition('slide left').transition('slide right');
    };
  } else {
    $('.dashboard-content-top')
      .transition('slide right')
      .removeClass('hidden');
    $('.dashboard-content-bottom')
      .transition('slide right')
      .removeClass('hidden');
  }
  entriesGraph();
  $("#divider2").removeClass("hidden");
  $("#breadcrumbs-current-meet").removeClass("active");
  $("#breadcrumbs-current-event")
    .html(event)
    .addClass("active")
    .removeClass("hidden");
  state.event = true;
  state.selectedEvent = event;
  var competingAthletes = athletes.filter(function(athlete) {
    return state.selectedEvent in athlete.events
  });
  
  if (competingAthletes.length === 0) {
    //If there are no athletes that can compete in this event
    //Show friendly error message, prevent graph and table from appearing
    $("#entries").html("It seems like you don't have any athletes qualified to compete in the " + state.selectedEvent + ".")
    .css("text-align","center")
    .css('margin-top', '15%');  

    // Hide graphs is no athletes can compete
    $(".predicted-results-graph").hide();
    $(".predicted-results-table").hide();
  } else {
    console.log("compiling");
    var entriesSource = templates["entries"];
    var entriesTemplate = Handlebars.compile(entriesSource);

    $(".dashboard-content-top").html(entriesTemplate(athletes.filter(
      function (athlete) {
        return state.selectedEvent in athlete.events
      } 
    )));

    //calculate points
    var ptsCols = $("#entries")[0].children[1].children;
    var athIds = []
    
    //console.log(ptsCols);
    for (col in ptsCols) {
      if (!isNaN(col)) {
        // for each row in the table

//        console.log(col, ptsCols[col]);
        athIds.push(ptsCols[col].id);
        var ptsCol = ptsCols[col].children[3];
       // ptsCol.innerHTML = "FIGS";
        console.log(ptsCol);
      }
    }

    //with athIds get athletes,
    var aths = []
    for (i in athIds) {
      aths.push(athletes[athIds[i]]);
    }

  var meetResults = results[state.selectedEvent];

  aths = aths.concat(meetResults.participants);
  console.log(aths);
  //meetResults.rankings = getEventResults(meetResults.participants, state.selectedEvent);

    //get points
    var eventpoints = getEventResults(aths, state.selectedEvent);
    console.log(eventpoints);
  console.log(ptsCols);

  //sorry for O(N^2)
  for (i in ptsCols) {
    //for each row
    console.log(ptsCols[i], 'pts');
    for (j in eventpoints) {
      console.log(eventpoints[j][0]); //participant
      var part = eventpoints[j][0];
      //console.log(ptsCols[i]);console.log('why');
      console.log('compate',part.id, ptsCols[i].id);
      if (part.id == ptsCols[i].id) {
        
        //console.log(ptsCols[i].children,'where');
        if (ptsCols[i].children[3].innerHTML) {
          ptsCols[i].children[3].innerHTML = eventpoints[j][1];
        }

              }
    }
  }
    // show graphs
    $(".predicted-results-graph").show();
    $(".predicted-results-table").show();
    $(".button").click(submitButtonHandler);

  }
};

// hide the entries and graph
var hideEntries = function () {
  if (state.event) {
    $('.dashboard-content-top')
      .transition('slide right')
      .addClass("hidden");
    $('.dashboard-content-bottom')
      .transition('slide right')
      .addClass("hidden");
  } else {
    $('.dashboard-content-top')
      .addClass("hidden");
    $('.dashboard-content-bottom')
      .addClass("hidden");
  }
  $("#breadcrumbs-current-event")
    .addClass("hidden")
    .removeClass("active");
  $("#divider2").addClass("hidden");
  state.event = false;
  state.selectedEvent = "";
};

// hide the schedule
var hideSchedule = function () {
  $('.dashboard-schedule')
      .transition('slide right')
      .addClass('hidden');
  $("#breadcrumbs-current-meet")
    .removeClass("active")
    .addClass("hidden");
  $("#divider1").addClass("hidden");
  state.meet = false;
  state.selectedMeet = "";
};

// handler for when user clicks on "Meets" breadcrumb
var hideEverythingHandler = function(event) {
  hideEntries();
  hideSchedule();
};

var submitButtonHandler = function(event) {
  if ($(this).hasClass('red')) {
    $(this).removeClass("red").addClass("green")
  .find(".minus").addClass("plus").removeClass("minus");
    removeAthlete($(this));
  } else {
    $(this).removeClass("green").addClass("red")
    .find(".plus").addClass("minus").removeClass("plus");
    enterAthlete($(this));
  }
};

// given id, add athlete to predicted entries
var enterAthlete = function(id) {
  // Get athleteId from button, then get athlete from data.js
  var athleteId = id[0].firstElementChild.id;
  var athlete = athletes[athleteId];
  var meetResults = results[state.selectedEvent];

  //Add athelete to participants, then compute results, redraw graph
  meetResults.participants.push(athlete);
 // console.log(meetResults.participants);
  meetResults.rankings = getEventResults(meetResults.participants, state.selectedEvent);

  //Now that we have results, add them to table

};

// given id, remove athlete from predicted entries
var removeAthlete = function(id) {
  var athleteId = id[0].firstElementChild.id;
  var athlete = athletes[athleteId];
  var meetResults = results[state.selectedEvent];

  //remove athlete from participants, then recompute results, redraw graph
  meetResults.participants.splice(meetResults.participants.indexOf(athlete),1);
  console.log(meetResults.participants);
  meetResults.rankings = getEventResults(meetResults.participants, state.selectedEvent);
};
//draw graph
var entriesGraph = function () {
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
};

$(document).ready(function() {

    // populate meet template with meets
    var meetsSource = templates["meets"];
    var meetsTemplate = Handlebars.compile(meetsSource);
    $(".dashboard-meets").html(meetsTemplate(meets));

    // populate schedule template with events
    var scheduleSource = templates["schedule"];
    var scheduleTemplate = Handlebars.compile(scheduleSource);
    $(".dashboard-schedule").html(scheduleTemplate(schedule));

    // populate entries template with athletes
    var entriesSource = templates["entries"];
    var entriesTemplate = Handlebars.compile(entriesSource);
    $(".dashboard-content-top").html(entriesTemplate(athletes.filter(
      function (athlete) {
       
        return currentEvent in athlete.events
      } 
    )));

    //populate results template with current athletes + input
    var resultsSource = templates["oldResults"];
    //var resultsTemplate = Handlebars.compile(resultsSource);
    //TODO: filter results
    //$(".dashboard-content-bottom").html(resultsTemplate(results));


    $("#meets a").click(meetsHandler);
    $("#schedule a").click(scheduleHandler);
    $("#breadcrumbs-meets").click(hideEverythingHandler);
    $("#breadcrumbs-current-meet").click(meetsHandler);
    $("#breadcrumbs-current-event").click(scheduleHandler);
    $(".button").click(submitButtonHandler);
    
    

    // $(".dashboard-content-top").addClass('hidden').hide();
    // $(".dashboard-content-bottom").addClass('hidden').hide();
    // $(".dashboard-schedule").addClass('hidden').hide();
    // $("#chosen-meet").addClass('hidden').hide();
    // $(".chevron").addClass('hidden').hide();
    // $("#event").addClass('hidden').hide();

    // $("#meets a").click(function() {
      
    //     if ($('.dashboard-schedule').hasClass('hidden')) {
    //     	//If schedule is hidden, show on click
	   //     $('.dashboard-schedule')
		  //       .transition('slide right')
		  //       .removeClass('hidden')
	   //  	    .addClass('visible')
	   //      	.css('border', '1px solid #E8E8E8');

    //       $("#divider1").show();
    //       $("#chosen-meet")
    //         .html($(this).text())
    //         .show()
    //         .addClass("active");
    //       $("#meet-title").removeClass('active');

    //     } else if  ($('.dashboard-schedule').hasClass('visible')) {
    //       //times are visible
	   //      if ($(".dashboard-content-top").hasClass('visible')) {
	        	
	   //      	$('.dashboard-content-top')
	   //      		.transition('slide right')
    //     			.addClass('hidden')
    //    	 			.removeClass('visible');

    //    	 		$('.dashboard-content-bottom')
	   //      		.transition('slide right')
    //     			.addClass('hidden')
    //    	 			.removeClass('visible');


    //    	 		$('.dashboard-schedule')
	   //    			.transition('slide right')
    //    	 			.addClass('hidden')
	   //    			.removeClass('visible')
	   //    			.css('border', 'none');

    //         $("#divider2").hide();
    //         $("#divider1").hide();
    //         $("#event")
    //           .hide()
    //           .removeClass("active");
    //         $("#chosen-meet").hide().removeClass("active");
    //         $("#meet-title").addClass('active');

    //       } else {

	   //      	$('.dashboard-schedule')
	   //          	.transition('slide right')
	   //      		  .addClass('hidden')
	   //    	    	.removeClass('visible')
	   //   	    	  .css('border', 'none');

    //         $("#divider1").hide();
    //         $("#divider2").hide();
    //         $("#chosen-meet")
    //           .hide()
    //           .removeClass("active");
    //         $("#meet-title").addClass('active');
	   //      }
    //     }
 
    // });

    // $(".dashboard-schedule a").click(function() {
    //   currentEvent = $(this).text();
    //   if ($(".dashboard-content-top").hasClass('hidden')) { 
    //     $('.dashboard-content-top').transition('slide right')
    //     .removeClass('hidden')
    //     .addClass('visible');
    //     $('.dashboard-content-bottom').transition('slide right')
    //     .removeClass('hidden')
    //     .addClass('visible');

    //     $("#divider2").show();
    //     $("#event")
    //         .html($(this).text())
    //         .show()
    //         .addClass("active");
    //     $("#chosen-meet").removeClass('active');

        // var margin = {top: 20, right: 0, bottom: 30, left: 30},
        //     width = $('.predicted-results-graph').width() - margin.left - margin.right,
        //     height = 300 - margin.top - margin.bottom;

        // var x = d3.scale.ordinal()
        //     .rangeRoundBands([0, width], .1);

        // var y = d3.scale.linear()
        //     .range([height, 0]);

        // var xAxis = d3.svg.axis()
        //     .scale(x)
        //     .orient("bottom");

        // var yAxis = d3.svg.axis()
        //     .scale(y)
        //     .orient("left")
        //     .ticks(10, "");


        // $(".predicted-results-graph").empty()
        // var svg = d3.select(".predicted-results-graph").append("svg")
        //     .attr("width", width + margin.left + margin.right)
        //     .attr("height", height + margin.top + margin.bottom)
        //   .append("g")
        //     .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
        //   x.domain(["MIT", "BU", "Harvard", "Tufts"]);

        //   y.domain([0, 18]);

        //   svg.append("g")
        //       .attr("class", "x axis")
        //       .attr("transform", "translate(0," + height + ")")
        //       .call(xAxis);

        //   svg.append("g")
        //       .attr("class", "y axis")
        //       .call(yAxis)
        //     .append("text")
        //       .attr("transform", "rotate(0)")
        //       .attr("x", 200)
        //       .attr("y", 20)	
        //       .style("text-anchor", "end")
        //       .text("Points");

        //   var data = [
        // 		{letter: 'MIT', frequency: 18, stroke: 'green', color:'rgba(0, 128, 0, 0.2)'},
        //       	{letter: 'MIT', frequency: 10, color: 'gray'},
        //       	{letter: 'BU', frequency: 12, stroke: 'red', color:'rgba(128, 0, 0, 0.2)'},
        //       	{letter: 'BU', frequency: 7, color: 'gray'}, 
        //       	{letter: 'Harvard', frequency: 8, stroke: 'red', color:'rgba(128, 0, 0, 0.2)'},
        //       	{letter: 'Harvard', frequency: 6, color: 'gray'},
        //       	{letter: 'Tufts', frequency: 7, stroke: 'red', color:'rgba(128, 0, 0, 0.2)'},
        //       	{letter: 'Tufts', frequency: 4, color: 'gray'}]
        //   svg.selectAll(".bar")
        //       .data(data)
        //     .enter().append("rect")
        //       .attr("class", "bar")
        //       .attr("x", function(d) { return x(d.letter); })
        //       .attr("width", x.rangeBand())
        //       .attr("y", function(d) { return y(d.frequency); })
        //       .attr("height", function(d) { return height - y(d.frequency); })
        //       .attr('fill', function(d) { return d.color})
        //       .style("stroke-dasharray", ("2, 2")) 
        //       .style("stroke", function(d) { return d.stroke})
        //       .style("stroke-width", 3)


        // function type(d) {
        //   d.frequency = +d.frequency;
        //   return d;
        // }
    //   } else {
    //     $('.dashboard-content-top').transition('slide right')
    //     .removeClass('visible')
    //     .addClass('hidden');
    //     $('.dashboard-content-bottom').transition('slide right')
    //     .removeClass('visible')
    //     .addClass('hidden');

    //     $("#divider2").hide();
    //     $("#event")
    //         .html($(this).text())
    //         .hide()
    //         .removeClass("active");
    //     $("#chosen-meet").addClass('active');
    //   }
    // });

    // $(".button").click(function() {

    //   if ($(this).hasClass('red')) {
    //     $(this).removeClass("red").addClass("green")
    //   .find(".minus").addClass("plus").removeClass("minus");
    //   } else {
    //     $(this).removeClass("green").addClass("red")
    //     .find(".plus").addClass("minus").removeClass("plus");
    //   }
    // });

    // //Click on meet title, hide graphs
    // $("#chosen-meet").click(function() {
    //   if ($('.dashboard-content-top').hasClass("visible")) {
    //     $('.dashboard-content-top').transition('slide right')
    //     .removeClass('visible')
    //     .addClass('hidden');
    //     $('.dashboard-content-bottom').transition('slide right')
    //     .removeClass('visible')
    //     .addClass('hidden');

    //     $("#divider2").hide();
    //     $("#event")
    //         .html($(this).text())
    //         .hide()
    //         .removeClass("active");
    //     $("#chosen-meet").addClass('active');
    //   }
    // });

    // //Click on meets, hide everything
    // $("#meet-title").click(function() {

    //   if  ($('.dashboard-schedule').hasClass('visible')) {
    //       //times are visible
    //       if ($(".dashboard-content-top").hasClass('visible')) {
            
    //         $('.dashboard-content-top')
    //           .transition('slide right')
    //           .addClass('hidden')
    //           .removeClass('visible');

    //         $('.dashboard-content-bottom')
    //           .transition('slide right')
    //           .addClass('hidden')
    //           .removeClass('visible');


    //         $('.dashboard-schedule')
    //           .transition('slide right')
    //           .addClass('hidden')
    //           .removeClass('visible')
    //           .css('border', 'none');

    //         $("#divider2").hide();
    //         $("#divider1").hide();
    //         $("#event")
    //           .hide()
    //           .removeClass("active");
    //         $("#chosen-meet").hide().removeClass("active");
    //         $("#meet-title").addClass('active');

    //       } else {

    //         $('.dashboard-schedule')
    //             .transition('slide right')
    //             .addClass('hidden')
    //             .removeClass('visible')
    //             .css('border', 'none');

    //         $("#divider1").hide();
    //         $("#divider2").hide();
    //         $("#chosen-meet")
    //           .hide()
    //           .removeClass("active");
    //         $("#meet-title").addClass('active');
    //       }
    //     }
    // });

});



