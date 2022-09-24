import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    domain: "https://test-api.storexweb.com/api",
    localization: "en",
    showMenu: false
  },
  mutations: {
    MenuToggle(state){
      state.showMenu = true
    }
  }

});
