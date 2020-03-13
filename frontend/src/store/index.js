import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    modal: false,
    showButton: false,
    countedPoints: [],
    players: [],
    formation: {
      Goalkeepers: [
        {
          ID: null
        }
      ],
      Defenders: [
        {
          ID: null
        },
        {
          ID: null
        },
        { ID: null },
        { ID: null }
      ],
      Midfielders: [
        {
          ID: null

        },
        {
          ID: null
        },
        {
          ID: null
        },
        {
          ID: null
        }
      ],
      Forwards: [
        {
          ID: null
        },
        {
          ID: null
        }
      ]
    },
  },
  mutations: {},
  actions: {},
  modules: {}
});
