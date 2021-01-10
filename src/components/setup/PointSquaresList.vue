<template>
  <div class="container">
    <div v-for="(Availability, Points) in PointsAvailable[0]" :key="Points">
      <PointSquare :Value="Points" :Availability="Availability"></PointSquare>
    </div>
  </div>
</template>

<script>
import PointSquare from "@/components/setup/PointSquare.vue";

export default {
  components: { PointSquare },
  props: ["PointsAvailable"],
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