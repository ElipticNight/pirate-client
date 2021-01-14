<template>
  <div class="container">
    <div v-for="idx in pointSquares" :key="idx">
      <PointActionSquare :reference="idx"></PointActionSquare>
    </div>
  </div>
</template>

<script>
import PointActionSquare from "@/components/setup/PointActionSquare.vue";

export default {
  components: { PointActionSquare },
  computed: {
    pointSquares() {
      return Array.from(new Array(4), (x, i) => i);
    }
  }
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