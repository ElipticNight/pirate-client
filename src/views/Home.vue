<template>
  <div class="home">
    <button class="message-server" @click="helloserver()">Hello Server!</button>
    <div v-for="(response, index) in responses" :key="index">
      <div class="server-response">{{response}}</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Home",
  data: function () {
    return {
      responses: []
    }
  },
  

  mounted() {
    window.Echo.channel("channel").listen("hello", e => {
      this.responses.push(e);

    });
    window.Echo.channel("channel").listen("response", e => {
      this.responses.push(e);
    });
  },
  methods: {
    helloserver() {
      axios.get("http://127.0.0.1:8000/clientmessage")
    }
  }
};
</script>

<style lang="scss" scoped>
.home{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .message-server{
    width: 300px;
    height: 25px;
    margin: 30px;
  }

  .server-response{
    margin: 5px;
    width: 300px;
    height: 50px;
    border: solid 1px black;
    text-align: center;
  }
}

</style>
