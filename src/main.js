import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
// import ApexCharts from 'apexcharts'
// import VueApexCharts from "vue3-apexcharts";

// app.use(VueApexCharts);
const app = createApp(App).use(router)
app.use(BootstrapVue3)

app.mount('#app')

