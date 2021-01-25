<template>
  <div class="base-window">
  <div class="ready-container">
    <Player v-for="index in 10" :key="index"></Player>
  </div>
</div>
</template>

<script>
import Player from "@/components/setup/Player.vue";

export default {
  components: { Player },
}
</script>

<style lang="scss">
.ready-container{
  height: 75vh;
  width: 75vw;
  padding: 3vh;
  border-radius: 50px;
  border: solid 2px blue;
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  grid-template-columns: repeat(5, 1fr);
  row-gap: 3vh;
  justify-items: center;
  align-items: center;
}
</style>