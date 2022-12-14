<template>
  <div class="container-fluid">
    <div class="row border">
      <div class="col-12 d-flex justify-content-center pt-3 text-bold">
        Projected Sales Model
      </div>
      <div class="col-md-12 px-0">
        <table class="table table-bordered mt-2">
          <thead>
            <tr class="bg-light">
              <th scope="col">Month</th>
              <th scope="col">Projected</th>
              
            </tr>
          </thead>
          <tbody>
            <tr v-for="(prediction ,index) in allPrediction" :key="index">
              <!-- <td >{{prediction.month}}</td> -->
              <td >{{prediction}}</td>

              <!-- <td>{{prediction.project}}</td> -->
              <td>{{prediction}}</td>

            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { onUpdated, ref } from "@vue/runtime-core";
export default {
  props: ["prediction"],
  setup(props) {
    const allPrediction = ref([]);

    onUpdated(() => {
      allPrediction.value =props.prediction
      console.log(props.prediction,allPrediction, "ygjhgjhgj");
    });

    return {
      allPrediction,
    };
  },
};
</script>

<style scoped>
</style>