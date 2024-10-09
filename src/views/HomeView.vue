<template>
  <div class="home">
    <table>
      <tr>
        <th>Title</th>
        <th>Author</th>
        <th>ISBN</th>
        <th>Actions</th>
      </tr>
      <tr>
        <td>Titre du livre</td>
        <td>Auteur du livre</td>
        <td>ISBN du livre</td>
        <td>
          <button>Get Info</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  components: {},
  methods: {
    getBookInfo(book) {
      this.$store.dispatch('getInfo', book.id);
    },
    getBookList() {
      this.$store.dispatch('getBooks');
    },
  },
  computed: {
    books() {
      return this.$store.state.books;
    },
  },
  mounted() {
    this.$store.dispatch('appelApi');
  },
};
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
table {
  border: 2px solid black;
}
th {
  border: 2px solid black;
}
td {
  border: 2px solid black;
}
</style>
