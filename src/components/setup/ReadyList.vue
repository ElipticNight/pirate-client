<template>
  <div class="base-window">
    <div class="ready-container">
      <Player v-for="(status, name) in players" :key="name" :reference="name"></Player>
    </div>
  </div>
</template>

<script>
import Player from "@/components/setup/Player.vue";

export default {
  components: { Player },
  computed: {
    players() {
      return this.$store.state.roomInformation.players;
    }
  }
}
</script>

<style lang="scss">
.ready-container{
  height: 75vh;
  width: 75vw;
  padding: 3vh;
  border-radius: 50px;
  border: solid 2px blue;
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  grid-template-columns: repeat(5, 1fr);
  row-gap: 3vh;
  justify-items: center;
  align-items: center;
}
</style>