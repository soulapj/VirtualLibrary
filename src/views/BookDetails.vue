<template>
    <div class = "livre">
    <img src="" alt="">
    <h2>Titre</h2>
    <h3>Auteur</h3>
    <h3>ISBN</h3>
    <h3>Date de publication</h3>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.livre {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;
  margin: 50px auto;
}
.livre img {
  height: 400px;
}
</style>