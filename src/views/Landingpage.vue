<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="container-fluid border mt-4">
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
            <h4>Business growth and Continuity Prediction Portal</h4>
            <div>
              <div class="btn-group me-2">
                <input
                  type="file"
                  class="btn btn-sm btn-outline-secondary"
                  @change="imageSelected"
                />
              </div>
              <div class="mt-2 small">
                <a
                  href="/files/Template.csv"
                  class="text-decoration-none font-weight-bold"
                  download
                  >Download and view CSV template.</a
                >
                <br /><span
                  >You can use this as a template for creating your CSV
                  file.</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 mt-3">
        <div class="col-md-12 border">
          <BarChart domId="BarChart" :salesData="salesData" />
        </div>
      </div>
      <div class="col-md-6 mt-3">
        <div class="col-md-12 border">
          <Piechart domId="Piechart" :linearSeries="linearSeries" />
        </div>
      </div>
    </div>
    <div class="row">
      <div
        class="
          col-md-12
          d-flex
          justify-content-between
          flex-wrap flex-md-nowrap
          align-items-center
          pt-3
          mt-3
        "
      >
        <div class="muted">Business Growth Prediction</div>
        <el-button type="primary" plain @click="predictionAnalysis">
          Run Business Growth Analysis</el-button
        >
      </div>
      <div class="col-12 p-0 border-bottom"></div>
    </div>

    <div class="row mt-3">
      <div class="col-md-12">Linear Regression</div>
      <div class="col-md-6 mt-3">
        <Tables :prediction="prediction" />
      </div>

      <div class="col-md-6 mt-3">
        <div class="col-md-12 border">
          <Linechart domId="chart1" :culumArray="culumArray" />
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
import axios from "@/gateway/backendapi";
import Tables from "@/components/Tables.vue";
import Linechart from "@/components/Linechart.vue";
import RandomForest from "@/components/RandomForest.vue";
import { ref } from "@vue/reactivity";
import { ElMessage } from "element-plus";

// import Gradientboost from "@/components/Gradientboost.vue";
// import Arima from "@/components/Arima.vue";
// import Adaboost from "@/components/Adaboost";
// import axios from "axios";

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
    const salesData = ref({});
    const linearSeries = ref({});
    const prediction = ref([]);
    const allPredict = ref([]);
    const image = ref("");

    const culumArray = ref([]);

    const predictionAnalysis = async () => {
      try {
        let data = await axios.get("sales-prediction");
        prediction.value = data.data.data;
        console.log(prediction.value, "rodiat");
      } catch (error) {
        console.log(error);
      }
      axios
        .get("/sales-prediction-chart")
        .then((res) => {
          culumArray.value = res.data.data;
          console.log(res, "kikky");
        })
        .catch((error) => {
          console.log(error);
        });
    };

    const imageSelected = async (e) => {
      image.value = e.target.files[0];
      const formData = new FormData();
      formData.append("file", image.value);
      try {
        let { data } = await axios.post("/file-upload", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });

        ElMessage({
          message: data.message,
          type: "success",
          duration: 5000,
        });

        console.log(data.message, "✔✔✔");
      } catch (error) {
        let resData = error.response.data.message;
        ElMessage({
          message: resData,
          type: "error",
        });
        console.log(resData, "✨😃");
      }

      axios
        .get("/sales-by-year")
        .then((res) => {
          salesData.value = res.data.data;
          console.log(res.data.data);
        })
        .catch((error) => {
          console.log(error);
        });

      axios
        .get("sales-by-product")
        .then((res) => {
          linearSeries.value = res.data.data;
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    return {
      imageSelected,
      linearSeries,
      salesData,
      prediction,
      image,
      allPredict,
      predictionAnalysis,
      culumArray,
      // imageSelected
      // imageUpload
    };
  },
};
</script>