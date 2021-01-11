<template>
  <div class="container">
    <div v-for="idx in this.actionSquares" :key="idx">
      <PointActionSquare :reference="idx"></PointActionSquare>
    </div>
  </div>
</template>

<script>
import PointActionSquare from "@/components/setup/PointActionSquare.vue";

export default {
  components: { PointActionSquare },
  computed: {
    actionSquares() {
      return Array.from(new Array(8), (x, i) => i + 4);
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 1fr);
  column-gap: 2vh;
  justify-content: space-evenly;
  align-items: center;
}
</style>