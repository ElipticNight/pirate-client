<template>
	<div>
    <div v-if="gameState === 'setup'" class="grid-container" :style="cssVars">
			<SetupGridSquare v-for="i in squareNos" :key="i" :reference="i" ref="gridSquare"></SetupGridSquare>
		</div>
		<div v-if="gameState === 'play'" class="grid-container" :style="cssVars">
      <PlayGridSquare  v-for="i in squareNos" :key="i" :reference="i" ref="gridSquare"></PlayGridSquare>
    </div>
  </div>
</template>

<script>
import PlayGridSquare from "@/components/play/GridSquare.vue";
import SetupGridSquare from "@/components/setup/GridSquare.vue";

export default {
  components: { PlayGridSquare, SetupGridSquare },
  props: ["gameState"],
	data: function() {
		return {
			gridSize: 7
		};
	},
	computed: {
		squareNos() {
			return this.gridSize ** 2
		},
		cssVars() {
			return {
				'--grid-dimensions': this.gridSize
			};
		}
	}
};
</script>

<style lang="scss" scoped>
.grid-container {
    width: 70vh;
    height: 70vh;
    display: grid;
    grid-template-rows: repeat(var(--grid-dimensions), 1fr);
		grid-template-columns: repeat(var(--grid-dimensions), 1fr);
}
</style>