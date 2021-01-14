<template>
	<div>
		<button @click="triggerTest()" hidden>click me</button>
		<div class="grid-container" :style="cssVars">
			<GameGridSquare v-for="i in squareNos" :key="i" :reference="i" ref="gridSquare"></GameGridSquare>
		</div>
  </div>
</template>

<script>
import GameGridSquare from "@/components/GameGridSquare.vue";

export default {
	components: { GameGridSquare },
	data: function() {
		return {
			gridSize: 7,
			squareTypes: [1, 2, 3, 4, 5, 6, 7, 8, "200", "1000", "3000", "5000"]
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
	},
	methods: {
		triggerTest: function() {
			this.$refs.gridSquare[Math.floor(Math.random() * 48)].activated();
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