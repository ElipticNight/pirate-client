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
          <checkbox label="One"></checkbox>
          <checkbox label="Two"></checkbox>
          <checkbox label="Three"></checkbox>
          <checkbox label="Four"></checkbox>
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
import Checkbox from "../components/Checkbox.vue";

export default {
  components: { Checkbox },
  name: "CreateGame",

  methods: {
    creategame() {
      axios.get("http://127.0.0.1:8000/createroom").then(
        response => {
          this.channel = response.data;
          this.play();
        },
        error => {
          console.log(error);
        }
      );
    },
    play() {
      this.$router.push("/play/" + this.channel);
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
}
.create-button {
  height: 75px;
  background-color: darkblue;
  color: white;
  border: none;
  border-radius: 20px;
}
</style>
