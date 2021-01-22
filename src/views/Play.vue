<template>
  <div class="base-window">
    <div v-if="gameState === 'setup'" class="setup">
      <div class="left-sidebar">
        <ActionSquaresList></ActionSquaresList>
      </div>
      <div class="centre">
        <GameGrid></GameGrid>
      </div>
      <div class="right-sidebar">
        <PointSquaresList></PointSquaresList>
      </div>
      <div class="bottom">
        <button @click="randomise()" class="randomise-button">Randomise</button>
        <button @click="ready()" class="ready-button">Ready!</button>
      </div>
    </div>
    <div v-if="gameState === 'play'" class="play">
      <GameGrid></GameGrid>
    </div>
    <div v-if="gameState === 'end'" class="end">
      <h1>Game Over!</h1>
    </div>
  </div>
</template>
<script>
//import axios from "axios";
import GameGrid from "@/components/GameGrid.vue";
import ActionSquaresList from "@/components/setup/ActionSquaresList.vue";
import PointSquaresList from "@/components/setup/PointSquaresList.vue";

export default {
  components: { GameGrid, ActionSquaresList, PointSquaresList },
  name: "Play",
  data: function() {
    return {
      gameState: "setup"
    };
  },
  mounted() {
    this.$store.state.play.socket = new WebSocket("ws://localhost:3000");
    const socket = this.$store.state.play.socket;
    const channel = this.$route.params.channel;

    socket.addEventListener('open', function () {
      console.log('connected to ws server');
    })

    socket.addEventListener('message', function (event) {
      console.log('message recieved from server:    ', event.data);
    })

    socket.onopen = function() {
      socket.send(JSON.stringify({
        'target': 'joinroom',
        'roomid': channel,
        'name': 'temp name'
      }));
    }
  },
  methods: {
    sendMessage: function() {
      //
    },
    randomise: function() {
      this.$store.commit('randomiseGameGridValues', null);
    },
    ready: function() {
      //
    }
  },
};
</script>
<style lang="scss" scoped>
.setup {
  display: grid;
  grid-template-columns: 2fr 10fr 2fr;
  grid-template-rows: 8fr 2fr;
  column-gap: 10vh;
  justify-items: center;
  .bottom{
    grid-column-start: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .ready-button {
      height: 7vh;
      width: 50vh;
      background-color: rgb(2, 71, 2);
      color: white;
      border: none;
      border-radius: 20px;
      &:hover{
        box-shadow: 0px 0px 1px 1px rgb(2, 71, 2);
      }
    }
    .randomise-button {
      margin: 1vh;
      height: 5vh;
      width: 25vh;
      background-color: darkblue;
      color: white;
      border: none;
      border-radius: 20px;
    }
  }
}
</style>
