<template>
  <div class="container">
    <nav>
      <ul>
        <li>
          <router-link to="/">Описание проекта</router-link>
        </li>
        <li>
          <router-link to="/films">Поиск фильмов</router-link>
        </li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
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
* {
  box-sizing: border-box;
}

ul,
li {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
img {
  border: 0;
}
a {
  text-decoration: none;
}
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
  padding: 0;
}
.container {
  width: 1060px;
  margin: 0 auto;
}
#nav a.router-link-exact-active {
  color: #000000;
}
li {
  display: inline-block;
  margin-right: 10px;
}
nav {
  margin: 30px 0;
}
</style>
