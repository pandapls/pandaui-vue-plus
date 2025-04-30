<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <h1 class="title">pandaui vue plus 组件展示</h1>
  <nav class="nav">
    <RouterLink to="/">Button</RouterLink>
    <RouterLink to="/card">Card</RouterLink>
    <RouterLink to="/dialog">Dialog</RouterLink>
    <RouterLink to="/pagination">Pagination</RouterLink>

  </nav>

  <div class="displayArea">
    <RouterView />
  </div>
</template>

<style scoped lang="scss">
h1.title {
  text-align: center;
  font-weight: 200;
}

p {
  text-align: center;
  font-weight: 200;
  margin-top: 1em;
  font-size: 18px;
}

.nav {
  display: flex;
  height: 50px;
  justify-content: space-evenly;
  align-items: center;
}

.displayArea {
  margin-top: 2em;
  display: flex;
  justify-content: center;
}
</style>
