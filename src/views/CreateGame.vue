<template>
  <div class="window">
    <div class="container">
      <h1>Create Game</h1>
      <h3>settings:</h3>
      <label>
        <input type="checkbox" />
        one
      </label>
      <label>
        <input type="checkbox" />
        two
      </label>
      <label>
        <input type="checkbox" />
        three
      </label>
      <label>
        <input type="checkbox" />
        four
      </label>
      <button class="create-button">Create Game</button>
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
    .create-button {
      height: 75px;
      background-color: darkblue;
      color: white;
      border: none;
      border-radius: 20px;
    }
    h1, h3 {
      color: darkblue;
    }
  }
}
</style>
