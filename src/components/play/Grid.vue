<template>
	<div>
		<div class="grid-container" :style="cssVars">
			<GridSquare v-for="i in squareNos" :key="i" :reference="i" ref="gridSquare"></GridSquare>
		</div>
  </div>
</template>

<script>
import GridSquare from "@/components/play/GridSquare.vue";

export default {
	components: { GridSquare },
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