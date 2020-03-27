<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  align-content: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 70%;
  margin: auto;
  vertical-align: middle;
}
.divider{
  height: 50px;
}

.finded{
  text-align: center;
  margin: auto;
}
</style>
