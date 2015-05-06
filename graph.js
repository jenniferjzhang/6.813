/**********************
Heavily borrowed from http://bl.ocks.org/bobmonteverde/2070123
*********************/

function p(t1, t2, t) {
  if (t < t1) {
    return 0.2
  } else if (t > t2) {
    return 0.85
  } else {
    difference = t2-t1
    return ((t-t1) / difference)*0.5 + 0.25
  }
}
workout_data = [
  {
    label: 'Usain Bolt',
    times: [100, 75, 75, 100, 66, 75],
    statuses: [
      "feeling pretty good",
      "didn't get much sleep last night",
      "it's been a tough few weeks at school",
      "had a great break from class!",
      "broke up with my girlfriend :(",
      "getting ready for the end of the semester"
    ],
    weeks: [
      [
        {
           event: '400m',
           best: '2:15',
           worst: '2:30',
           time: '2:20',
           position: p(15, 30, 20),
         }, {
           event: '800m',
           best: '2:15',
           worst: '2:30',
           time: '2:16',
           position: p(15, 30, 16)
         }, {
           event: '800m',
           best: '2:15',
           worst: '2:30',
           time: '2:22',
           position: p(15, 30, 22)
         }
      ], [
        {
           event: '800m',
           best: '2:15',
           worst: '2:30',
           time: '2:16',
           position: p(15, 30, 16)
         },

        {
           event: '400m',
           best: '2:15',
           worst: '2:30',
           time: '2:10',
           position: p(15, 30, 10)
         }, {
           event: '800m',
           best: '2:15',
           worst: '2:30',
           time: '2:22',
           position: p(15, 30, 22)
         }
      ], [
        {
           event: '400m',
           best: '2:15',
           worst: '2:30',
           time: '2:22',
           position: p(15, 30, 22)
         }, {
           event: '800m',
           best: '2:15',
           worst: '2:30',
           time: '2:16',
           position: p(15, 30, 16)
         }, {
           event: '800m',
           best: '2:15',
           worst: '2:30',
           time: '2:22',
           position: p(15, 30, 22)
         }
      ], [
        {
           event: '400m',
           best: '2:15',
           worst: '2:30',
           time: '2:32',
           position: p(15, 30, 32)
         }, {
           event: '800m',
           best: '2:15',
           worst: '2:30',
           time: '2:16',
           position: p(15, 30, 16)
         }, {
           event: '800m',
           best: '2:15',
           worst: '2:30',
           time: '2:22',
           position: p(15, 30, 22)
         }
      ], [
        {
           event: '400m',
           best: '2:15',
           worst: '2:30',
           time: '2:20',
           position: p(15, 30, 20)
         }, {
           event: '800m',
           best: '2:15',
           worst: '2:30',
           time: '2:16',
           position: p(15, 30, 16)
         }, {
           event: '800m',
           best: '2:15',
           worst: '2:30',
           time: '2:22',
           position: p(15, 30, 22)
         }
      ], [
        {
           event: '400m',
           best: '2:15',
           worst: '2:30',
           time: '2:20',
           position: p(15, 30, 20)
         }, {
           event: '800m',
           best: '2:15',
           worst: '2:30',
           time: '2:16',
           position: p(15, 30, 16)
         }, {
           event: '800m',
           best: '2:15',
           worst: '2:30',
           time: '2:22',
           position: p(15, 30, 22)
         }
      ],
    ],
  },
  {
    label: 'Tyson Gay',
    times: [50, 50, 66, 66, 75, 100],
    statuses: [
      "Semester's getting off to a rough start",
      "Haven't been eating as well as I'd like",
      "I hurt my ankle, but it's been getting better.",
      "Feeling pretty good. Excited for nationals!",
      "Doing alright",
      "Doing pretty well"
    ],
    weeks: [
      [
        {
           event: '400m',
           best: '2:15',
           worst: '2:30',
           time: '2:32',
           position: p(15, 30, 32),
         }, {
           event: '800m',
           best: '2:15',
           worst: '2:30',
           time: '2:16',
           position: p(15, 30, 16)
         }, {
           event: '800m',
           best: '2:15',
           worst: '2:30',
           time: '2:22',
           position: p(15, 30, 22)
         }
      ], [
        {
           event: '800m',
           best: '2:15',
           worst: '2:30',
           time: '2:16',
           position: p(15, 30, 16)
         },

        {
           event: '400m',
           best: '2:15',
           worst: '2:30',
           time: '2:20',
           position: p(15, 30, 20)
         }, {
           event: '800m',
           best: '2:15',
           worst: '2:30',
           time: '2:31',
           position: p(15, 30, 31)
         }
      ], [
        {
           event: '400m',
           best: '2:15',
           worst: '2:30',
           time: '2:22',
           position: p(15, 30, 22)
         }, {
           event: '800m',
           best: '2:15',
           worst: '2:30',
           time: '2:24',
           position: p(15, 30, 24)
         }, {
           event: '800m',
           best: '2:15',
           worst: '2:30',
           time: '2:31',
           position: p(15, 30, 31)
         }
      ], [
        {
         event: '400m',
         best: '2:15',
         worst: '2:30',
         time: '2:22',
         position: p(15, 30, 22)
       }, {
         event: '800m',
         best: '2:15',
         worst: '2:30',
         time: '2:24',
         position: p(15, 30, 24)
       }, {
         event: '800m',
         best: '2:15',
         worst: '2:30',
         time: '2:31',
         position: p(15, 30, 31)
       }
      ], [
        {
           event: '400m',
           best: '2:15',
           worst: '2:30',
           time: '2:20',
           position: p(15, 30, 20)
         }, {
           event: '800m',
           best: '2:15',
           worst: '2:30',
           time: '2:16',
           position: p(15, 30, 16)
         }, {
           event: '800m',
           best: '2:15',
           worst: '2:30',
           time: '2:22',
           position: p(15, 30, 22)
         }
      ], [
        {
           event: '400m',
           best: '2:15',
           worst: '2:30',
           time: '2:18',
           position: p(15, 30, 18)
         }, {
           event: '800m',
           best: '2:15',
           worst: '2:30',
           time: '2:19',
           position: p(15, 30, 19)
         }, {
           event: '800m',
           best: '2:15',
           worst: '2:30',
           time: '2:17',
           position: p(15, 30, 17)
         }
      ],
    ],
  }
]

function log(text) {
  if (console && console.log) console.log(text);
  return text;
}

$(document).ready(function() {
  drawWorkoutGraph();
})

function drawMeetGraph() {
  $('#chart svg').empty();
  $('#column').empty();
  var margin = {top: 0, right: 0, bottom: 0, left: 0},
    chart = d3LineWithLegend()
            .width(width(margin))
            .height(height(margin))
            .yAxis.label('Time (s)');

    chart.xAxis.tickFormat(function(d, i){
        return (Math.floor(d) == d) ? "Meet " + (d + 1) : ""
    })
  var svg = d3.select('#chart svg')
      .datum(generateMeetData())
  svg.append("text")
              .attr("text-anchor", "middle")
              .attr("transform", "translate("+ (width(margin)/2) +","+(height(margin))+")")  // centre below axis
              .text("Meet");
  svg.transition().duration(500)
    .attr('width', width(margin))
    .attr('height', height(margin))
    .call(chart);

  //http://stackoverflow.com/questions/11924452/handlebar-js-iterating-over-for-basic-loop
  Handlebars.registerHelper('times', function(n, block) {
      var accum = '';
      for(var i = 1; i < n+1; ++i)
          accum += block.fn(i);
      return accum;
  });

  chart.dispatch.on('showTooltip', function(e) {
  var offset = $('#chart').offset(), // { left: 0, top: 0 }
        left = e.pos[0] + offset.left,
        top = e.pos[1] + offset.top,
        formatter = d3.format(".04f");

    var content = '<h3>' + e.series.label + '</h3>' +
                  '<p>' +
                  '<span class="value">Week ' + (e.point[0]+1) + ': ' + formatter(e.point[1]) + '</span>' +
                  '</p>';

    var source   = $("#workout-template").html();
    var template = Handlebars.compile(source);
    console.log(e);
    var context = {
      week: (e.point[0]+1), 
      lowerPosition: true,
      athlete: e.series.label,
      status: workout_data[e.seriesIndex].statuses[e.pointIndex],
      time: e.series.data[e.pointIndex][1]+"s",
      title: "Meet"};

    data = [
    ]
    context['data'] = data
    var content    = template(context);
    $('#column').html(content);
    _.each(data, function(data, n) {
      if (n === 0) {
        draw_sample_graph($('#graph_container'+n))
      } else {
        draw_graph(
          $('#graph_container'+n), 
          data.best,
          data.worst,
          data.time,
          data.position)
      }
    });
  });

  chart.dispatch.on('hideTooltip', function(e) {
    nvtooltip.cleanup();
  });




  $(window).resize(function() {
    var margin = chart.margin();

    chart
      .width(width(margin))
      .height(height(margin));

    d3.select('#test1 svg')
      .attr('width', width(margin))
      .attr('height', height(margin))
      .call(chart);

  });




  function width(margin) {
    var w = $('.dashboard-content').width() - 20;
    var width = ( (w - margin.left - margin.right - 20) < 0 ) ? margin.left + margin.right + 2 : w;
    return width*0.5;
  }

  function height(margin) {
    var h = $('.dashboard-content').height() - 20;

    var height = ( h - margin.top - margin.bottom - 20 < 0 ) ? 
              margin.top + margin.bottom + 2 : h;
    return height * 0.5;
  }


  //data
  function generateMeetData() {
    usain = [10.03, 9.69, 9.58, 9.82, 9.76, 9.63];
    usain_data = [];
    tyson = [9.84, 9.84, 9.77, 9.69, 9.78, 9.79];
    tyson_data = [];
    for (var i = 0; i < 6; i++) {
        usain_data.push([i, usain[i]])
        tyson_data.push([i, tyson[i]])
    }
    return [
      {
        data: usain_data,
        label: "Usain Bolt"
      },
      {
        data: tyson_data,
        label: "Tyson Gay"
      },
    ];
  }
}



function drawWorkoutGraph() {
  $('#chart svg').empty();
  $('#column').empty();
  var margin = {top: 0, right: 0, bottom: 0, left: 0},
    chart = d3LineWithLegend()
            .width(width(margin))
            .height(height(margin))
            .yAxis.label('% of workout windows hit');
    chart.xAxis.tickFormat(function(d, i){
        name = (Math.floor(d) == d) ? "Week " + (d + 1) : ""
        return name
    })

    chart.yAxis.tickFormat(function(d, i){
        return d + "%"
    })

  var svg = d3.select('#chart svg')
      .datum(generateMeetData())
  svg.append("text")
              .attr("text-anchor", "middle")
              .attr("transform", "translate("+ (width(margin)/2) +","+(height(margin))+")")  // centre below axis
              .text("Workout week");
  svg.transition().duration(500)
    .attr('width', width(margin))
    .attr('height', height(margin))
    .call(chart);

  //http://stackoverflow.com/questions/11924452/handlebar-js-iterating-over-for-basic-loop
  Handlebars.registerHelper('times', function(n, block) {
      var accum = '';
      for(var i = 1; i < n+1; ++i)
          accum += block.fn(i);
      return accum;
  });

  chart.dispatch.on('showTooltip', function(e) {
  var offset = $('#chart').offset(), // { left: 0, top: 0 }
        left = e.pos[0] + offset.left,
        top = e.pos[1] + offset.top,
        formatter = d3.format(".04f");


    var source   = $("#workout-template").html();
    var template = Handlebars.compile(source);
    console.log(e);
    var context = {
      week: (e.pointIndex+1), 
      lowerPosition: true,
      athlete: e.series.label,
      title: "Workout week"};

    data = [
      {
        event: 'LEGEND',
      }
    ].concat(workout_data[e.seriesIndex].weeks[e.pointIndex])
    context['data'] = data
    var content    = template(context);
    $('#column').html(content);
    _.each(data, function(data, n) {
      if (n === 0) {
        draw_sample_graph($('#graph_container'+n))
      } else {
        draw_graph(
          $('#graph_container'+n), 
          data.best,
          data.worst,
          data.time,
          data.position)
      }
    });
  });

  chart.dispatch.on('hideTooltip', function(e) {
    nvtooltip.cleanup();
  });




  $(window).resize(function() {
    var margin = chart.margin();

    chart
      .width(width(margin))
      .height(height(margin));

    d3.select('#test1 svg')
      .attr('width', width(margin))
      .attr('height', height(margin))
      .call(chart);

  });




  function width(margin) {
    var w = $('.dashboard-content').width() - 20;
    var width = ( (w - margin.left - margin.right - 20) < 0 ) ? margin.left + margin.right + 2 : w;
    return width*0.5;
  }

  function height(margin) {
    var h = $('.dashboard-content').height() - 20;

    var height = ( h - margin.top - margin.bottom - 20 < 0 ) ? 
              margin.top + margin.bottom + 2 : h;

    console.log("height", height)
    return height * 0.75;
  }


  //data
  function generateMeetData() {
    graph_data = []
    for (var i = 0; i < workout_data.length; i++) {
      graph_runner_data = {}
      runner_data = workout_data[i]
      graph_runner_data.label = runner_data.label
      graph_runner_data.data = _.map(workout_data[i].times, function(key, n) {
        return [n, key]
      })
      graph_data.push(graph_runner_data)
    }
    console.log(graph_data);
    return graph_data
  }
}

function draw_sample_graph(container) {
  // Set the dimensions of the canvas / graph
  var margin = {top: 0, right: 0, bottom: 0, left: 0},
      width = container.width() - margin.left - margin.right,
      height = container.height() - margin.top - margin.bottom;

  // Set the ranges
  var x = d3.time.scale().range([0, width]);
  var y = d3.scale.linear().range([height, 0]);

  // Define the axes
  var xAxis = d3.svg.axis().scale(x)

  var yAxis = d3.svg.axis().scale(y).orient("left")

  // Define the line
  var valueline = d3.svg.line()
      .x(function(d) { return x(d.date); })
      .y(function(d) { return y(d.close); });
      
  // Adds the svg canvas
  function transformX(x) {
    return x * container.width()
  }

  function transformY(y) {
    return y * container.height()
  }
  var svg = d3.select(container.selector)
      .append("svg")
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom)
      .append("g")
          .attr("transform", 
                "translate(" + margin.left + "," + margin.top + ")");


  data = [
  {date: 0, close: 0.3},
  {date: 1, close: 0.3}
  ]

  data.forEach(function(d) {
      d.date = d.date;
      d.close = d.close;
  });

  // Scale the range of the data
  x.domain(d3.extent(data, function(d) { return d.date; }));
  y.domain([0, 1]);

  var rectangle = svg.append("rect")
      .attr("x", container.width()*0.75)
      .attr("y", 0)
      .attr("width", container.width()*0.25)
      .attr("height", container.height())
      .style({
        "fill": "red",
        "opacity": "0.1"
      });

  // Add the valueline path.
  svg.append("path")
      .attr("class", "line")
      .attr("d", valueline(data))
      .style({
        "stroke": "black",
        "stroke-width": "0.5"
      });

  // Add the X Axis
  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

  // Add the Y Axis
  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis);

  svg.append("text")      // text label for the x axis
          .attr("x", transformX(0.25))
          .attr("y", transformY(0.7))
          .style({
            "text-anchor": "middle",
            "fill": "green",
            "font-weight": "bold"})
          .text("[");

  svg.append("text")      // text label for the x axis
          .attr("x", transformX(0.75))
          .attr("y", transformY(0.7))
          .style({
            "text-anchor": "middle",
            "fill": "red",
            "font-weight": "bold"})
          .text("]");

  svg.append("text")      // text label for the x axis
          .attr("x", transformX(0.75))
          .attr("y", transformY(0.48))
          .style({
            "text-anchor": "middle",
            'fill': 'red',
            "font-size": "80%",
            "opacity": "0.8"
            })
          .text("Worst time");

  svg.append("text")      // text label for the x axis
          .attr("x", transformX(0.25))
          .attr("y", transformY(0.48))
          .style({
            "text-anchor": "middle",
            'fill': 'green',
            "font-size": "80%",
            "opacity": "0.8"
            })
          .text("Best time");

  svg.append("text")      // text label for the x axis
          .attr("x", transformX(0.5))
          .attr("y", transformY(0.22))
          .style({
            "text-anchor": "middle",
            'fill': 'black',
            "font-size": "80%",
            "opacity": "0.8"
            })
          .text("Time window athlete should hit");

  svg.append("text")      // text label for the x axis
          .attr("x", transformX(0.5))
          .attr("y", transformY(0.7))
          .style({
            "text-anchor": "middle",
            'fill': 'black',
            "font-weight": "bold",
            "font-size": "70%"
            })
          .text("|");

  svg.append("text")      // text label for the x axis
          .attr("x", transformX(0.5))
          .attr("y", transformY(0.9))
          .style({
            "text-anchor": "middle",
            'fill': 'black',
            "font-size": "80%",
            "font-weight": "bold"
            })
          .text("Actual time");
}

function propToNum(prop) {
  return Number(prop.replace(/[^-\d\.]/g, ''))
}

function draw_graph(container, t1, t2, t, position) {
  // Set the dimensions of the canvas / graph
  var margin = {top: 0, right: 0, bottom: 0, left: 0},
      width = container.width() - margin.left - margin.right,
      height = container.height() - margin.top - margin.bottom;

  // Set the ranges
  var x = d3.time.scale().range([0, width]);
  var y = d3.scale.linear().range([height, 0]);

  // Define the axes
  var xAxis = d3.svg.axis().scale(x)

  var yAxis = d3.svg.axis().scale(y).orient("left")

  // Define the line
  var valueline = d3.svg.line()
      .x(function(d) { return x(d.date); })
      .y(function(d) { return y(d.close); });
      
  // Adds the svg canvas
  function transformX(x) {
    return x * container.width()
  }

  function transformY(y) {
    return y * container.height()
  }
  var svg = d3.select(container.selector)
      .append("svg")
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom)
      .append("g")
          .attr("transform", 
                "translate(" + margin.left + "," + margin.top + ")");


  data = [
  {date: 0, close: 0.5},
  {date: 1, close: 0.5}
  ]

  data.forEach(function(d) {
      d.date = d.date;
      d.close = d.close;
  });

  // Scale the range of the data
  x.domain(d3.extent(data, function(d) { return d.date; }));
  y.domain([0, 1]);

  var rectangle = svg.append("rect")
      .attr("x", container.width()*0.75)
      .attr("y", 0)
      .attr("width", container.width()*0.25)
      .attr("height", container.height())
      .style({
        "fill": "red",
        "opacity": "0.1"
      });

  // Add the valueline path.
  svg.append("path")
      .attr("class", "line")
      .attr("d", valueline(data))
      .style({
        "stroke": "black",
        "stroke-width": "0.5"
      });

  // Add the X Axis
  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

  // Add the Y Axis
  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis);

  svg.append("text")      // text label for the x axis
          .attr("x", transformX(0.25))
          .attr("y", transformY(0.6))
          .style({
            "text-anchor": "middle",
            "fill": "green",
            "font-weight": "bold"})
          .text("[");

  svg.append("text")      // text label for the x axis
          .attr("x", transformX(0.75))
          .attr("y", transformY(0.6))
          .style({
            "text-anchor": "middle",
            "fill": "red",
            "font-weight": "bold"})
          .text("]");

  svg.append("text")      // text label for the x axis
          .attr("x", transformX(0.75))
          .attr("y", transformY(0.3))
          .style({
            "text-anchor": "middle",
            'fill': 'red',
            "font-size": "80%",
            "opacity": "0.6"
            })
          .text(t2);

  svg.append("text")      // text label for the x axis
          .attr("x", transformX(0.25))
          .attr("y", transformY(0.3))
          .style({
            "text-anchor": "middle",
            'fill': 'green',
            "font-size": "80%",
            "opacity": "0.6"
            })
          .text(t1);

  svg.append("text")      // text label for the x axis
          .attr("x", transformX(position))
          .attr("y", transformY(0.6))
          .style({
            "text-anchor": "middle",
            'fill': 'black',
            "font-weight": "bold",
            "font-size": "80%"
            })
          .text("|");

  svg.append("text")      // text label for the x axis
          .attr("x", transformX(position))
          .attr("y", transformY(0.88))
          .style({
            "text-anchor": "middle",
            'fill': 'black',
            "font-size": "90%",
            "font-weight": "bold"
            })
          .text(t);
}
