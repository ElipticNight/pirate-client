<template>
  <div class="wrapper">
    <div class="box"></div>
    <div class="number">
      x 25
    </div>
  </div>
</template>

<script>
export default {
  props: ["PointsAvailable"]
}
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  .box {
    width: 7vh;
    height: 7vh;
    border: solid 1px black;
  }
}
</style>