import vue from "vue";
import vuex from "vuex"

import node from "./modules/node";
vue.use(vuex);
export const store = new vuex.Store({
  modules : {
    node
  }
});
