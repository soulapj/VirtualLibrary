import { createStore } from 'vuex'
import axios from "axios";

export default createStore({
  state: {
    document: []
  },
  mutations: {

  },
  actions: {
    modifierLivre(context, livre){
let livreModif = [...context.state.   , livre];

    }
    setDocument(state, val){
      state.document = val;
    }
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
