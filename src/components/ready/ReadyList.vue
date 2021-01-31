<template>
  <div class="ready-container">
    <div class="player-list" :style="cssVars">
      <Player v-for="(status, name) in players" :key="name" :reference="name"></Player>
    </div>
    <div class="button-wrapper">
      <button @click="unready()" class="unready-button">Unready!</button>
      <button v-if="isHost" @click="start()" class="start-button" :disabled="isDisabled" v-bind:class="{ disabled: isDisabled }">Start!</button>
    </div>
  </div>
</template>

<script>
import Player from "@/components/ready/Player.vue";

export default {
  components: { Player },
  computed: {
    players() {
      return this.$store.state.roomInformation.players;
    },
    isHost() {
      return this.$store.state.settings.isHost;
    },
    isDisabled() {
      return (!this.$store.state.roomInformation.allPlayersReady);
    },
    cssVars() {
      let totalPlayers = this.$store.state.roomInformation.totalPlayers;
      let rows = 0;
      let columns = 0;
      let rowHeight = "";
      if(totalPlayers <= 12) {
        rows = 2;
        columns = 6;
        rowHeight = "30vh";
      } else if(totalPlayers <= 30) {
        rows = 3;
        columns = 10;
        rowHeight = "19vh";
      } else{
        rows = 4;
        columns = 13;
        rowHeight = "13vh";
      }
      return {
        '--grid-rows': rows,
        '--grid-columns': columns,
        '--grid-rowHeight': rowHeight
      }
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
      this.$store.commit('changeGameState', 'setup');
    },
    start() {
      const socket = this.$store.state.play.socket;
      socket.send(JSON.stringify({
        'type': 'start',
        'roomid': this.$route.params.room,
        'name': this.$route.params.name
      }));
    }
  }
}
</script>

<style lang="scss" scoped>
.ready-container{
  display: grid;
  grid-template-rows: 9fr 1fr;
  height: 75vh;
  width: 75vw;
  padding: 3vh;
  border-radius: 50px;
  border: solid 2px blue;
  .player-list{
    width: 100%;
    display: grid;
    row-gap: 3vh;
    grid-template-columns: repeat(var(--grid-columns), 1fr);
    grid-template-rows: repeat(var(--grid-rows), var(--grid-rowHeight));
    justify-items: center;
    align-items: center;
  }
  .button-wrapper {
    display: flex;
    justify-content: center;
    align-items: flex-end;
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
    .start-button {
      height: 7vh;
      width: 70vh;
      margin-left: 5vh;
      background-color: rgb(2, 71, 2);
      color: white;
      border: none;
      border-radius: 20px;
      &:hover{
        box-shadow: 0px 0px 1px 1px rgb(2, 71, 2);
      }
    }
    .disabled {
      // border: solid 1px red;
      background-color: rgb(59, 75, 59);
        &:hover{
        box-shadow: 0px 0px 1px 1px red;
      }
    }
  }
}
</style>