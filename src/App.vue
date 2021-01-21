<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
   watch: {
    '$route' (to, from) {
      console.log(to, from);
      this.$store.state.play.socket.close();
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: rgb(27, 73, 88);
  color: #2c3e50;
}
body {
  margin: 0px;
}
</style>
