import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./axios.config";

// FONT AWESOME CONFIG
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faUserSlash } from "@fortawesome/free-solid-svg-icons";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// AJOUT D' ICONE(S) A LA LIB
library.add(faBars);
library.add(faUser);
library.add(faCog);
library.add(faTimes);
library.add(faUserSlash);
library.add(faSave);
// LE COMPONENT <font-awesome icon="bars" /> est prêt dans toute l'application !

Vue.component("font-awesome-icon", FontAwesomeIcon);

// event bus ($ebus) : https://www.digitalocean.com/community/tutorials/vuejs-global-event-bus
Vue.prototype.$ebus = new Vue();

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
