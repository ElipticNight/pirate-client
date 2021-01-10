<template>
  <div class="container">
    <div v-for="(key, value, idx) in PointsAvailable[0]" :key="idx">
      <PointSquare :points="value" :availability="key" :reference="idx"></PointSquare>
    </div>
  </div>
</template>

<script>
import PointSquare from "@/components/setup/PointSquare.vue";

export default {
  components: { PointSquare },
  props: ["PointsAvailable"],
  computed: {
    PointsAvailableKeys() {
      return Object.keys(this.PointsAvailable[0]);
    }
  },
  mounted() {
    console.log(this.PointsAvailable[0]);
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