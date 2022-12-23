import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "bootstrap/dist/css/bootstrap.min.css"
import Highcharts from 'highcharts';
import VueHighcharts from 'vue-highcharts';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

createApp(App).use(store) .use(VueHighcharts, { Highcharts }).use(router).use(ElementPlus).mount('#app')
