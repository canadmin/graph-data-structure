const state = {
  data : [],
  activeNodes : [],
  nodeW : []
};

const getters = {
  getNodes(state){
    return state.data;
  },
  getActiveNodes(state){
    return state.activeNodes;
  },
  getW(state){
    return state.nodeW;
  }
};

const mutations = {
  setNewGraphData(state,data){
    console.log("Req Data",data);
    state.data = data;
  },
  newActiveNodes(state,activeNodes){
    state.activeNodes = activeNodes;
    console.log("active nodes",activeNodes)
  },
  changeNewW(state,newW){
    state.nodeW = newW;
  }
};

const actions = {
    reqNode({commit},data){
      commit('setNewGraphData',data);
    },
    reqActiveNode({commit},activeNodes){
      commit('newActiveNodes',activeNodes);
    },
    setW({commit},newW){
      commit('changeNewW',newW);
    }
};

export default {
  state,
  getters,
  mutations,
  actions
};
