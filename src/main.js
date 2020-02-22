// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import BootstrapVue from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import {store} from "./store/store";
import jsPDF from "jspdf"

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(jsPDF);
new Vue({
  el: '#app',
  store,
  components: { App },
  template: '<App/>'
})
