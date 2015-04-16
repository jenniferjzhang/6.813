function log(text) {
  if (console && console.log) console.log(text);
  return text;
}

$(document).ready(function() {

  var margin = {top: 0, right: 0, bottom: 0, left: 0},
    chart = d3LineWithLegend()
            .xAxis.label('Workout week')
            .width(width(margin))
            .height(height(margin))
            .yAxis.label('Time (s)');
    chart.xAxis.tickFormat(function(d, i){
        return (Math.floor(d) == d) ? "Week " + (d + 1) : ""
    })
  var svg = d3.select('#chart svg')
      .datum(generateData())

  svg.transition().duration(500)
    .attr('width', width(margin))
    .attr('height', height(margin))
    .call(chart);



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
    var context = {week: (e.point[0]+1)};
    var content    = template(context);

    $('#column').html(content);
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
  function generateData() {
    usain = [10.03, 9.69, 9.58, 9.82, 9.76, 9.63, 9.77, 9.98];
    usain_data = [];
    tyson = [9.84, 9.84, 9.77, 9.69, 9.78, 9.79, 9.80, 9.93];
    tyson_data = [];
    for (var i = 0; i < 8; i++) {
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

});
