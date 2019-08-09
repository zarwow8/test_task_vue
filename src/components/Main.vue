<template>
  <div class="container">
    <p>
      Простое SPA на Vue&Vuex состоящие из двух страниц .
      Первая страница с описание самого проекта. Вторая страница содержит форму для поиска фильмов по tMDB (
      <a
        href="https://www.themoviedb.org/documentation/api"
      >https://www.themoviedb.org/documentation/api)</a>. При удачном запросе, отобразится список постеров по искомому названию фильма.
    </p>
  </div>
</template>

<script>
export default {};
</script>


<style scoped>
p {
  padding: 10px;
  font-size: 18px;
  color: #000;
  text-align: left;
  line-height: 1.6;
}
</style>;
