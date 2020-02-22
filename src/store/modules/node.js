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
/*
                //1
                ctx.beginPath();
                ctx.arc(350, 200, 30, 0, 2 * Math.PI);
                ctx.stroke();


                //2
                ctx.beginPath();
                ctx.arc(550, 100, 30, 0, 2 * Math.PI);
                ctx.stroke();


                //3
                ctx.beginPath();
                ctx.arc(750, 200, 30, 0, 2 * Math.PI);
                ctx.stroke();

                //4
                ctx.beginPath();
                ctx.arc(750, 300, 30, 0, 2 * Math.PI);
                ctx.stroke();

                //5
                ctx.beginPath();
                ctx.arc(550, 400, 30, 0, 2 * Math.PI);
                ctx.stroke();

                //6
                ctx.beginPath();
                ctx.arc(350, 300, 30, 0, 2 * Math.PI);
                ctx.stroke();
* */
