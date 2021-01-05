<template>
  <div class="window">
    <div class="container">
      <h1>Join Game</h1>
      <input type="text" name="roomid" placeholder="Room ID">
      <input type="button" value="Join">
    </div>
  </div>
</template>
<script>
export default {
  name: "JoinGame"
};
</script>
<style lang="scss" scoped>
.window {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  .container {
    height: 75vh;
    width: 25vw;
    border-radius: 50px;
    border: solid 2px blue;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: center;
  }
}
</style>
