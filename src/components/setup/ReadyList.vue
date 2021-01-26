<template>
  <div class="base-window">
    <div class="ready-container">
      <div class="player-list">
        <Player v-for="(status, name) in players" :key="name" :reference="name"></Player>
      </div>
      <button @click="unready()" class="unready-button">Unready!</button>
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
  },
  methods: {
    unready() {
      const socket = this.$store.state.play.socket;
      socket.send(JSON.stringify({
        'type': 'unready',
        'roomid': this.$route.params.room,
        'name': this.$route.params.name
      }));
      this.$store.state.roomInformation.gameState = "setup";
    }
  }
}
</script>

<style lang="scss">
.ready-container{
  .player-list{
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
  .unready-button {
    height: 7vh;
    width: 70vh;
    background-color: rgb(2, 71, 2);
    color: white;
    border: none;
    border-radius: 20px;
    &:hover{
      box-shadow: 0px 0px 1px 1px rgb(2, 71, 2);
    }
  }
}
</style>