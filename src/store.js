import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    listPic: {
      listPicItem: [],
      isLoading: false,
      error: ""
    }
  },
  mutations: {
    setPicSuccess(state, payload) {
      state.listPic.isLoading = false;
      state.listPic.listPicItem = payload;
    },
    setPicLoading(state) {
      state.listPic.isLoading = true;
    },
    setPicFails(state, payload) {
      state.listPic.isLoading = false;
      state.listPic.error = payload.e;
    }
  },
  actions: {
    async searchPicRequest({ commit }, payload) {
      try {
        commit("setPicLoading");

        const responce = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=8fad618fe12a6ec9b07ad6c2597f2e6f&language=ru&page=1&query=${
            payload.searchText
          }`
        );
        console.log(responce);
        commit("setPicSuccess", responce.data.results);
      } catch (e) {
        commit("setPicFails", { e });
      }
    }
  }
});
