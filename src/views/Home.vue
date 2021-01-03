<template>
  <div class="window">
    <div class="container">
      <h1>Pirate Game</h1>
      <button class="home-button" @click="creategame()">Create Game</button>
      <button class="home-button" @click="joingame()">Join Game</button>
      <button class="home-button" @click="instructions()">Instructions</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "Home",

  methods: {
    creategame() {
      this.$router.push("/create");
    },
    joingame() {
      this.$router.push("/join");
    },
    instructions() {
      this.$router.push("/instructions");
    }
  }
}
</script>
<style lang="scss">
.window {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  .container {
    width: 500px;
    height: 750px;
    border-radius: 50px;
    border: solid 2px blue;
    padding: 20px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    text-align: center;
    .home-button {
      height: 75px;
      background-color: darkblue;
      color: white;
      border: none;
      border-radius: 20px;
    }
    h1 {
      color: darkblue;
    }
  }
}
</style>