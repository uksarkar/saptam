<template>
  <div class="tile-block mt-4 line-chart">
    <canvas id="chart"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";
export default {
  name: "Chart",
  props: ['data1','data2'],
  mounted() {
    let self = this;
    Chart.plugins.register({
      afterDatasetsDraw: function(chart) {
        if (chart.tooltip._active && chart.tooltip._active.length) {
          var activePoint = chart.tooltip._active[0],
            ctx = chart.ctx,
            y_axis = chart.scales["y-axis-0"],
            x = activePoint.tooltipPosition().x,
            topY = y_axis.top,
            bottomY = y_axis.bottom;
          // draw line
          ctx.save();
          ctx.beginPath();
          ctx.moveTo(x, topY);
          ctx.lineTo(x, bottomY);
          ctx.lineWidth = 1;
          ctx.strokeStyle = "#444";
          ctx.stroke();
          ctx.restore();
        }
      }
    });

    var fontFamily = window
      .getComputedStyle(document.body, null)
      .getPropertyValue("font-family");
    Chart.defaults.global.defaultFontFamily = fontFamily || "Comfortaa";

    var chart = document.getElementById("chart").getContext("2d"),
      gradient = chart.createLinearGradient(0, 0, 0, 450),
      gradient2 = chart.createLinearGradient(0, 0, 0, 450);

    gradient.addColorStop(0, "rgba(255, 0,0, 0.5)");
    gradient.addColorStop(0.5, "rgba(255, 0, 0, 0.25)");
    gradient.addColorStop(1, "rgba(255, 0, 0, 0)");

    gradient2.addColorStop(0, "rgba(255, 125,0, 0.5)");
    gradient2.addColorStop(0.5, "rgba(255, 125, 0, 0.25)");
    gradient2.addColorStop(1, "rgba(255, 125, 0, 0)");

    var data = {
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ],
      datasets: [
        {
          label: "Total Sell",
          backgroundColor: gradient,
          pointBackgroundColor: "white",
          borderWidth: 1,
          borderColor: "#911215",
          data: this.data1
        },
        {
          label: "Due",
          backgroundColor: gradient2,
          pointBackgroundColor: "#ffcb00",
          borderWidth: 1,
          borderColor: "rgb(255, 125, 0)",
          data: this.data2
        }
      ]
    };

    var options = {
      responsive: true,
      maintainAspectRatio: true,
      title: {
        display: true,
        text: "Monthly Overview"
      },
      animation: {
        easing: "easeInOutQuad",
        duration: 520
      },
      scales: {
        xAxes: [
          {
            gridLines: {
              color: "rgba(200, 200, 200, 0.05)",
              lineWidth: 1
            }
          }
        ],
        yAxes: [
          {
            gridLines: {
              color: "rgba(200, 200, 200, 0.08)",
              lineWidth: 1
            },
            ticks: {
              beginAtZero: true
            }
          }
        ]
      },
      elements: {
        line: {
          tension: 0.4
        }
      },
      legend: {
        display: true
      },
      point: {
        backgroundColor: "white"
      },
      tooltips: {
        mode: "index",
        intersect: false,
        titleFontFamily: "Comfortaa",
        backgroundColor: "rgba(0,0,0,0.3)",
        titleFontColor: "red",
        caretSize: 5,
        cornerRadius: 2,
        xPadding: 10,
        yPadding: 10
      }
    };

    var chartInstance = new Chart(chart, {
      type: "line",
      data: data,
      options: options
    });
  }
};
</script>
