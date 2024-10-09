import { createStore } from 'vuex'

export default createStore({
  state: {
    listeBook: []
  },
  getters: {
  },
  mutations: {
    removeBook(state, id){
      state.listeBook = state.listeBook.filter((book) => id !== book.id)
    }
  },
  actions: {
  },
  modules: {
  }
})
