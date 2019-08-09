<template>
  <div>
    <appSearchPic />
    <appListPic />
  </div>
</template>

<script>
import ListPic from "../components/ListPic";
import SearchPic from "../components/SearchPic";
export default {
  components: {
    appListPic: ListPic,
    appSearchPic: SearchPic
  }
};
</script>

<style scoped>
</style>
