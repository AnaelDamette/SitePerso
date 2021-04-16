import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import store from "./store";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import { LayoutPlugin } from "bootstrap-vue";
import { ModalPlugin } from "bootstrap-vue";
import { CardPlugin } from "bootstrap-vue";
import { VBScrollspyPlugin } from "bootstrap-vue";
import { DropdownPlugin, TablePlugin } from "bootstrap-vue";
import './assets/custom.scss'
Vue.config.productionTip = false;

Vue.use(LayoutPlugin);
Vue.use(ModalPlugin);
Vue.use(CardPlugin);
Vue.use(VBScrollspyPlugin);
Vue.use(DropdownPlugin);
Vue.use(TablePlugin);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
