import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import {store} from "./store/store";

Vue.config.productionTip = false;

import Echo from "laravel-echo";

window.Pusher = require("pusher-js");

window.Echo = new Echo({
  broadcaster: "pusher",
  key: process.env.VUE_APP_WEBSOCKET_KEY,
  wsHost: process.env.VUE_APP_WEBSOCKET_SERVER,
  wsPort: process.env.VUE_APP_WEBSOCKET_PORT,
  forceTLS: false,
  disableStats: true
});

new Vue({
  store: store,
  router,
  render: h => h(App)
}).$mount("#app");
