<template>
    <div id="container">
        <div :id="domId"></div>
    </div>
</template>

<script>
import { onMounted, ref } from '@vue/runtime-core';
import Highcharts from 'highcharts'


export default {    
    props:['domId'],


    setup(props) {

        const chart = ref(null)

        onMounted(() => {
            let columnChart = {
  chart: {
    type: 'column',
    renderTo: props.domId
  },
  title: {
    text: 'Projected Sales Versus Actual'
  },
  subtitle: {
    text: 'Source: Sales.com'
  },
  xAxis: {
    categories: [
      '2000',
      '2001',
      '2002',
      '2003',
      '2004',
      '2005',
      '2006',
      '2007',
      '2008',
      '2009',
      '2010',
      '2011'
    ],
    crosshair: true
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Sales ($)'
    }
  },
  tooltip: {
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
      '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
    footerFormat: '</table>',
    shared: true,
    useHTML: true
  },
  plotOptions: {
    column: {
      pointPadding: 0.1,
      borderWidth: 0
    }
  },
  series: [
    {
            name: "Projected (%)",
            color: '#183133',
            data: [40, 10, 106.4, 80,20],
          },

          {
            name: "Actual  (%)",
            color: '#00A0A8',
            data: [30, 40, 50, 60, 70],
          },
 
  ]

}
chart.value = new Highcharts.chart(columnChart)
})

        return{
chart
        }
    }
}
</script>
<style scoped>

</style>