<template>
  <div id="container"></div>
  <div :id="domId"></div>
</template>
<script>
import { onUpdated, ref } from "@vue/runtime-core";
import Highcharts from "highcharts";

export default {
  props: ["domId", "linearSeries"],
  setup(props) {
    const chart = ref(null);

    onUpdated(() => {
      const productCategory = props.linearSeries.map((i) => {
        return {
          name: i.name,
          y: i.sales,
        };
      });
      console.log(productCategory);
      let pieChart = {
        chart: {
          type: "pie",
          renderTo: props.domId,
        },
        title: {
          text: " Actual data set :Sales by Category",
        },
        subtitle: {
          text: "",
        },

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
            data: productCategory,

            // [

            //   {
            //     name: props.linearSeries[0].name,
            //     y:  productCategory
            //   }
            // ]
          },
        ],
      };
      chart.value = new Highcharts.chart(pieChart);

      console.log(props.linearSeries);
    });

    return {
      chart,
    };
  },
};
</script>
