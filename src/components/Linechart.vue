<template>
  <div id="container">
    <div :id="domId"></div>
  </div>
</template>

<script>
import { onUpdated, ref } from "@vue/runtime-core";
import Highcharts from "highcharts";

export default {
  props: ["domId", "culumArray"],

  setup(props) {
    const chart = ref(null);

    onUpdated(() => {
      const analysis = props.culumArray.map((i) => {
        return i.sales;
      });
      console.log(analysis);

      const monthPrediction = props.culumArray.map((i) => {
        return i.month;
      });
      console.log(monthPrediction);
      let columnChart = {
        chart: {
          type: "column",
          renderTo: props.domId,
        },
        title: {
          text: "Projected Sales by Category",
        },
        subtitle: {
          text: "Source: Sales.com",
        },
        xAxis: {
          categories: monthPrediction,
          crosshair: true,
        },
        yAxis: {
          min: 0,
          title: {
            text: "Sales ($)",
          },
        },
        tooltip: {
          headerFormat:
            '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat:
            '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
          footerFormat: "</table>",
          shared: true,
          useHTML: true,
        },
        plotOptions: {
          column: {
            pointPadding: 0.1,
            borderWidth: 0,
          },
        },
        series: [
          {
            name: "Projected Sales (%)",
            data: analysis,
          },
        ],
      };
      chart.value = new Highcharts.chart(columnChart);
      console.log(props.culumArray, "God");
    });
    return {
      chart,
    };
  },
};
</script>
<style scoped>
</style>