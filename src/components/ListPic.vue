<template>
  <div class="container">
    <h2 v-if="isLoading">Загрузка</h2>
    <h3 v-if="error">{{error}}</h3>
    <ul v-else>
      <li :key="item.id" v-for="item in listPicItem">
        <img :src="`https://image.tmdb.org/t/p/w185_and_h278_bestv2${item.poster_path}`" />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: mapState({
    isLoading: state => state.listPic.isLoading,
    listPicItem: state => state.listPic.listPicItem,
    error: state => state.listPic.error
  })
};
</script>

<style scoped>
ul {
  padding-top: 50px;
  display: flex;
  flex-wrap: wrap;
}
li {
  margin-right: 10px;
}
</style>
