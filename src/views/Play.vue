<template>
  <div class="base-window">
    <div v-if="gameState === 'setup'" class="setup">
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
import GameGrid from "../components/GameGrid.vue";

export default {
  components: { GameGrid },
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
<style lang="scss" scoped></style>
