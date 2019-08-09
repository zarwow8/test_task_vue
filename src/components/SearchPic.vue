<template>
  <div class="container">
    <input
      @keyup.enter="sendSearchText"
      v-model.lazy.trim="searchText"
      type="text"
      placeholder="Ввод"
    />
    <button @click="sendSearchText">Найти!</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchText: ""
    };
  },
  methods: {
    sendSearchText() {
      const searchText = this.searchText;

      this.$store.dispatch("searchPicRequest", { searchText });
    }
  }
};
</script>
<style scoped>
input {
  margin-top: 50px;
  width: 300px;
  padding: 10px;
  border-radius: 5px;
  margin-left: 10px;
  transition: border-radius 0.2s;
  outline: none;
}
input:focus {
  border-radius: 10px;
}
button {
  color: rgb(130, 105, 199);
  padding: 5px;
  border: 2px solid rgb(118, 160, 180);
  border-radius: 5px;
  margin-left: 10px;
  cursor: pointer;
  outline: none;
  background-color: #fff;
}
</style>

