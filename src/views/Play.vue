<template>
  <div class="window">
    <h1>{{ $route.params.channel }}</h1>
  </div>
</template>
<script>
export default {
  name: "Play",
  mounted() {
    window.Echo.channel(this.$route.params.channel).listen("hello", e => {
      this.responses.push(e);
    });
    window.Echo.channel(this.$route.params.channel).listen("response", e => {
      console.log(e);
      this.responses.push(e);
    });
  }
};
</script>
<style lang="scss" scoped>
.window {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>
