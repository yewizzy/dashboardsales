<template>
  <div id="container">
    <div :id="domId"></div>
  </div>
</template>

<script>
import { onMounted, ref } from "@vue/runtime-core";
import Highcharts from "highcharts";

export default {
  props: ["domId"],

  setup(props) {
    const chart = ref(null);

    onMounted(() => {
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
          categories: [
            "2000",
            "2001",
            "2002",
            "2003",
            "2004",
            "2005",
            "2006",
            "2007",
            "2008",
            "2009",
            "2010",
            "2011",
          ],
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
            data: [40, 10, 106.4, 80,20],
          },

          // {
          //   name: "Actual Sales (%)",
          //   data: [40, 10, 5, 8, 10],
          // },
        ],
      };
      chart.value = new Highcharts.chart(columnChart);
    });

    return {
      chart,
    };
  },
};
</script>
<style scoped>
</style>