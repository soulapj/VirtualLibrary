import { createStore } from 'vuex'
import axios from "axios";

export default createStore({
  state: {
    listeBook: []
    addBook: {},
    document: []
  },
  mutations: {
    removeBook(state, id){
      state.listeBook = state.listeBook.filter((book) => id !== book.id)
    }
    setDocument(state, val){
      state.document = val;
    }

  },
  actions: {
    modifierLivre(context, livre){
let livreModif = [...context.state.   , livre];
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
