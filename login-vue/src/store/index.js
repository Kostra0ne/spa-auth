import Vue from "vue";
import Vuex from "vuex";
import user from "./user";
// import product from "./product";
// READ THE DOC !!!
// https://vuex.vuejs.org/fr/api/
// https://vuex.vuejs.org/fr/api/#modules
// TUTO UTILE ICI =>
// https://www.youtube.com/watch?v=2CSr2vBApSI
// https://www.youtube.com/watch?v=iw1eajzWQAM

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    // product,
    user
  }
});
