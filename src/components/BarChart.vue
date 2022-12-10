<template>
  <div id="container">
    <div :id="domId"></div>
  </div>
</template>

<script>
import { onUpdated, ref } from "@vue/runtime-core";
import Highcharts from "highcharts";

export default {
  props: ["domId", "salesData"],

  setup(props) {
    const chart = ref(null);

    onUpdated(() => {
      let columnChart = {
        chart: {
          type: "column",
          renderTo: props.domId,
        },
        title: {
          text: "Actual data set: Sales by Year",
        },
        subtitle: {
          text: "Source: Sales.com",
        },
        xAxis: {
          categories: props.salesData.years,
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
            name: "Sales",
            data: props.salesData.sales,
          },
        ],
      };
      (chart.value = new Highcharts.chart(columnChart)),
        console.log(props.salesData);
    });
    return {
      chart,
    };
  },
};
</script>
<style scoped>
</style>