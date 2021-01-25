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
            <input type="checkbox" v-model="one"/>
            One
          </label>
            <label class="label-container">
            <input type="checkbox" v-model="two"/>
            Two
          </label>
            <label class="label-container">
            <input type="checkbox" v-model="three"/>
            Three
          </label>
            <label class="label-container">
            <input type="checkbox" v-model="four"/>
            Four
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
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: left;
  .label-container {
    color: darkblue;
    padding: 10px 20px;
    border-radius: 20px;
    &:hover {
      background-color: #2a4a6d;
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
