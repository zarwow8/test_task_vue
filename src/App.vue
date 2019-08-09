<template>
  <div>
    <appSearchPic />
  </div>
</template>

<script>
import SearchPic from "./components/SearchPic";
export default {
  components: { appSearchPic: SearchPic }
};
</script>



<style>
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;

  color: #bec6cf;
}
.container {
  width: 1060px;
  margin: 0 auto;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
