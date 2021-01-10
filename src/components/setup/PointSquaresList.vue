<template>
  <div class="container">
    <div v-for="i in 4" :key="i">
      <PointSquare></PointSquare>
    </div>
  </div>
</template>

<script>
import PointSquare from "@/components/setup/PointSquare.vue";

export default {
  components: { PointSquare },
  props: ["PointsAvailable"]
}
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  justify-content: space-evenly;
  align-items: center;
}
</style>