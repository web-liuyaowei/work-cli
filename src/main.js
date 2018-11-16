import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";


// 注册全局过滤器
import filters from "./utils/filters"
Object.keys(filters).forEach(key => {
  Vue.components(key, filters[key]);
})

// 注册全局组件
import components from "./components/index"
Object.keys(components).forEach(key => {
  Vue.components(key, components[key]);
})


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
