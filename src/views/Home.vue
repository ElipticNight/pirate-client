<template>
  <div class="base-window">
    <div class="base-container">
      <h1>Pirate Game</h1>
      <RouteButton button-text="Create Game" route-target="create"></RouteButton>
      <RouteButton button-text="Join Game" route-target="join"></RouteButton>
      <RouteButton button-text="Instructions" route-target="instructions"></RouteButton>
    </div>
  </div>
</template>
<script>
import RouteButton from '../components/RouteButton.vue';

export default {
  components: { RouteButton },
  name: "Home",
};
</script>
<style lang="scss">
.base-window {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  .base-container {
    height: 75vh;
    width: 25vw;
    border-radius: 50px;
    border: solid 2px blue;
    padding: 20px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    text-align: center;
    h1 {
      color: darkblue;
    }
  }
}
</style>
