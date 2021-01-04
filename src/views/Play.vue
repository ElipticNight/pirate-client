<template>
  <div>
    Play
  </div>
</template>
<script>
export default {
  name: "Play",
  mounted() {
    window.Echo.channel("channel").listen("hello", e => {
      this.responses.push(e);
    });
    window.Echo.channel("channel").listen("response", e => {
      this.responses.push(e);
    });
  }
};
</script>
<style lang="scss" scoped></style>
