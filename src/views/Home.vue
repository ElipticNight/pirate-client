<template>
  <div class="home">
    <button @click="helloserver()">Hello Server!</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Home",

  mounted() {
    window.Echo.channel("channel").listen("hello", e => {
      console.log(e);
    });
    window.Echo.channel("channel").listen("response", e => {
      console.log(e);
    });
  },
  methods: {
    helloserver() {
      axios.get("http://127.0.0.1:8000/clientmessage")
    }
  }
};
</script>
