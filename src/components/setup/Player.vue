<template>
    <div class="player" v-bind:class="{ ready: isReady }">{{ reference }}</div>
</template>

<script>
export default {
  props: ["reference"],
  computed: {
    isReady() {
      return (this.$store.state.roomInformation.players[this.reference] === "ready");
    }
  }
}
</script>

<style lang="scss" scoped>
.player {
  height: 20vh;
  width: 15vh;
  background-color: brown;
  border-radius: 15px;
}
.ready {
  background-color: green;
}
</style>