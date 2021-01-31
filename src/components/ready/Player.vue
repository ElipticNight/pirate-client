<template>
    <div class="player-wrapper" v-bind:class="{ ready: isReady }">
      <div class="main-wrapper">
        <div class="player-main">
          <div class="spacer"></div>
          <div class="image">
            <img :src="require('../../assets/avatars/' + avatar + '.svg')" />
          </div>
          <div class="name">{{ reference }}</div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: ["reference"],
  computed: {
    isReady() {
      return (this.$store.state.roomInformation.players[this.reference] === "ready");
    },
    avatar: function() {
      return "002-girl"
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
  padding: 0px;
  .main-wrapper {
    height: 110%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .player-main {
      display: grid;
      grid-template-rows: 1fr 17fr 2fr;
      height: 85%;
      width: 80%;
      .image {
        background-color: lightblue;
      }
      .name {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        color: black;
      }
    }
  }
}
.ready {
  background-color: green;
}
</style>