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
        <div class="row-one">
          <button @click="randomise()" class="button">Randomise All</button>
          <button @click="randomiseRemaining()" class="button">Randomise Remaining</button>
          <button @click="clear()" class="button">Clear</button>
        </div>
        <div class="row-two">
          <button @click="ready()" class="ready-button">Ready!</button>
        </div>
      </div>
    </div>
    <div v-if="gameState === 'ready'" class="ready">
      <ReadyList></ReadyList>
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
import GameGrid from "@/components/GameGrid.vue";
import ActionSquaresList from "@/components/setup/ActionSquaresList.vue";
import PointSquaresList from "@/components/setup/PointSquaresList.vue";
import ReadyList from "@/components/setup/ReadyList.vue";

export default {
  components: { GameGrid, ActionSquaresList, PointSquaresList, ReadyList },
  name: "Play",
  computed: {
    gameState() {
      return this.$store.state.roomInformation.gameState;
    }
  },
  mounted() {
    this.$store.state.play.socket = new WebSocket("ws://localhost:3000");
    const socket = this.$store.state.play.socket;
    const room = this.$route.params.room;
    const name = this.$route.params.name;
    const self = this;

    socket.addEventListener('open', function () {
      console.log('connected to ws server');
    })

    socket.addEventListener('message', function (event) {
      const message = JSON.parse(event.data);
      console.log(message);

      if(message.type === "setup") {
        self.$store.commit('setSettingsAndInitialRoomInformation', message);
      } else if(message.type === "client joined") {
        self.$store.commit('addNewPlayer', message.clientName);
        self.$store.commit('notReadyToStartGame');
      } else if(message.type === "host request") {
        if(message.success === true) {
          self.$store.commit('setHost');
        }
      } else if(message.type === "client left") {
        self.$store.commit('removePlayer', message.clientName);
      } else if(message.type === "client ready") {
        self.$store.commit('playerReady', message.clientName);
      } else if(message.type === "client unready") {
        self.$store.commit('playerUnready', message.clientName);
        self.$store.commit('notReadyToStartGame');
      } else if(message.type === "all clients ready") {
        self.$store.commit('readyToStartGame');
      } else if(message.type === "start game") {
        self.$store.commit('changeGameState', 'play');
      }
    })

    socket.onopen = function() {
      socket.send(JSON.stringify({
        'type': 'joinroom',
        'roomid': room,
        'name': name
      }));
      socket.send(JSON.stringify({
        'type': 'request host',
        'roomid': room,
        'name': name
      }));
    }
    this.$store.commit('default');
    this.$store.commit('setDefaultBasePointsActions', 7);
    this.$store.commit('setAvailablePointsActionsToBase');
    this.$store.commit('clearGameGridValues');
  },
  methods: {
    randomise: function() {
      this.clear();
      this.randomiseRemaining();
    },
    randomiseRemaining: function() {
      this.$store.commit('randomiseRemainingGameGridValues', null);
    },
    clear: function() {
      this.$store.commit('clearGameGridValues');
      this.$store.commit('setAvailablePointsActionsToBase');
    },
    ready: function() {
      if(this.$store.state.setup.totalAvailablePointsActions !== 0) {
        //
      } else {
        const socket = this.$store.state.play.socket;
        socket.send(JSON.stringify({
          'type': 'ready',
          'roomid': this.$route.params.room,
          'name': this.$route.params.name
        }));
        this.$store.commit('changeGameState', 'ready');
      }
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
    .row-one {
      .button {
        margin: 2vh;
        height: 5vh;
        width: 20vh;
        background-color: darkblue;
        color: white;
        border: none;
        border-radius: 20px;
        &:hover{
          background-color: blue;
        }
      }
    }
    .row-two {
      .ready-button {
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
  }
}
</style>
