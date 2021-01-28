<template>
  <div class="base-window">
    <div class="base-container">
      <div class="base-title">
        <h1>Create Game</h1>
      </div>
      <div class="base-content">
        <div class="content-title">
          <h3>settings:</h3>
        </div>
        <div class="content-body">
          <label class="label-container">
            <ToggleButton class="toggle" v-model="one" />
            Force Random
          </label>
          <label class="label-container">
            <ToggleButton class="toggle" v-model="two" />
            Disable Pause
          </label>
          <label class="label-container">
            <ToggleButton class="toggle" v-model="three" />
            Disable Avatars
          </label>
          <label class="label-container">
            <ToggleButton class="toggle" v-model="four" />
            Disable Chat
          </label>
        </div>
      </div>
      <div class="base-submit">
        <button class="create-button" @click="creategame()">Create Game</button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "CreateGame",
  data: function() {
    return {
      one: false,
      two: false,
      three: false,
      four: false
    }
  },
  methods: {
    creategame() {
      axios.post("http://127.0.0.1:3000/createroom", {
        one: this.one,
        two: this.two,
        three: this.three,
        four: this.four
      }).then(
        response => {
          this.room = response.data;
          this.play();
        },
        error => {
          console.log(error);
        }
      );
    },
    play() {
      this.$router.push("/play/" + this.room + '/name');
    }
  }
};
</script>
<style lang="scss" scoped>
.content-title {
  flex: 1;
}
.content-body {
  flex: 4;
  margin: 5vh 5vh;
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  justify-content: left;
  align-items: center;
  text-align: left;
  .label-container {
    color: darkblue;
    font-size: 2vh;
    user-select: none;
    .toggle {
      padding-right: 2vh;
    }
  }
}
.create-button {
  height: 75px;
  background-color: darkblue;
  color: white;
  border: none;
  border-radius: 20px;
}
</style>
