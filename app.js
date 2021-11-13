$("#year").text(new Date().getFullYear());

google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawVisualization);

function drawVisualization() {
  // Some raw data (not necessarily accurate)
  var data = google.visualization.arrayToDataTable([
    ["Month", "Users", "Posts", "Tickets"],
    ["2020/08", 165, 938, 522],
    ["2020/09", 135, 1120, 599],
    ["2020/10", 157, 1167, 587],
    ["2020/11", 139, 1110, 615],
    ["2020/12", 136, 691, 629],
    ["2021/01", 136, 691, 629],
  ]);

  var options = {
    title: "Monthly Stats",
    vAxis: { title: "Numbers" },
    hAxis: { title: "Month" },
    seriesType: "bars",
    series: { 5: { type: "line" } },
  };

  var chart = new google.visualization.ComboChart(
    document.getElementById("chart_div")
  );
  chart.draw(data, options);
}
