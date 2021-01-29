<template>
    <div class="player-wrapper" v-bind:class="{ ready: isReady }">
      <div class="player-main">
        <div class="image"></div>
        <div class="name">{{ reference }}</div>
      </div>
    </div>
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
.player-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90%;
  width: 70%;
  background-color: brown;
  border-radius: 15px;
  .player-main {
    display: grid;
    grid-template-rows: 17fr 3fr;
    height: 85%;
    width: 80%;
    .image {
      background-color: lightblue;
    }
    .name {
      display: flex;
      justify-content: center;
      align-items: center;
      color: black;
    }
  }
}
.ready {
  background-color: green;
}
</style>