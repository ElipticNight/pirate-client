<template>
  <div class="window">
    <div class="container">
      <h1>Instructions</h1>
      <h3>One</h3>
      <h3>Two</h3>
      <h3>Three</h3>
      <h3>Four</h3>
    </div>
  </div>
</template>
<script>
export default {
  name: "Instructions"
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
    width: 50vw;
    border-radius: 50px;
    border: solid 2px blue;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: center;
  }
}
</style>
