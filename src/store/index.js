import { createStore } from 'vuex'
import axios from "axios";

export default createStore({
  state: {
    document: []
  },
  mutations: {
    setDocument(state, val){
      state.document = val;
    }
  },
  actions: {
    appelApi({ commit }, query = null){
      let url = "https://openlibrary.org/api/search.json";
      if (query) {
        url += `${query}`;
      }
      axios.get(url).then((res) => {
        commit("setDocument", res.data.docs)
      })
    } 
  },
  getters: {
  },
})
