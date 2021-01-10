<template>
  <div class="container">
    <div v-for="idx in this.actionSquares" :key="idx">
      <ActionSquare :reference="idx"></ActionSquare>
    </div>
  </div>
</template>

<script>
import ActionSquare from "@/components/setup/ActionSquare.vue";

export default {
  components: { ActionSquare },
  computed: {
    actionSquares() {
      return Array.from(new Array(8), (x, i) => i + 4);
    }
  },
  mounted() {
    console.log(this.actionSquares);
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