<template>
  <div class="container">
    <div class="row">
      <!-- <div class="col-md-3 border">
      <sidemenu/>
    </div> -->
      <div class="col-md-12 border">
        <div class="container-fluid">
          <div
            class="
              d-flex
              justify-content-between
              flex-wrap flex-md-nowrap
              align-items-center
              pt-3
              pb-2
              mb-3
            "
          >
            <div class="muted">
              Business growth and Continuity Prediction Portal
            </div>
            <div class="btn-toolbar mb-2 mb-md-0">
              <div class="btn-group me-2">
                <input type="file" class="btn btn-sm btn-outline-secondary" />
                <button type="button" class="btn btn-sm btn-outline-secondary">
                  Upload
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 mt-3">
        <div class="col-md-12 border">
          <BarChart domId="BarChart" />
        </div>
      </div>
      <div class="col-md-6 mt-3">
        <div class="col-md-12 border">
          <Piechart domId="Piechart" />
        </div>
      </div>
    </div>
    <div
      class="
        d-flex
        justify-content-between
        flex-wrap flex-md-nowrap
        align-items-center
        pt-3
        pb-0
        mb-3
      "
    >
      <div class="muted">Business Growth Prediction</div>
      <div class="btn-group me-2">
        <button type="button" class="btn btn-sm btn-outline-primary">
          Run Business Growth Analysis
        </button>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col-md-6 mt-4">
        <div class="col-md-12 mt-4">
          <Tables />
        </div>

        <!-- 
        <div class="col-md-12  ">
          <div class="text-bold mt-3 px-2  ">Linear Regression </div>

         
        </div> -->
      </div>

      <div class="col-md-6 mt-3">
        <div class="col-md-12 border">
          <Linechart domId="barchart" />
        </div>
      </div>
    </div>

    <div class="row"> 
      <div class="col-md-6 mt-3">
        <div class="col-md-12">
          <div class="text-bold mt-3 px-2 fs-1 text-muted">Random Forest</div>

          <div class="col-md-12">
            <Tables />
          </div>
        </div>
      </div>

      <div class="col-md-6 mt-5">
        <div class="col-md-12 border">
          <RandomForest domId="chart" />
        </div>
      </div>
    </div>

    <!-- <div class="row">
      <div class="col-md-6 mt-3">
        <div class="col-md-12">
          <div class="text-bold mt-3 px-2 fs-1 text-muted">
            Gradient Boosting
          </div>

          <div class="col-md-12">
            <Tables />
          </div>
        </div>
      </div>

      <div class="col-md-6 mt-3">
        <div class="col-md-12 border">
          <Gradientboost domId="boost" />
        </div>
      </div>
    </div> -->

    <!-- <div class="row">
      <div class="col-md-6 mt-3">
        <div class="col-md-12">
          <div class="text-bold mt-3 px-2 fs-1 text-muted">Arima</div>

          <div class="col-md-12">
            <Tables />
          </div>
        </div>
      </div>

      <div class="col-md-6 mt-3">
        <div class="col-md-12 border">
          <Arima domId="arima" />
        </div>
      </div>
    </div> -->

    <!-- <div class="row">
      <div class="col-md-6 mt-3">
        <div class="col-md-12">
          <div class="text-bold mt-3 px-2 fs-1 text-muted">Ada Boosting</div>

          <div class="col-md-12">
            <Tables />
          </div>
        </div>
      </div>

      <div class="col-md-6 mt-3">
        <div class="col-md-12 border">
          <Adaboost domId="Adaboost" />
        </div>
      </div>
    </div> -->
  </div>
</template>
<script>
// import sidemenu from '../components/sidemenu.vue'
import BarChart from "@/components/BarChart.vue";
import Piechart from "@/components/Piechart.vue";
import Tables from "@/components/Tables.vue";
import Linechart from "@/components/Linechart.vue";
import RandomForest from "@/components/RandomForest.vue";
// import Gradientboost from "@/components/Gradientboost.vue";
// import Arima from "@/components/Arima.vue";
// import Adaboost from "@/components/Adaboost";

export default {
  components: {
    // sidemenu
    BarChart,
    Piechart,
    Tables,
    Linechart,
    RandomForest,
    // Gradientboost,
    // Arima,
    // Adaboost,
  },
  setup() {
    
  },
};
</script>