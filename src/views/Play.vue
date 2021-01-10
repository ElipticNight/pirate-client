<template>
  <div class="base-window">
    <div v-if="gameState === 'setup'" class="setup">
      <div class="left-sidebar">
      </div>
      <div class="centre">
        <GameGrid></GameGrid>
      </div>
      <div class="right-sidebar">
        <PointSquaresList :PointsAvailable="[{
          200: 25,
          1000: 10,
          3000: 3,
          5000: 1
        }]"></PointSquaresList>
      </div>
      <div class="bottom">
        <ActionSquaresList></ActionSquaresList>
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
import axios from "axios";
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
    this.channel = this.$route.params.channel;
    window.Echo.channel(this.channel).listen(".event", response => {
      console.log(response);
    });

    axios.get("http://127.0.0.1:8000/joinroom/" + this.channel).then(
      response => {
        console.log(response.data);
      },
      error => {
        console.log(error);
      }
    );
  },
  methods: {
    sendMessage: function() {
      axios.get("http://127.0.0.1:8000/message/" + this.channel).then(
        response => {
          console.log(response.data);
        },
        error => {
          console.log(error);
        }
      );
    }
  },
};
</script>
<style lang="scss" scoped>
.setup {
  display: grid;
  grid-template-columns: 2fr 10fr 2fr;
  grid-template-rows: 9fr 1fr;
  column-gap: 10vh;
  justify-items: center;
}
</style>
