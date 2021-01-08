<template>
  <div class="base-window">
    <h1>{{ $route.params.channel }}</h1>
    <input @click="sendMessage()" type="button" value="hello">
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "Play",
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
