<template>
  <div id="container"></div>
  <div :id="domId"></div>
</template>
<script>
import { onMounted, ref } from "@vue/runtime-core";
import Highcharts from "highcharts";

export default {
  props: ["domId", "linearRegression"],
  setup(props) {
    const chart = ref(null);

    onMounted(() => {
      let columnChart = {
        chart: {
          type: "pie",
          renderTo: props.domId
        },
        title: {
          text: " Actaul data set :Sales by Category",
        },
        subtitle: {
          text: ''},

        accessibility: {
          announceNewData: {
            enabled: true,
          },
          point: {
            valueSuffix: "%",
          },
        },

        plotOptions: {
          series: {
            dataLabels: {
              enabled: true,
              format: "{point.name}: {point.y:.1f}%",
            },
          },
        },

        tooltip: {
          headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
          pointFormat:
            '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>',
        },

        series: [
          {
            name: "",
            colorByPoint: true,
            data: props.linearRegression
            // data: [
            //   {
            //     name: "Laptop",
            //     y: 61.04,
            //     color: "#FF7448",
            //     drilldown: "Zone 1",
            //   },
            //   {
            //     name: "Car",
            //     y: 9.47,
            //     color: "#4E8F36",
            //     drilldown: "Zone 2",
            //   },
            //   {
            //     name: "Accessories",
            //     y: 9.32,
            //     color: "D5B736",
            //     drilldown: "Zone 3",
            //   },
              
            // ],
          },
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
